import  { useState } from "react";

interface PricingPlan {
    id: string;
    name: string;
    description: string;
    price: string;
    features: string[];
}

const PLANS: PricingPlan[] = [
    {
        id: "basic",
        name: "Basic",
        description: "Best for personal use",
        price: "$14.99",
        features: [
            "Technical support",
            "New assets continually",
            "Option to suggest new products",
            "Unlimited access to all 3D assets and environments"
        ]
    },
    {
        id: "studio",
        name: "Studio",
        description: "Ideal for a game studio",
        price: "$39.99",
        features: [
            "Technical support",
            "New assets continually",
            "Option to suggest new products",
            "Unlimited access to all 3D assets and environments"
        ]
    },
    {
        id: "enterprise",
        name: "Enterprise",
        description: "Choice for a great company",
        price: "$99.99",
        features: [
            "Technical support",
            "New assets continually",
            "Option to suggest new products",
            "Unlimited access to all 3D assets and environments"
        ]
    }
];

const CheckIcon = () => (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5L4.5 8.5L13 1" stroke="#FCA311" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const Pro = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="w-full h-full flex flex-col">

            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                <h2 className="text-[17px] font-normal text-white mb-4 md:mb-0">
                    Armory Pro
                </h2>

                <div className="flex items-center gap-4">
                    <span className={`text-[13px] font-normal ${!isYearly ? "text-white" : "text-gray-500"}`}>
                        Monthly
                    </span>

                    <button
                        onClick={() => setIsYearly(!isYearly)}
                        className="w-10 h-5 bg-[#FCA311] rounded-full relative transition-colors focus:outline-none"
                    >
                        <div className={`absolute top-0.5 w-4 h-4 bg-[#101014] rounded-full shadow-md transition-all duration-300 
                            ${isYearly ? "right-0.5" : "left-0.5"}`}
                        />
                    </button>

                    <span className={`text-[13px] font-normal ${isYearly ? "text-white" : "text-gray-500"}`}>
                        Yearly
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                {PLANS.map((plan) => (
                    <div
                        key={plan.id}
                        className="bg-[#0B0C0E] rounded-xl p-6 flex flex-col border border-transparent hover:border-white/10 transition-colors"
                    >
                        <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
                        <p className="text-gray-500 text-[13px] font-normal min-h-[40px] mb-4">
                            {plan.description}
                        </p>

                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="font-['Overpass_Mono'] text-[#FCA311] text-2xl font-bold tracking-wide">
                                {plan.price}
                            </span>
                            <span className="font-['Overpass_Mono'] text-gray-500 text-xs font-normal">
                                /per mth
                            </span>
                        </div>

                        <ul className="flex flex-col gap-4 mb-8 flex-1">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckIcon />
                                    </div>
                                    <span className="text-gray-300 text-[13px] font-normal leading-tight">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full bg-[#FCA311] hover:bg-[#e0900e] text-[#111111] text-xs font-bold py-3.5 rounded-full uppercase tracking-wider transition-transform active:scale-95 mb-4">
                            Start 7-Day Trial
                        </button>

                        <a href="#" className="text-[#FCA311] text-xs font-medium text-center  hover:underline decoration-[#FCA311]/50 underline-offset-4 hover:decoration-[#FCA311]">
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};