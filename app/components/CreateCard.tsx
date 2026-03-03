import { Link } from "react-router";

export function CreateCard({ itemType, to, text }: { itemType: string, to: string, text: string }) {
  return (
    <Link
      to={to}
      className='flex w-full items-center justify-center'
    >
      <div className='w-full max-w-lg rounded-lg overflow-hidden bg-white text-center p-6 '>
        <h1 className='text-2xl font-bold'>{itemType.toUpperCase()}</h1>
        <p>{text}</p>
      </div>
    </Link>
    
  );
}