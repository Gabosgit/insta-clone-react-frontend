import { Link } from 'react-router-dom';
import type { Highlight } from "~/schemas/highlight.schema";

export function HighlightCard({ highlight }: { highlight: Highlight }) {
  return (
    <Link to={`/profile/highlights/${highlight.id}`}>
        <div className='text-center p-4'>
            <p className='font-bold text-stone-200'>User with id {highlight.user_id}</p>
        </div>
        <div className='w-full max-w-lg mx-auto rounded-full overflow-hidden border bg-white mb-6'>
            <img
                src={highlight.cover_image_url}
                alt={highlight.title || "Instagram highlight"}
                className='w-full h-auto aspect-square object-cover'
            />
        </div>
        <div className='p-4'>
            <p className="text-center text-stone-200">
            <span className='font-bold mr-2'>Story </span>
            {highlight.title}
            </p>
        </div>
    </Link>
    
  );
}