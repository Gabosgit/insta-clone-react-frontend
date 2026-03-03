import * as reactRouter from 'react-router';
import { redirect } from "react-router";
import { api } from "~/services/api";
import { createReelInputSchema } from '~/schemas/reel.schema';
import { CreateReelForm } from '~/components/CreateReelForm';

export async function action({ request }: reactRouter.ActionFunctionArgs) {
  const formData = await request.formData();
  const caption = formData.get("caption")?.toString();
  const videoUrl = formData.get("videoUrl")?.toString();

  // Client-side validation against Zod schema
  const validationResult = createReelInputSchema.safeParse({
    caption,
    video_url: videoUrl,
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

  const payload = new FormData();
  if (validationResult.data.caption) {
    payload.append("caption", validationResult.data.caption);
  }
  if (validationResult.data.videoUrl) {
    payload.append("video_url", validationResult.data.videoUrl); // 'file' is the field name backend expects
  }

  try {
    await api.post("/reels", payload, {
      headers: {
        "Content-Type": "multipart/form-data", // Crucial for file uploads
      },
    });
    return redirect("/profile/posts/grid"); // Redirect to posts grid after successful creation
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