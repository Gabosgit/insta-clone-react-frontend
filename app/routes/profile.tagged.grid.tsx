import { useLoaderData } from "react-router";
import { api } from "~/services/api";
import { taggedPostsSchema, type Tagged } from "~/schemas/tagged.schema";
import { TaggedCard } from "~/components/TaggedCard";

export async function loader() {
  try {
    const response = await api.get("/tagged");
    return taggedPostsSchema.parse(response.data);
  } catch (error) {
    console.error("Failed to load tagged posts:", error);
    throw new Response("Could not load tagged posts.", { status: 500 });
  }
}

export default function taggedPostsGrid() {
  const taggedPosts = useLoaderData() as Tagged[];
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {taggedPosts.map((tagged) => (
        <TaggedCard key={tagged.id} tagged={tagged} />
      ))}
    </div>
  );
}