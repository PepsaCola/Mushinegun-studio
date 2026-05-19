import {type FC, useState,} from "react";
import { Link, Outlet } from "react-router-dom";
import { LeftPart } from "../../components/ProductPageComponents/LeftPart/LeftPart.tsx";
import { RightPart } from "../../components/ProductPageComponents/RightPart/RightPart.tsx";

interface SpecItem {
    label: string;
    value: string;
}

export interface ProductData {
    title: string;
    description: string;
    images: string[];
    price: string;
    oldPrice: string;
    specs: SpecItem[];
}

export const Product: FC = () => {
    const product: ProductData = {
        title: "Collection Product",
        description: "One of the main focuses of the pack is modularity and customizability to give users a wide range of choices. All the modular assets in this pack are snappable to the grid for easy assembly. The master materials used inside the pack give the user easy access to modify parameters globally.\n" +
            "\n" +
            "Optimization was one of our main goals in developing this pack. All textures, models, shaders, and tools are optimized and tested in real-time build to make sure they look good while they perform well. ",

        images: [
            "/img/Product1.png",
            "/img/Product2.png",
            "/img/Product3.png",
            "/img/Product4.png",
            "/img/Product5.png"
        ],

        price: "$20.70",
        oldPrice: "$69.70",
        specs: [
            { label: "Number of Meshes", value: "208 Unique Meshes" },
            { label: "Number of Materials", value: "87" },
            { label: "Number of Textures", value: "198" },
            { label: "Supported Versions", value: "5.0, 5.1, 5.2, 5.3, 5.4" },
        ]
    };

    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [activeImg, setActiveImg] = useState<string>(product.images[0]);
    const [currency, setCurrency] = useState<string>("USD");
    const [license, setLicense] = useState<string>("Personal License");

    return (
        <div className="w-full min-h-screen text-white font-sans px-4 md:px-8 pb-10">

            <div className="text-sm mb-6 flex gap-2 items-center">
                <Link to="/collections" className="text-[13px] hover:text-[#FCA311] transition-colors">Collections</Link>
                <span className={'flex items-center justify-center'}>
                    <img width={14} height={14} src="/icons/CaretRight.svg" alt="CaretRight"/>
                </span>
                <span className="text-[13px] opacity-70">Collection Product</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                <LeftPart
                    activeImg={activeImg}
                    product={product}
                    setActiveImg={setActiveImg}
                />

                <RightPart
                    product={product}
                    isExpanded={isExpanded}
                    setIsExpanded={setIsExpanded}
                    setCurrency={setCurrency}
                    setLicense={setLicense}
                />


            </div>
            <Outlet/>
        </div>
    );
};