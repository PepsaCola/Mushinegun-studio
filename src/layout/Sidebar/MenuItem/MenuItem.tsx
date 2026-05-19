import { Link } from "react-router-dom";

interface MenuItemProps {
    item: {
        name: string;
        path: string;
        icon: string;
    };
    isActive?: boolean;
}

export const MenuItem = ({ item, isActive }: MenuItemProps) => {
    return (
        <Link
            to={item.path}
            className={`group flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all duration-200
            ${isActive
                ? "bg-[#101014] text-white opacity-100 border-white/20" 
                : "text-gray-400 opacity-80 hover:opacity-100 hover:bg-[#101014]/50" 
            }`}
        >
            <img
                src={`/icons/${item.icon}`}
                alt={item.name}
                className={`w-[22px] h-[22px] transition-opacity duration-200 
                ${isActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"}`}
            />
            <span className="text-[13px] block">{item.name}</span>
        </Link>
    );
};