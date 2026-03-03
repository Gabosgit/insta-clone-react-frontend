import { CreateCard } from "~/components/CreateCard";

export default function CreateMenu() {
  return (
    <div className="grid grid-cols-2 w-full h-full gap-4 place-items-center">
        <CreateCard 
          itemType="Post" 
          to="/profile/create/post"
          text="Add a photo/video and text to create a post."
        />
        <CreateCard 
          itemType="Reel" 
          to="/profile/create/reel"
          text="Add a video to create a reel."
        />
    </div>
  );
}