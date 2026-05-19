import { CustomSelect } from "../../CumonComponents/CustomSelect/CustomSelect.tsx";
import React from "react";
import type { ProductData } from "../../../pages/Product/Product.tsx";

interface RightPartProps {
    product: ProductData;
    isExpanded: boolean;
    setIsExpanded: (expanded: boolean) => void;
    setCurrency: (currency: string) => void;
    setLicense: (license: string) => void;
}

export const RightPart: React.FC<RightPartProps> = ({
                                                        product,
                                                        isExpanded,
                                                        setIsExpanded,
                                                        setCurrency,
                                                        setLicense
                                                    }) => {
    return (
        <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
            <div>
                <div className="flex justify-between items-start mb-2">
                    <h1 className="text-xl lg:text-[22px] font-bold leading-tight">{product.title}</h1>
                    <button className="p-[10px] lg:p-[12px] bg-white/5 rounded-[14px] hover:bg-white/10 transition-colors flex-shrink-0 ml-4">
                        <img src="/icons/like.svg" alt="Save" className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] opacity-70"/>
                    </button>
                </div>

                <p className={`text-gray-400 text-sm leading-relaxed mb-2 whitespace-pre-line ${!isExpanded ? 'line-clamp-3' : ''}`}>
                    {product.description}
                </p>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-[#FCA311] text-sm hover:underline font-medium focus:outline-none"
                >
                    {isExpanded ? "Show Less" : "Learn More"}
                </button>
            </div>

            <div className="flex flex-col gap-3 py-6 border-t border-b border-white/10">
                {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between text-sm gap-4">
                        <span className="font-medium text-gray-300 whitespace-nowrap">{spec.label}</span>
                        <span className="opacity-80 font-light text-right text-white break-words">{spec.value}</span>
                    </div>
                ))}
            </div>

            <div className="flex gap-6 text-xs text-gray-500">
                <span className="flex items-center gap-2"><img src="/icons/size.svg" alt=""/> 1.19 GB</span>
                <span className="flex items-center gap-2"><img src="/icons/calendar.svg" alt=""/> Feb 3, 2022</span>
            </div>

            <div className="flex flex-col box-content content-center gap-[12px]">
                <div className="flex flex-col sm:flex-row gap-3 mb-[12px]">
                    <div className="flex-1">
                        <CustomSelect
                            options={["USD", "EUR", "GBP"]}
                            defaultValue="USD"
                            onChange={(val) => setCurrency(val)}
                        />
                    </div>

                    <div className="flex-1">
                        <CustomSelect
                            options={["Personal License", "Commercial License", "Studio License"]}
                            defaultValue="Personal License"
                            onChange={(val) => setLicense(val)}
                        />
                    </div>
                </div>

                <button
                    className="w-full bg-[#F29315] hover:bg-[#d68213] transition-colors p-[16px] lg:p-[20px] rounded-full uppercase tracking-wide flex justify-between items-center group">
                    <p className={'text-[#111111] leading-none text-xs lg:text-[13px] font-semibold uppercase'}>Add To Cart</p>
                    <div className="flex items-center gap-2">
                        <p className="inline-block leading-none opacity-50 text-[#111111] text-xs lg:text-[13px] line-through decoration-opacity-50 font-['Overpass_Mono'] uppercase">{product.oldPrice}</p>
                        <p className="inline-block leading-none text-[#111111] font-bold text-sm lg:text-[16px] font-['Overpass_Mono']">{product.price}</p>
                    </div>
                </button>

                <button
                    className="w-full bg-[#f29315]/10 hover:bg-[#f29315]/20 transition-colors p-[16px] lg:p-[20px] rounded-full uppercase tracking-wide flex justify-between items-center">
                    <p className={'text-[#f29315] leading-none text-xs lg:text-[13px] font-semibold uppercase'}>Redeem Ammo</p>
                    <div className="flex items-center gap-2">
                        <p className="inline-block opacity-50 leading-none text-[#f29315] font-medium text-xs lg:text-[13px] line-through decoration-opacity-50 font-['Overpass_Mono'] uppercase">2,999</p>
                        <p className="flex gap-[5px] leading-none text-[#f29315] font-bold text-sm lg:text-[16px] font-['Overpass_Mono'] items-center">
                            2,499 <img src="/icons/rifle-gun-bullet-icon.svg" alt="" className="w-3 h-3 lg:w-auto lg:h-auto"/>
                        </p>
                    </div>
                </button>

                <button
                    className="w-full bg-[#28282B] hover:bg-[#323236] transition-colors pl-[8px] py-[7px] pr-[16px] lg:pr-[20px] rounded-full uppercase tracking-wide flex justify-between items-center border border-transparent hover:border-white/10">
                    <div className={'flex gap-[10px] lg:gap-[14px] items-center'}>
                        <img src="/icons/save-with-ammo.svg" alt="" className="w-8 h-8 lg:w-auto lg:h-auto"/>
                        <p className={'flex flex-col gap-[4px] leading-none text-[13px] font-semibold uppercase items-start'}>
                            <span className={"text-left text-[9px] lg:text-[10px] font-normal text-[#f29315] normal-case opacity-80"}>Save 20% with</span>
                            <span className="text-white text-xs lg:text-[13px]">Redeem Ammo</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <p className="inline-block opacity-50 leading-none text-[#f29315] font-medium text-xs lg:text-[13px] line-through decoration-opacity-50 font-['Overpass_Mono'] uppercase">2,999</p>
                        <p className="flex gap-[5px] leading-none text-[#f29315] font-bold text-sm lg:text-[16px] font-['Overpass_Mono'] items-center">
                            2,499 <img src="/icons/rifle-gun-bullet-icon.svg" alt="" className="w-3 h-3 lg:w-auto lg:h-auto"/>
                        </p>
                    </div>
                </button>
            </div>
        </div>
    )
}