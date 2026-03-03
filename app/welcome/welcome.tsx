import { Link } from "react-router-dom";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center">
          <div className="max-w-[100vw] p-4">
            <p className="text-lg text-gray-500">Welcome to </p>
            <h1 className="text-5xl text-gray-300 font-bold">Instagram Clone</h1>
          </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              What&apos;s next?
            </p>
            <ul>
              
                <Link
                  to="/create"
                  className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                >
                  ➕ Create a new Post/Reel
                </Link>
                <Link
                  to='/profile/posts/grid'
                  className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                >
                  ➕ Visite your Posts
                </Link>
                <Link
                  to='/profile/reels/grid'
                    className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                  >
                  ➕ Visite your Reels
                </Link>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
