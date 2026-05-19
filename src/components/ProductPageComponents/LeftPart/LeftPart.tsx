import React from "react";
import { NavLink } from "react-router-dom";
import type { ProductData } from "../../../pages/Product/Product.tsx";

const BASE_STYLE = "flex items-center justify-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs font-bold uppercase leading-none transition-colors border whitespace-nowrap flex-shrink-0";

const ACTIVE_STYLE = "bg-[#FCA311] text-[#111111] border-[#FCA311] hover:bg-[#e0900e]";

const INACTIVE_STYLE = "bg-[#1E1E22] text-[#8E8E91] border-white/25 ";

const IconDescription = () => (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="sm:w-5 sm:h-5">
        <path d="M5.32445 3.63635C3.88995 3.63635 2.72705 4.81733 2.72705 6.27413V11.5497C2.72705 13.0065 3.88995 14.1875 5.32445 14.1875H5.84393V16.2367C5.84393 17.1251 6.87425 17.5999 7.53259 17.0148L10.7144 14.1875H14.6751C16.1096 14.1875 17.2725 13.0065 17.2725 11.5497V6.27413C17.2725 4.81733 16.1096 3.63635 14.6751 3.63635H5.32445Z" fill="currentColor"/>
    </svg>
);

const IconVideo = () => (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="sm:w-5 sm:h-5">
        <path d="M15.8263 6.7545C15.6168 6.66019 15.3843 6.62951 15.1575 6.66628C14.9308 6.70305 14.7198 6.80565 14.5509 6.96133L13.0686 8.3402V7.34052C13.0686 6.79197 12.8507 6.26589 12.4628 5.87801C12.0749 5.49013 11.5488 5.27222 11.0003 5.27222H4.79536C4.24681 5.27222 3.72073 5.49013 3.33284 5.87801C2.94496 6.26589 2.72705 6.79197 2.72705 7.34052V12.856C2.72705 13.4046 2.94496 13.9306 3.33284 14.3185C3.72073 14.7064 4.24681 14.9243 4.79536 14.9243H11.0003C11.5488 14.9243 12.0749 14.7064 12.4628 14.3185C12.8507 13.9306 13.0686 13.4046 13.0686 12.856V11.8563L14.5578 13.2352C14.777 13.4336 15.0618 13.5441 15.3575 13.5454C15.5216 13.5451 15.6838 13.5098 15.8332 13.442C16.0366 13.3598 16.2108 13.2188 16.3336 13.037C16.4564 12.8552 16.5222 12.641 16.5226 12.4217V7.77487C16.5217 7.55472 16.4548 7.33991 16.3307 7.15807C16.2066 6.97623 16.031 6.83568 15.8263 6.7545Z" fill="currentColor"/>
    </svg>
);

interface LeftPartProps {
    activeImg: string;
    product: ProductData;
    setActiveImg: (img: string) => void;
}

export const LeftPart: React.FC<LeftPartProps> = ({ activeImg, product, setActiveImg }) => {
    return (
        <div className="lg:col-span-8 flex flex-col gap-6">

            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#111]">
                <img src={activeImg} alt="Main" className="w-full h-full object-cover transition-opacity duration-300"/>
            </div>

            <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {product.images.map((img, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveImg(img)}
                        className={`aspect-video rounded-lg overflow-hidden border cursor-pointer transition-all duration-200 
                                    ${activeImg === img ? 'border-[#FCA311] opacity-100' : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'}
                                `}
                    >
                        <img src={img} alt={`thumb-${index}`} className="w-full h-full object-cover"/>
                    </div>
                ))}
            </div>

            <div className="flex gap-2 sm:gap-4 mt-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                <NavLink
                    to=""
                    end
                    className={({ isActive }) => `${BASE_STYLE} ${isActive ? ACTIVE_STYLE : INACTIVE_STYLE}`}
                >
                    <IconDescription />
                    Description
                </NavLink>

                <NavLink
                    to="videos"
                    className={({ isActive }) => `${BASE_STYLE} ${isActive ? ACTIVE_STYLE : INACTIVE_STYLE}`}
                >
                    <IconVideo />
                    Videos
                </NavLink>

                <NavLink
                    to="reviews"
                    className={({ isActive }) => `${BASE_STYLE} ${isActive ? ACTIVE_STYLE : INACTIVE_STYLE}`}
                >
                    <IconDescription />
                    Reviews
                </NavLink>

                <NavLink
                    to="tech-specs"
                    className={({ isActive }) => `${BASE_STYLE} ${isActive ? ACTIVE_STYLE : INACTIVE_STYLE}`}
                >
                    <IconDescription />
                    Tech Specs
                </NavLink>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <p className="opacity-80 text-xs font-light">Share this item:</p>
                <div className="flex gap-2 flex-wrap">
                    <a href="#" className="p-2 opacity-80 hover:opacity-100 transition-colors rounded-full bg-[#28282B] border border-white/25">
                        <img src="/icons/facebook.svg" alt="Facebook" className="w-4 h-4"/>
                    </a>
                    <a href="#" className="p-2 opacity-80 hover:opacity-100 transition-colors rounded-full bg-[#28282B] border border-white/25">
                        <img src="/icons/instagram.svg" alt="Instagram" className="w-4 h-4"/>
                    </a>
                    <a href="#" className="p-2 opacity-80 hover:opacity-100 transition-colors rounded-full bg-[#28282B] border border-white/25">
                        <img src="/icons/twitter.svg" alt="Twitter" className="w-4 h-4"/>
                    </a>
                    <button className="py-2 px-4 text-xs font-semibold uppercase flex gap-2 w-fit items-center opacity-80 hover:opacity-100 transition-colors rounded-full bg-[#28282B] border border-white/25">
                        <img width={16} height={16} src="/icons/Link.svg" alt=""/>
                        Copy Link
                    </button>
                </div>
            </div>
        </div>
    )
}