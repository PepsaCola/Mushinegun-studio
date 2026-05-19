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
        id: "individual",
        name: "Individual",
        description: "Ideal for solo creators and freelancers.",
        price: "$14.99",
        features: [
            "Unlimited Free Access to Premium Props",
            "Unlimited Free Access to multiple Environments",
            "Collect Ammo on each purchase",
            "300 Ammo are added to your account every month",
            "Take advantage of Ammo-only deals, discounts, bundles",
            "20% Discount on Ammo box sets"
        ]
    },
    {
        id: "indie",
        name: "Indie Team",
        description: "Designed for small to mid-sized teams needing more resources.",
        price: "$39.99",
        features: [
            "Unlimited Free Access to Premium Props",
            "Unlimited Free Access to multiple Environments",
            "Collect Ammo on each purchase",
            "300 Ammo are added to your account every month",
            "Take advantage of Ammo-only deals, discounts, bundles",
            "20% Discount on Ammo box sets"
        ]
    },
    {
        id: "studio",
        name: "Studio",
        description: "Built for larger teams and professional studios requiring full access and flexibility.",
        price: "$99.99",
        features: [
            "Unlimited Free Access to Premium Props",
            "Unlimited Free Access to multiple Environments",
            "Collect Ammo on each purchase",
            "300 Ammo are added to your account every month",
            "Take advantage of Ammo-only deals, discounts, bundles",
            "20% Discount on Ammo box sets"
        ]
    }
];

const CheckIcon = () => (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5L4.5 8.5L13 1" stroke="#FCA311" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const JoinNow = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="w-full py-16 px-4 md:px-8 flex flex-col items-center">

            <h2 className="text-white text-[26px] font-bold mb-5">Join now</h2>

            <div className="flex items-center gap-4 mb-12">
                <span className={`text-base font-normal ${!isYearly ? "text-white" : "text-gray-500"}`}>Monthly</span>

                <button
                    onClick={() => setIsYearly(!isYearly)}
                    className="w-12 h-6 bg-[#FCA311] rounded-full relative transition-colors focus:outline-none"
                >
                    <div className={`absolute top-1 w-4 h-4 bg-[#101014] rounded-full shadow-md transition-all duration-300 
                        ${isYearly ? "right-1" : "left-1"}`}
                    />
                </button>

                <span className={`text-base font-normal ${isYearly ? "text-white" : "text-gray-500"}`}>Yearly</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-[1200px]">
                {PLANS.map((plan) => (
                    <div
                        key={plan.id}
                        className="bg-[#16161A] rounded-2xl p-6 flex flex-col border border-transparent hover:border-white/10 transition-colors"
                    >
                        <h3 className="text-xl font-medium text-white mb-4">{plan.name}</h3>
                        <p className="opacity-60 text-[13px] font-normal min-h-[40px]">
                            {plan.description}
                        </p>

                        <div className="flex items-baseline gap-1 py-[26px] border-b border-white/10">
                            <span className="font-['Overpass_Mono'] text-[#FCA311] text-2xl font-bold tracking-wide">
                                {plan.price}
                            </span>
                            <span className="font-['Overpass_Mono'] opacity-60 text-xs font-normal">
                                /per mth
                            </span>
                        </div>

                        <ul className="flex flex-col gap-[21px] mt-[26px] mb-10 flex-1">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className=" flex-shrink-0">
                                        <CheckIcon />
                                    </div>
                                    <span className=" text-[13px] font-normal leading-[22px]">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <button className="transition-transform active:scale-95 w-full bg-[#FCA311] hover:bg-[#e0900e] text-[#111111] text-base font-semibold py-3.5 rounded-full uppercase tracking-wider transition-colors mb-4">
                            Start 7-Day Trial
                        </button>

                        <a href="#" className="text-[#FCA311] text-xs font-medium text-center underline decoration-[#FCA311]/50 underline-offset-4">
                            Learn More
                        </a>
                    </div>
                ))}
            </div>

            <div className="mt-16 flex flex-col items-center gap-4">
                <h3 className="text-white text-[22px] font-bold  leading-8">
                    If you are an enterprise
                </h3>
                <button className="transition-transform active:scale-95 bg-[#FCA311] hover:bg-[#e0900e] text-[#111111] text-xs font-semibold py-3 px-8 rounded-full uppercase tracking-wider transition-colors">
                    Contact Us
                </button>
            </div>

        </section>
    );
};