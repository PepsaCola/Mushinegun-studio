
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div className="min-h-screen w-full bg-[#111111] flex flex-col font-sans">

            <header className="w-full px-6 py-5 flex items-center justify-between bg-[#27292F]">
                <Link to="/">
                    <img src="/icons/login-logo.svg" alt="Meshinegun Studio" className="h-8 w-auto" />
                </Link>
                <Link
                    to="/signup"
                    className="bg-[#F29315] hover:bg-[#d68213] text-[#111111] text-[13px] font-semibold py-3 px-6 rounded-[4px] uppercase tracking-[1px] transition-transform active:scale-95"
                >
                    Create Account
                </Link>
            </header>

            <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
                <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden min-h-[600px]">

                    <div className="flex flex-col justify-center px-4 sm:px-12 lg:px-20 py-10">
                        <div className="max-w-[400px] w-full mx-auto lg:mx-0 flex flex-col items-center">

                            <h1 className="text-white   text-[22px] font-bold mb-2 text-center lg:text-left">
                                Welcome Back, Get Login
                            </h1>
                            <p className="text-[#a0a0a0] text-[13px]  mb-8 text-center lg:text-left">
                                Join your account. Don't have account? <Link to="/signup" className="text-[#F29315] hover:underline">Create Account</Link>
                            </p>

                            <button className="w-full bg-white hover:bg-gray-100 text-[#111111] text-[13px] font-semibold h-[50px] rounded-[4px] flex items-center justify-center gap-3 mb-8 transition-colors  uppercase tracking-wide">
                                <img src="/icons/google.svg" alt=""/>
                                Login with Google
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

                                <div className="flex flex-col gap-2 ">
                                    <label className="text-[#888] text-[11px] uppercase tracking-wide font-medium">Password</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••••••"
                                        className="w-full bg-[#181818] border border-[#292828] focus:border-[#F29315]/50 rounded-[4px] px-4 h-[50px] text-white text-[15px] placeholder-[#A0A0A0] placeholder:text-[15px] outline-none transition-all tracking-widest"
                                    />
                                </div>

                                <div className="flex items-center justify-between mt-1">
                                    <label className=" flex items-center gap-2 cursor-pointer group">
                                        <input type="checkbox" className="peer sr-only" />
                                        <div className="w-4 h-4 border border-[#333] rounded-[3px] bg-[#16161A] peer-checked:bg-[#F29315] peer-checked:border-[#F29315] flex items-center justify-center transition-all">
                                            <svg className="w-3 h-3 text-black opacity-0 peer-checked:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span className="text-[#666] text-[13px] group-hover:text-[#888] transition-colors">Remember me</span>
                                    </label>

                                    <Link to="/forgot-password" className="text-[#F29315] text-[13px] hover:underline">
                                        Forgot Password?
                                    </Link>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#F29315] hover:bg-[#d68213]  text-[#111111] text-[13px] font-semibold h-[50px] rounded-[4px] uppercase  tracking-[1px] mt-4 transition-transform active:scale-[0.98] "
                                >
                                    Get Login
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="hidden lg:block relative h-full min-h-[600px] w-full rounded-[4px] overflow-hidden">
                        <img
                            src="/img/login-banner.png"
                            alt="Astronaut"
                            className="absolute inset-0 w-full h-full object-cover "
                        />

                        <div className="absolute bottom-16 left-12 right-12 z-10">
                            <h2 className=" text-white text-[26px] font-bold mb-3 leading-tight">
                                Start Your <br/> 7-day Free Trial
                            </h2>
                            <p className="max-w-[260px] opacity-80 text-[13px] leading-relaxed mb-8 ">
                                Use our presets and environments for free for 7 days of our trial subscription.
                            </p>
                            <button className="bg-[#F29315] hover:bg-[#d68213]  text-[#111111] text-[13px] font-semibold py-3 px-6 rounded-[4px] uppercase tracking-[1px] transition-colors">
                                Free Trial
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
