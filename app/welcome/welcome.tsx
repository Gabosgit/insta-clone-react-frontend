import { Link } from "react-router-dom";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center">
          <div className="max-w-[100vw] p-4">
            <p className="text-lg text-gray-600 font-bold">Welcome to </p>
            <h1 className="text-5xl text-gray-800 font-bold">Instagram Clone</h1>
          </div>
        </header>
        <div className="flex w-full items-center justify-center space-y-6 px-4">
          <nav className="w-72 rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-lg text-gray-700 font-extrabold dark:text-gray-700 text-center">
              What&apos;s next?
            </p>
            <ul>
                <Link
                  to="/create"
                  className="group flex items-center gap-3 self-stretch p-3 leading-normal link"
                >
                  ➕ Create a new Post/Reel
                </Link>
                <Link
                  to='/profile/posts/grid'
                  className="group flex items-center gap-3 self-stretch p-3 leading-normal link"
                >
                  ➕ Visite your Posts
                </Link>
                <Link
                  to='/profile/reels/grid'
                    className="group flex items-center gap-3 self-stretch p-3 leading-normal link"
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
