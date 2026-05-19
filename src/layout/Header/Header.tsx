import { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    onMenuClick: () => void;
    onCartClick: () => void;
}

export const Header = ({ onMenuClick, onCartClick }: HeaderProps) => {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    return (
        <header className="w-full bg-[#26292F] box-border flex items-center p-[24px] py-[14px] relative gap-[24px] sticky top-0 z-30 ">

            <div className="flex items-center gap-6">
                <button
                    onClick={onMenuClick}
                    className="text-gray-400 hover:text-white transition-colors lg:hidden"
                >
                    <img src="/icons/burger.svg" alt="burger"/>
                </button>

                <Link to="/" className="flex items-center gap-2">
                    <img src="/icons/logo.svg" alt="Meshinegun" className="w-10 h-10 rounded" />
                </Link>
            </div>

            <div className="flex items-center gap-6 justify-between w-full">

                <div className="flex-1 max-w-[500px] hidden md:block">
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-white transition-colors pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>

                        <input
                            type="text"
                            placeholder="Search 12,345 assets"
                            className="w-full bg-[#d9d9d9]/5 text-gray-200 placeholder-gray-500 text-sm rounded-full py-[10px] px-[14px] pl-[46px] outline-none border border-transparent focus:border-[#F29315]/50 transition-all"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-5 ml-auto">
                    <div className="flex items-center gap-3 sm:gap-4 text-gray-400">
                        <button
                            onClick={onCartClick}
                            className="hover:text-white transition-colors relative"
                        >
                            <img src="/icons/bucket.svg" className='w-[18px] h-[18px]' alt="Cart"/>
                            <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#F29315] rounded-full text-[8px] flex items-center justify-center text-black font-bold">2</span>
                        </button>

                        <button className="hover:text-white transition-colors">
                            <img src="/icons/moon.svg" className='w-[18px] h-[18px]' alt="Theme"/>
                        </button>
                        <button className="hover:text-white transition-colors">
                            <img src="/icons/heart-grey.svg" className='w-[18px] h-[18px]' alt="Favorites"/>
                        </button>
                    </div>

                    <button className="bg-[#F29315] hover:bg-[#E68A00] text-black text-[10px] sm:text-xs font-bold py-2 sm:py-2.5 px-4 sm:px-6 rounded-full transition-transform active:scale-95 whitespace-nowrap">
                        SUBSCRIBE
                    </button>

                    <div className="relative">
                        <div
                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-gray-700 cursor-pointer flex-shrink-0 hover:border-[#FCA311] transition-colors"
                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                                alt="User"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <UserMenu
                            isOpen={isUserMenuOpen}
                            onClose={() => setIsUserMenuOpen(false)}
                        />
                    </div>

                </div>
            </div>
        </header>
    );
};


interface UserMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const UserMenu = ({ isOpen, onClose }: UserMenuProps) => {
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-40 cursor-default" onClick={onClose} />

            <div className="absolute right-0 top-[calc(100%+12px)] w-[240px] bg-[#222327] rounded-xl shadow-2xl border border-white/5 z-50 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">

                <Link
                    to="/settings"
                    onClick={onClose}
                    className="flex items-center gap-3 px-[16px] py-[11px] opacity-80 hover:opacity-100 hover:bg-white/5 transition-colors"
                >
                    <img src="/icons/profile.svg" alt=""/>
                    <span className="text-[15px] text-white font-medium">My Account</span>
                </Link>

                <div className="flex flex-col">
                    <Link
                        to="/settings/pro"
                        onClick={onClose}
                        className="flex items-center gap-3 px-[16px] py-[11px] opacity-80 hover:opacity-100 hover:bg-white/5 transition-colors"
                    >
                        <img src="/icons/armory.svg" alt=""/>
                        <span className="text-[14px]">My Plan</span>
                    </Link>

                    <Link
                        to="/settings/purchases"
                        onClick={onClose}
                        className="flex items-center gap-3 px-[16px] py-[11px] opacity-80 hover:opacity-100 hover:bg-white/5 transition-colors"
                    >
                        <img src="/icons/purchases.svg" alt=""/>
                        <span className="text-[14px]">Purchases</span>
                    </Link>

                    <button
                        onClick={() => { console.log('Logout'); onClose(); }}
                        className="flex items-center gap-3 px-[16px] py-[11px] opacity-80 hover:opacity-100 hover:bg-white/5 transition-colors w-full text-left"
                    >
                        <img src="/icons/loguot.svg" alt=""/>
                        <span className="text-[14px]">Sign Out</span>
                    </button>
                </div>
            </div>
        </>
    );
};
