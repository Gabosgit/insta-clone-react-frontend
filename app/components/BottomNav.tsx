import { Link } from "react-router";

export default function BottomNav() {
  return (
    <footer className='fixed bottom-0 left-0 z-50 w-full h-16 bg-stone-200 border-t'>
      <div className='grid h-full grid-cols-6 mx-auto font-medium'>
        <Link
          to='/home'
          className='inline-flex flex-col items-center justify-center px-5'
        >
          🏠
        </Link>
        <div className='inline-flex flex-col items-center justify-center px-5'>
          🔍
        </div>
        <Link
          to="/create"
          className='inline-flex flex-col items-center justify-center px-5'
        >
          ➕
        </Link>
        <Link
          to='/profile/reels/grid'
          className='inline-flex flex-col items-center justify-center px-5'
        >
          Reels
        </Link>
        <Link
          to='/profile/tagged/grid'
          className='inline-flex flex-col items-center justify-center px-5'
        >
          Tagged
        </Link>
        <Link
          to='/profile'
          className='inline-flex flex-col items-center justify-center px-5'
        >
          👤
        </Link>
      </div>
    </footer>
  );
}