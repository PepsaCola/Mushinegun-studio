import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuItem } from "./MenuItem/MenuItem.tsx";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const location = useLocation();

    const mainLinks = [
        { name: "Home", path: "/", icon: "home.svg" },
        { name: "Collections", path: "/collections", icon: "collections.svg" },
        { name: "Sales", path: "/sales", icon: "sales.svg" },
        { name: "Bundles", path: "/bundles", icon: "bundles.svg" },
        { name: "Blog", path: "/blog", icon: "blog.svg" },
    ];

    const categories = [
        { name: "Environments", path: "/environments", icon: "environments.svg" },
        { name: "3D Assets", path: "/assets", icon: "3d.svg" },
        { name: "Materials", path: "/materials", icon: "materials.svg" },
        { name: "VFX", path: "/vfx", icon: "vfx.svg" },
        { name: "Tools", path: "/tools", icon: "tools.svg" },
        { name: "Sounds", path: "/sounds", icon: "sounds.svg" },
        { name: "Playable Demos", path: "/demos", icon: "gamepad.svg" },
        { name: "Company", path: "/company", icon: "info.svg" },
        { name: "Subscription", path: "/subscription", icon: "bomb.svg" },
        { name: "Product Timeline Page", path: "/timeline", icon: "timeline.svg" },
        { name: "Settings", path: "/settings", icon: "settings.svg" },
    ];

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/60 z-40 lg:hidden transition-opacity duration-300 backdrop-blur-sm
                ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
                onClick={onClose}
            />

            <aside className={`
                fixed top-0 bottom-0 left-0 z-50 w-[240px] bg-[#2C2F35] flex flex-col h-full overflow-y-auto
                shadow-2xl transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
                lg:static lg:translate-x-0 lg:h-auto lg:shadow-none lg:z-auto
            `}>

                <div className="flex justify-between items-center px-6 pt-4 pb-2 lg:hidden">
                    <span className="text-white font-bold uppercase tracking-widest text-xs">Menu</span>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="py-[12px] flex flex-col h-full">
                    <nav onClick={onClose}>
                        {mainLinks.map((link) => {
                            const isProductPage = location.pathname.startsWith("/collection-product");
                            const isCollectionLink = link.path === "/collections";

                            const isActive = location.pathname === link.path || (isProductPage && isCollectionLink);

                            return (
                                <MenuItem
                                    key={link.name}
                                    item={link}
                                    isActive={isActive}
                                />
                            );
                        })}
                    </nav>

                    <div className="px-6 mt-8 mb-2 opacity-40">
                        <h3 className="text-white text-[9px] font-semibold uppercase opacity-80 ">
                            Categories
                        </h3>
                    </div>

                    <nav onClick={onClose}>
                        {categories.map((cat) => {
                            const isSettingsItem = cat.path === "/settings";
                            const isSettingsActive = isSettingsItem && location.pathname.startsWith("/settings");

                            return (
                                <MenuItem
                                    key={cat.name}
                                    item={cat}
                                    isActive={location.pathname === cat.path || isSettingsActive}
                                />
                            );
                        })}
                    </nav>

                    <div className="px-6 mt-auto text-xs leading-relaxed flex flex-col justify-center content-center pt-8 pb-4">
                        <div className="flex justify-center content-center gap-3 mb-[20px]">
                            <Link to="/for-user/terms-of-use" className="opacity-40 hover:opacity-100">Terms</Link>
                            <Link to="/for-user/privacy-policy" className="opacity-40 hover:opacity-100">Privacy</Link>
                            <Link to="for-user/help" className="opacity-40 hover:opacity-100">Help</Link>
                        </div>
                        <p className='opacity-40 text-center text-xs font-normal'>
                            ©2024 Meshingun Studio. <br/>
                            Copyright © All rights reserved worldwide.
                        </p>
                    </div>
                </div>
            </aside>
        </>
    );
};