import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
    return (
        <div className="min-h-screen w-full bg-[#111111] flex flex-col font-sans">

            <header className="w-full px-6 py-5 flex items-center justify-between  bg-[#27292F]">
                <Link to="/">
                    <img src="/icons/login-logo.svg" alt="Meshinegun Studio" className="h-8 w-auto" />
                </Link>
                <Link
                    to="/login"
                    className="bg-[#F29315] hover:bg-[#d68213] text-[#111111] text-[13px] font-semibold py-3 px-6 rounded-[4px] uppercase tracking-[1px] transition-transform active:scale-95"
                >
                    Login
                </Link>
            </header>

            <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
                <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden min-h-[600px]">

                    <div className="flex flex-col justify-center px-4 sm:px-12 lg:px-20 py-10 order-2 lg:order-1">
                        <div className="max-w-[400px] w-full mx-auto lg:mx-0 flex flex-col items-center">

                            <h1 className="text-white text-[22px] font-bold mb-2 text-center lg:text-left">
                                Create an Account
                            </h1>
                            <p className="text-[#a0a0a0] text-[13px] mb-8 text-center lg:text-left">
                                Already have an account? <Link to="/login" className="text-[#F29315] hover:underline">Login</Link>
                            </p>

                            <button className="w-full bg-white hover:bg-gray-100 text-[#111111] text-[13px] font-semibold h-[50px] rounded-[4px] flex items-center justify-center gap-3 mb-8 transition-colors uppercase tracking-wide">
                                <img src="/icons/google.svg" alt=""/>
                                Sign Up with Google
                            </button>

                            <form className="flex flex-col gap-5 w-full">
                                <div className="flex flex-col gap-2 w-full">
                                    <label className="text-[#888] text-[11px] uppercase tracking-wide font-medium">Email</label>
                                    <input
                                        type="email"
                                        placeholder="customer@demo.com"
                                        className="w-full bg-[#181818] border border-[#292828] focus:border-[#F29315]/50 rounded-[4px] px-4 h-[50px] text-white text-[15px] placeholder-[#A0A0A0] placeholder:text-[15px] outline-none transition-all"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-[#888] text-[11px] uppercase tracking-wide font-medium">Password</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••••••"
                                        className="w-full bg-[#181818] border border-[#292828] focus:border-[#F29315]/50 rounded-[4px] px-4 h-[50px] text-white text-[15px] placeholder-[#A0A0A0] placeholder:text-[15px] outline-none transition-all tracking-widest"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-[#888] text-[11px] uppercase tracking-wide font-medium">Confirm Password</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••••••"
                                        className="w-full bg-[#181818] border border-[#292828] focus:border-[#F29315]/50 rounded-[4px] px-4 h-[50px] text-white text-[15px] placeholder-[#A0A0A0] placeholder:text-[15px] outline-none transition-all tracking-widest"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#F29315] hover:bg-[#d68213] text-[#111111] text-[13px] font-semibold h-[50px] rounded-[4px] uppercase tracking-[1px] mt-4 transition-transform active:scale-[0.98]"
                                >
                                    Sign Up
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="hidden lg:block relative h-full min-h-[600px] w-full rounded-[4px] overflow-hidden order-1 lg:order-2">

                        <img
                            src="/img/create-acc-banner.png"
                            alt="Gamer setup"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                        <div className="absolute bottom-16 left-12 right-12 z-10">
                            <h2 className="text-white text-[26px] font-bold mb-6 leading-tight">
                                Join our discord to <br/> so you get to:
                            </h2>

                            <ul className="flex flex-col gap-4 mb-8">
                                <ListItem
                                    icon={<img src="/icons/join-discord-1.svg" alt=""/>}
                                    text={<>Engage with our <span className="text-[#F29315]">community and devs</span></>}
                                />
                                <ListItem
                                    icon={<img src="/icons/join-discord-2.svg" alt=""/>}
                                    text={<>Find out about the latest <span className="text-[#F29315]">releases</span></>}
                                />
                                <ListItem
                                    icon={<img src="/icons/join-discord-3.svg" alt=""/>}
                                    text={<>Never miss out on our <span className="text-[#F29315]">sales</span> ever again</>}
                                />
                                <ListItem
                                    icon={<img src="/icons/join-discord-4.svg" alt=""/>}
                                    text={<>Troubleshoot and support <span className="text-[#F29315]">for product</span></>}
                                />
                            </ul>

                            <button className="bg-[#5865F2] hover:bg-[#4752C4]  text-white text-xs font-semibold py-3.5 px-6 rounded-[4px] uppercase tracking-[1px] transition-colors flex items-center gap-2">
                                <img src="/icons/discord-white.svg" alt="" className="w-4 h-4 invert brightness-0 grayscale-0 opacity-100" style={{filter: 'brightness(0) invert(1)'}}/>
                                Join Our Discord
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


const ListItem = ({ icon, text }: { icon: React.ReactNode, text: React.ReactNode }) => (
    <li className="flex items-center gap-3 text-white text-[13px] font-medium">
        <div className="w-5 h-5 flex items-center justify-center text-white ">
            {icon}
        </div>
        <span className={'text-[13px] font-normal'}>{text}</span>
    </li>
);


