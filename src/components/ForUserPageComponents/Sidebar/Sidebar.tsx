import { NavLink } from "react-router-dom";

const MENU_ITEMS = [
    { name: "Help", path: "/for-user/help" },
    { name: "Terms of Use", path: "/for-user/terms-of-use" },
    { name: "Privacy Policy", path: "/for-user/privacy-policy" },
    { name: "Contact Us", path: "/for-user/contact-us" },

];

export const Sidebar = () => {
    return (
        <aside className="w-full lg:w-[240px] bg-[#2D2F37] border-b lg:border-b-0 border-white/5 py-[12px] flex flex-col">
            <div className="flex flex-col flex-1">
                {MENU_ITEMS.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        end={item.path === "/for-user"}
                        className={({isActive}) => `
                            w-full flex items-center gap-4 px-[24px] py-[11px] text-[13px] font-normal transition-all duration-200
                            ${isActive
                            ? "bg-[#202024] text-white"
                            : "opacity-80 hover:text-white hover:bg-white/5"
                        }
                        `}
                    >
                        {({isActive}) => (
                            <>
                                <span className={'mt-[2px]'}>{item.name}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </div>


        </aside>
    );
};

