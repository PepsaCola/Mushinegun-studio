import  { useState } from "react";
import { SectionTitle } from "../../CumonComponents/SectionTitle/SectionTitle.tsx";

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ_DATA: FAQItem[] = [
    {
        question: "How can I purchase the products?",
        answer: "To purchase our products, you need to sign up on our website and create an account. Then, you can choose the desired products and make a purchase using our credit or subscription system."
    },
    {
        question: "How can I download the products I've purchased?",
        answer: "Once purchased, your products will be available in your account dashboard under the 'Downloads' section. You can download them anytime."
    },
    {
        question: "In which file formats are your products provided?",
        answer: "Most of our 3D assets are provided in FBX and OBJ formats, compatible with major engines. Specific project files (Unreal/Unity) are provided as project folders."
    },
    {
        question: "How can I add Unreal Asset to my project?",
        answer: "Open your Epic Games Launcher, go to Library, find the asset in your Vault, and click 'Add to Project'. Select your target project and confirm."
    },
    {
        question: "How can I import an Unreal Environment to my project?",
        answer: "For environments, we usually provide a complete project file. You can open it directly or migrate the specific 'Content' folder to your existing project."
    },
    {
        question: "How can I add Unity Asset to my project?",
        answer: "Import the provided .unitypackage file into your project by going to Assets > Import Package > Custom Package in the Unity Editor."
    },
    {
        question: "Can I use the purchased products in my commercial projects?",
        answer: "Yes, our Standard License allows you to use the assets in commercial projects like games, movies, and visualizations. Please check the license agreement for specific limitations."
    },
    {
        question: "What is your refund or return policy for the products?",
        answer: "We offer refunds within 14 days of purchase if the product has not been downloaded. If there are technical issues, please contact support."
    }
];

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg
        width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}
    >
        <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full  px-[28px]  flex flex-col">
            <div className={' max-w-[1400px] mx-auto bg-[#d9d9d9]/5 px-[38px]  py-[32px]'}>
                <SectionTitle className={'mb-8'}>FAQ</SectionTitle>

                <div className="flex flex-col gap-4">
                    {FAQ_DATA.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={` overflow-hidden transition-colors duration-300 border border-transparent
                                    
                                `}
                            >
                                <button
                                    onClick={() => toggleItem(index)}
                                    className={`w-full flex items-center justify-between p-6 text-left focus:outline-none rounded-lg ${isOpen ? 'bg-white/10' :'bg-[#16161A]' }`}
                                >
                                    <span className="text-white text-sm md:text-[15px] font-medium">
                                        {item.question}
                                    </span>
                                    <span className="text-gray-400 ml-4 flex-shrink-0">
                                        <ChevronIcon isOpen={isOpen} />
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out
                                        ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                                    `}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 py-6 text-[#a0a0a0] text-sm font-normal leading-relaxed">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};