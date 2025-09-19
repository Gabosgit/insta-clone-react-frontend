import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "react-router";
import stylesheet from "./app.css?url";
import ButtomNav from "./components/BottomNav"

export function links() {
  return [{ rel: "stylesheet", href: stylesheet }];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='min-h-screen'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='min-h-screen bg-gray-50 text-gray-800'>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className='sticky top-0 z-50 w-full border-b bg-white'>
          <nav className='mx-auto px-8 py-3'>
            <h1 className='text-xl font-bold'>Instagram</h1>
          </nav>
        </header>

        <div className="flex-grow w-full bg-slate-900">
          <Outlet />
        </div>
        <div className='py-4 text-center text-sm text-gray-500 bg-slate-800 mt-10 mb-16'>
          <p>&copy; 2025 Webeet</p>
        </div>
      </div>

      <ButtomNav/>
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
      <div className='container mx-auto p-4 text-center'>
        <h1 className='text-2xl font-bold'>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        {isRouteErrorResponse(error) && (
          <p className='text-red-500'>
            <i>
              {error.status} {error.statusText}
            </i>
          </p>
        )}
      </div>
  );
}