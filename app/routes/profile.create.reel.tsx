import * as reactRouter from 'react-router';
import { redirect } from "react-router";
import { api } from "~/services/api";
import { createReelInputSchema } from '~/schemas/reel.schema';
import { CreateReelForm } from '~/components/CreateReelForm';

export async function action({ request }: reactRouter.ActionFunctionArgs) {
  const formData = await request.formData();
  const caption = formData.get("caption")?.toString();
  const videoUrl = formData.get("videoUrl")?.toString();

  for (const [key, value] of formData.entries()) {
    console.log(key, value);
  }
  

  // Client-side validation against Zod schema
  const validationResult = createReelInputSchema.safeParse({
    caption,
    videoUrl,
  });
  

  if (!validationResult.success) {
    // For simplicity, we'll just log and redirect for now.
    // We could return errors to the form, e.g., via `json`
    console.error(
      "Client-side validation failed:",
      validationResult.error.issues,
    );
    return redirect("/create"); // Redirect back to the form
  }

  function extractYouTubeId(url: string) {
    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/,
    );
    return match?.[1];
  }

  const videoId = extractYouTubeId(validationResult.data.videoUrl);

  try {
    await api.post("/reels", {
      caption: validationResult.data.caption,
      video_url: validationResult.data.videoUrl,
      thumbnail_url: videoId
      ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      : "",
    });
    return redirect("/profile/reels/grid"); // Redirect to posts grid after successful creation
  } catch (error) {
    console.error("Error creating reel:", error);
    // Handle API errors (e.g., show a toast message)
    return { success: false, error: "Failed to create reel." };
  }
}

export default function CreateReelPage() {
  return (
    <div className="grow h-full py-8">
      <CreateReelForm />
    </div>
  );
}