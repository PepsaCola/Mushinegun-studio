import React from "react";

interface AmmoFeature {
    text: React.ReactNode;
    isActive: boolean;
}

interface AmmoPlan {
    id: string;
    imagePath: string;
    title: string;
    description: string;
    ammoAmount: string;
    bonusAmount?: string;
    price: string;
    features: AmmoFeature[];
    isReloadMode: boolean;
    buttonBonusText?: string;
}

const CheckIcon = () => (
    <svg width="12" height="12" viewBox="0 0 14 10" fill="none" className="flex-shrink-0 mt-[4px]">
        <path d="M1 5L4.5 8.5L13 1" stroke="#FCA311" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const AMMO_PLANS: AmmoPlan[] = [
    {
        id: "essential",
        imagePath: "/img/Essential Box 1.png",
        title: "Essential’s Box",
        description: "Perfect for small assets and prop packs to kickstart your creative projects.",
        ammoAmount: "499",
        price: "$49.99",
        isReloadMode: false,
        features: [
            { text: "Ability to Purchase Ammo-Only Deals", isActive: true },
            { text: "Get more Ammo while spending less", isActive: false },
            { text: "Bonus Ammo on Every Reload", isActive: false },
            { text: "1 Month of perks (Plus Perks) only (5% discount on all products, Premium access to products, sales and bundles)", isActive: false },
        ]
    },
    {
        id: "basic",
        imagePath: "/img/Basic Box 1.png",
        title: "Basic Box",
        description: "Great for mid-sized projects, offering a discount over individual purchases.",
        ammoAmount: "1499",
        bonusAmount: "+200",
        price: "$149.99",
        isReloadMode: true,
        buttonBonusText: "+200 BONUS",
        features: [
            { text: "Ability to Purchase Ammo-Only Deals", isActive: true },
            { text: "Get more Ammo while spending less", isActive: true },
            { text: "Bonus Ammo on Every Reload", isActive: false },
            { text: "1 Month of perks (Plus Perks) only (5% discount on all products, Premium access to products, sales and bundles)", isActive: false },
        ]
    },
    {
        id: "plus",
        imagePath: "/img/Plus Box 1.png",
        title: "Plus Box",
        description: "Positioned as the best choice for those looking to invest in larger projects or premium packs.",
        ammoAmount: "2999",
        bonusAmount: "+500",
        price: "$299.99",
        isReloadMode: true,
        buttonBonusText: "+500 BONUS",
        features: [
            { text: "Ability to Purchase Ammo-Only Deals", isActive: true },
            { text: "Get more Ammo while spending less", isActive: true },
            { text: "Bonus 100+ Ammo on Every Reload", isActive: true },
            { text: <span className="flex items-center flex-wrap">1 Month of <img className={'ml-[8px]'} src="/icons/ArmoryPro.svg" alt=""/></span>, isActive: true },
        ]
    },
    {
        id: "premium",
        imagePath: "/img/Premium Box 1.png",
        title: "Premium Box",
        description: "Unlock unparalleled flexibility, exclusive access, and the power to bring any ambitious vision to life.",
        ammoAmount: "4999",
        bonusAmount: "+800",
        price: "$499.99",
        isReloadMode: true,
        buttonBonusText: "+800 BONUS",
        features: [
            { text: "Ability to Purchase Ammo-Only Deals", isActive: true },
            { text: "Get more Ammo while spending less", isActive: true },
            { text: "Bonus 300+ Ammo on Every Reload", isActive: true },
            { text: <span className="flex items-center flex-wrap">1 Month of <img className={'ml-[8px]'} src="/icons/ArmoryPro.svg"
                                                                                  alt=""/></span>, isActive: true
            },
        ]
    }
];

export const Ammo = () => {
    return (
        <div className="w-full">

            <h2 className="text-[17px] font-normal text-white mb-8">
                Purchase Ammo
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 pb-8">
                {AMMO_PLANS.map((plan) => (
                    <div
                        key={plan.id}
                        className="bg-transparent border border-white/10 rounded-xl p-5 lg:p-6 flex flex-col transition-all duration-200 group h-full"
                    >
                        <div className="h-[50px] mb-6 flex items-end">
                            <img
                                src={plan.imagePath}
                                alt={plan.title}
                                className="h-full w-auto object-contain"
                            />
                        </div>

                        <h3 className="text-white text-[19px] font-medium mb-3">
                            {plan.title}
                        </h3>

                        <p className="text-[#888] text-[13px] leading-[1.6] mb-6 min-h-[85px]">
                            {plan.description}
                        </p>

                        <div className="flex items-center gap-2 mb-8">
                            <span className="text-white text-[22px] font-bold">
                                {plan.ammoAmount}
                            </span>
                            <img src='/icons/rifle-gun-bullet-icon.svg' alt='' className="w-[16px] h-[16px] "/>
                            {plan.bonusAmount && (
                                <span className="text-[#F29315] text-[15px] font-bold ">
                                    {plan.bonusAmount}
                                </span>
                            )}
                        </div>

                        <ul className="flex flex-col gap-3 mb-8 flex-1">
                            {plan.features.map((feat, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-[13px] leading-tight group/item">
                                    <div className={`transition-opacity duration-200 ${!feat.isActive ? 'opacity-0' : 'opacity-100'}`}>
                                        <CheckIcon />
                                    </div>
                                    <span className={`text-gray-300 ${!feat.isActive ? 'opacity-40 line-through decoration-gray-500' : ''}`}>
                                        {feat.text}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto">
                            <button className="w-full h-[32px] bg-[#F29315] hover:bg-[#d68213] text-black rounded-full overflow-hidden transition-transform active:scale-95 group/btn ">
                                {plan.isReloadMode ? (
                                    <div className="flex gap-[12px] items-center justify-center ">
                                        <div className=" flex flex-col justify-center items-center pl-2 relative">
                                            <span className="font-bold text-[#111111] text-[10px] leading-none mb-0.5 whitespace-nowrap">
                                                {plan.price}
                                            </span>
                                            {plan.buttonBonusText && (
                                                <div className="flex items-center gap-1 text-[8px] font-semibold leading-none whitespace-nowrap">
                                                    {plan.buttonBonusText}
                                                    <img src='/icons/rifle-gun-bullet-icon-black.svg' alt={''} className="w-2 h-2 mb-[2px]"/>
                                                </div>
                                            )}
                                        </div>

                                        <div className=" flex items-center justify-center  text-xs font-semibold sm:text-[13px] tracking-wider ">
                                            RELOAD
                                        </div>
                                    </div>
                                ) : (
                                    <div className=" flex items-center justify-center font-bold text-[14px]">
                                        {plan.price}
                                    </div>
                                )}
                            </button>

                            <div className="text-center mt-4">
                                <a href="#" className="text-[#F29315] text-[13px] font-normal hover:underline decoration-[#F29315]/50 underline-offset-4">
                                    Learn More
                                </a>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};