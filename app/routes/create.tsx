import { CreateCard } from "~/components/CreateCard";

export default function CreateMenu() {
  return (
    <div className="flex flex-col h-full items-center justify-center">
        <h1 className="text-3xl font-bold mb-8">
          What would you like to create?
        </h1>
        <div className="grid grid-cols-2 w-full gap-4 place-items-center">
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
    </div>
    
  );
}