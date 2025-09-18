import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { api } from "~/services/api";
// Assume you have a highlight schema and a HighlightStory component
// import { highlightSchema, type Highlight } from "~/schemas/highlight.schema";
// import { HighlightStory } from "~/components/HighlightStory";

export async function loader({ params }: LoaderFunctionArgs) {
  // The `params` object contains the dynamic parts of the URL.
  // The key (`id`) matches the filename (`$id.tsx`).
  const highlightId = params.id;

  try {
    const response = await api.get(`/highlights/${highlightId}`);
    // return highlightSchema.parse(response.data);
    return response.data; // Replace with schema parsing
  } catch (error) {
    console.error(error);
    throw new Response("Highlight not found", { status: 404 });
  }
}

export default function HighlightDetail() {
  const highlight = useLoaderData();
  // Add a typeguard to help typescript understand what the higlhight is if needed

  return (
    <div className='flex h-[70vh] overflow-hidden'>
        <div className="flex w-1/2 justify-center items-center">
            <img
                src={highlight.cover_image_url}
                alt={highlight.title || "Instagram highlight"}
                className='object-cover h-full w-auto'
            />
        </div>
        <div className="flex flex-col w-1/2 justify-center items-center gap-5">
            <div>
                <h1 className="font-extrabold text-8xl" >HIGHLIGHT</h1>
                <p className="text-stone-200">{highlight.title}</p>
            </div>
            <p className="w-full text-right">USER: {highlight.user_id} created: {highlight.created_at}</p>
        </div>
    </div>
  );
}