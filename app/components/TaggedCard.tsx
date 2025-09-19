import type { Tagged } from "~/schemas/tagged.schema";

export function TaggedCard({ tagged }: { tagged: Tagged }) {
  return (
    <div className='w-full max-w-lg mx-auto rounded-lg overflow-hidden border bg-white mb-6'>
      <div className='p-4'>
        <p className='font-bold'>webeet_user</p>
      </div>
      <img
        src={tagged.img_url}
        alt={tagged.caption || "Instagram post"}
        className='w-full h-auto aspect-square object-cover'
      />
      <div className='p-4'>
        <p>
          <span className='font-bold mr-2'>webeet_user</span>
          {tagged.caption}
        </p>
      </div>
    </div>
  );
}