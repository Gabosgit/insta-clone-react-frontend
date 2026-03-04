
import { Link } from "react-router-dom";

export default function SideNav() {
    return (
        <nav className='fixed group left-3 z-50 h-full w-auto transparent border-t'>
            <div className='flex flex-col justify-center h-full mx-auto font-medium'>
                <div className='flex flex-col gap-1 bg-gray-800/50 rounded-xl'>
                    {resources.map((resource) => (
                        <Link
                            key={resource.name}
                            to={resource.href}
                            className='px-5 py-3 bg-transparent rounded-xl flex items-center
                            hover:bg-gray-500 dark:hover:bg-gray-500 transition-colors duration-200'
                        >
                            <p className="text-gray-50">
                                <span className="text-xl">
                                    {resource.icon}
                                </span>
                                <span className="hidden pl-3 shadow-gray-900 shadow-2xl 
                                group-hover:inline transition-all duration-200">
                                    {resource.text}
                                </span>
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