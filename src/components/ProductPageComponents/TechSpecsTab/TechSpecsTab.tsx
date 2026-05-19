import React from "react";
import {SectionTitle} from "../../CumonComponents/SectionTitle/SectionTitle.tsx";

const features = [
    "Showcase map: Lush, beautifully laid out and ready to use village map",
    "Unique Meshes: 407 meticulously designed meshes bring the elven village to life, providing a rich and varied environment.",
    "Blueprints: 49 blueprints included, enabling easy integration and customization within your project.",
    "Materials: 18 unique materials and 264 material instances, allowing for extensive customization and variety.",
    "Textures: 493 high-quality textures with various resolutions including:",
    "Highlights:",
    "Scenic Bridges and Pathways: Explore the village with beautifully designed bridges and pathways.",
    "Charming Elven Architecture: Unique elven houses and structures add a mystical charm to the environment.",
    "Lush Foliage and Natural Elements: Vibrant greenery and natural elements create an immersive and serene atmosphere."
];

const specs = [
    "Number of Unique Meshes: 407",
    "Number of Blueprints: 49",
    "Collision: Yes",
    "LODs: Using Nanite, No LODs",
    "Number of Material: 18",
    "Number of Material Instances: 264",
    "Number of Textures: 493",
    "Texture Resolutions: 2048x2048 512x512 1024x1024 4096x4096 128x128 256x256 10x10 8535x8535 8534x8534 2134x2134 8534x8535 2134x2134 8534x8534 5024x5024 1000x1000 500x135 500x500 32x32",
    "Supported Development Platforms: Windows64, Windows32",
    "Windows: Yes"
];

export const TechSpecsTab: React.FC = () => {
    return (
        <div className="lg:col-span-8 flex flex-col gap-10  text-white font-sans">
            <section className="flex flex-col gap-4">
                <SectionTitle>Supported Engines</SectionTitle>
                <div className="flex flex-col gap-1 opacity-80 text-[13px] font-light">
                    <p>Unreal Engine 5.1, 5.2, 5.3, 5.4</p>
                    <p>Unity</p>
                </div>
            </section>
            <section className="flex flex-col gap-4">
                <SectionTitle>Technical Details</SectionTitle>
                <div className="flex flex-col gap-1 text-[13px] font-light leading-relaxed">
                    <div>
                        <p className="mb-2 opacity-80">Features:</p>
                        <ul className="list-disc list-inside marker:text-gray-500">
                            {features.map((item, index) => (
                                <li key={index} className="">
                                    <span className="leading-[22px] opacity-80">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-1">
                        {specs.map((spec, index) => (
                            <p className={'leading-[22px] opacity-80'} key={index}>{spec}</p>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
};