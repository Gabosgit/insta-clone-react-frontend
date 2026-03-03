
import { Link } from "react-router-dom";

export default function SideNav() {
    return (
        <nav className='fixed left-0 z-50 h-full w-auto transparent border-t'>
            <div className='flex flex-col justify-center h-full mx-auto font-medium'>
                <div>
                    {resources.map((resource) => (
                        <Link
                            key={resource.name}
                            to={resource.href}
                            className='px-5 py-3 bg-transparent rounded-sm flex items-center
                            hover:bg-gray-500 dark:hover:bg-gray-500 transition-colors duration-200'
                        >
                            <p className="text-gray-50">
                                <span className="text-xl pr-4">{resource.icon}</span>
                                <span className="shadow-gray-900 shadow-2xl ">{resource.text}</span>
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export const resources = [
    {
        name: "Home",
        href: "/home",
        icon: "🏠",
        text: "Home"
    },
    {
        name: "Posts",
        href: "/profile/posts/grid",
        icon: "🖼️",
        text: "Posts"
    },
    {
        name: "Reels",
        href: "/profile/reels/grid",
        icon: "🎬",
        text: "Reels"
    },
    {
        name: "Create",
        href: "/create",
        icon: "➕",
        text: "Create"
    },
    {
        name: "Search",
        href: "/search",
        icon: "🔍",
        text: "Search"
    },
    {
        name: "Tagged",
        href: "/profile/tagged/grid",
        icon: "🏷️",
        text: "Tagged"
    },
    {
        name: "Profile",
        href: "/profile",
        icon: "👤",
        text: "Profile"
    }
]