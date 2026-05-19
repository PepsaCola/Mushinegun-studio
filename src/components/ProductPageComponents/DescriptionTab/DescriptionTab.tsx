import { SectionTitle } from "../../CumonComponents/SectionTitle/SectionTitle.tsx";
import { RecommendationsSwiper } from "./RecommendationsCarousel/RecommendationsCarousel.tsx";

export const DescriptionTab = () => {
    return (
        <>
            <div className="lg:col-span-8">
                <SectionTitle>Specs</SectionTitle>

                <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 w-full mt-6">
                    <SpecsItem icon="/icons/marketplace_img.svg" label="On marketplace" />
                    <SpecsItem icon="/icons/docs_icon.svg" label="Documentation" />
                    <SpecsItem icon="/icons/assets_icon.svg" label="Asset List" />
                    <SpecsItem icon="/icons/demo_icon.svg" label="Playable Demo" />
                </ul>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 lg:grid-cols-8 gap-6 mt-8 lg:mt-0">
                <div className="col-span-1 lg:col-span-8">
                    <SectionTitle>Credits</SectionTitle>
                </div>

                <div className="lg:col-span-5 bg-[#202024] rounded-[10px] p-6 lg:px-[25px] lg:py-[52px]">
                    <div className="grid grid-cols-2 gap-4 lg:gap-6">
                        <ul className="flex flex-col justify-start gap-4 items-end text-right">
                            <CreditRole>Art Director/Studio Head</CreditRole>
                            <CreditRole>Technical Director/Tech Artist</CreditRole>
                            <CreditRole>Lighting Artist</CreditRole>
                            <CreditRole>Tool/Sound Programmer</CreditRole>
                            <CreditRole>Environment Artist</CreditRole>
                            <CreditRole>Additional Environment Artists</CreditRole>
                            <CreditRole>Prop Artists</CreditRole>
                        </ul>
                        <ul className="flex flex-col justify-start gap-4 items-start text-left">
                            <CreditName>Alireza Heidari</CreditName>
                            <CreditName>Reza Heidari</CreditName>
                            <CreditName>Alireza Heidari</CreditName>
                            <CreditName>Reza Heidari</CreditName>
                            <CreditName>Maithili Patil</CreditName>
                            <CreditName>Hossein Mohaghegh</CreditName>
                            <CreditName>Ali Vahedi Subash Chander</CreditName>
                            <CreditName>Graybite</CreditName>
                            <CreditName>Nextivlaudio</CreditName>
                        </ul>
                    </div>
                </div>

                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6 h-fit">
                    <SupportCard
                        title="Technical Support"
                        text="Our team is available to help you at anytime. don't hesitate to reach-out"
                    />
                    <SupportCard
                        title="Submit Ticket"
                        text="Our team is available to help you at anytime. don't hesitate to reach-out"
                    />
                </div>
            </div>

            <div className="lg:col-span-8 mt-8 lg:mt-0">
                <RecommendationsSwiper />
            </div>

            <div className="lg:col-span-8 flex justify-center items-center mt-8 mb-4">
                <button className="flex gap-[14px] justify-center items-center py-[14px] px-[55px] rounded-full border border-white/25 bg-[#28282B] box-border opacity-80 hover:opacity-100 text-[13px] font-semibold uppercase transition-opacity active:scale-95 transform duration-150">
                    <img src="/icons/upload.svg" alt="" />
                    Upload Yours
                </button>
            </div>
        </>
    );
};


const SpecsItem = ({ icon, label }: { icon: string; label: string }) => (
    <li className="bg-[#202024] rounded-[10px] p-4 lg:p-[20px] flex flex-col items-center justify-center gap-3 lg:gap-[16px] text-center h-full">
        <img src={icon} alt="" className="w-6 h-6 lg:w-auto lg:h-auto" />
        <p className="text-[#9f9fa1] text-xs lg:text-base">{label}</p>
    </li>
);

const CreditRole = ({ children }: { children: React.ReactNode }) => (
    <li className="text-[#9f9fa1] text-xs sm:text-[13px] font-normal leading-tight h-[20px] sm:h-auto flex items-center">
        {children}
    </li>
);

const CreditName = ({ children }: { children: React.ReactNode }) => (
    <li className="text-white text-xs sm:text-[13px] font-normal leading-tight h-[20px] sm:h-auto flex items-center">
        {children}
    </li>
);

const SupportCard = ({ title, text }: { title: string; text: string }) => (
    <div className="py-6 px-6 lg:py-[32px] lg:px-[24px] bg-[#202024] rounded-[10px] flex flex-col gap-4 lg:gap-[24px] items-center text-center h-full">
        <img className="p-[10px] rounded-[8px] bg-white/25" src="/icons/discord.svg" alt="" />
        <p className="text-[#9F9FA1] text-base font-normal">{title}</p>
        <span className="text-[#9F9FA1] text-[13px] font-normal leading-[22px]">
            {text}
        </span>
    </div>
);