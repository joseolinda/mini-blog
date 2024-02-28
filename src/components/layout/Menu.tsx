import { LucideCircleUser, LucideHelpCircle, LucideMessageSquareQuote } from "lucide-react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div id="container-menu" className="bg-gray-800 w-full fixed z-10 bottom-0">
        <div
            id="menu"
            className={`
                bg-gray-800
                text-gray-300
                border-t
                border-gray-800
                flex
                justify-between
                z-10
                max-w-7xl
                mx-auto
            `}
        >
        <NavLink  to="/" className={`
                flex
                flex-col
                items-center
                border-t-4
                border-gray-800
                active:text-white
                active:bg-gray-700
                active:border-t-4
                active:border-red-500
                w-1/3
                px-2
                py-2
                transition
            `}
        >
            <LucideMessageSquareQuote size={24} />
            <span
                className="hidden md:block"
            >Feed</span>
        </NavLink>
        <NavLink to="/profile" className={`
                flex
                flex-col
                items-center
                border-t-4
                border-gray-800
                active:text-white
                active:bg-gray-700
                active:border-t-4
                active:border-red-500
                w-1/3
                px-2
                py-2
                transition
            `}
        >
            <LucideCircleUser size={24} />
            <span
                className="hidden md:block"
            >Perfil</span>
        </NavLink>
        <NavLink to="/help" className={`
                flex
                flex-col
                items-center
                border-t-4
                border-gray-800
                active:text-white
                active:bg-gray-700
                active:border-t-4
                active:border-red-500
                w-1/3
                px-2
                py-2
                transition
            `}
        >
            <LucideHelpCircle size={24} />
            <span
                className="hidden md:block"
            >Ajuda</span>
        </NavLink>
        </div>
        <div className="clear-both"></div>
    </div>
  );
}

export default Menu;