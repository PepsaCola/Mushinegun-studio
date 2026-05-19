// import  { useState } from "react";
import { SectionTitle } from "../../components/CumonComponents/SectionTitle/SectionTitle.tsx";
import { SubTitle } from "../../components/CumonComponents/SubTitle/SubTitle.tsx";
import { CustomSelect } from "../../components/CumonComponents/CustomSelect/CustomSelect.tsx";
import {ListItem} from "../../components/CumonComponents/ListItem/ListItem.tsx";

interface CollectionItem {
    id: number;
    title: string;
    category: string;
    newPrize: string;
    prize: string;
    img: string;
}

const products: CollectionItem[] = [
    {
        id: 1,
        title: "Fafnir's Keep",
        category: "Environment",
        newPrize: "$199.99",
        prize: "$260.00",
        img: "/img/Environments1.png",

    },
    {
        id: 2,
        title: "Elven Oak Village",
        category: "Environment",
        newPrize: "$199.99",
        prize: "$260.00",
        img: "/img/Environments2.png",

    },
    {
        id: 3,
        title: "Apocalyptic Hospital",
        category: "Environment",
        newPrize: "$199.99",
        prize: "$260.00",
        img: "/img/Environments3.png",
    },
    {
        id: 4,
        title: "Decay: Oil Drums District",
        category: "Environment",
        newPrize: "$199.99",
        prize: "$260.00",
        img: "/img/Environments4.png",
    },
    {
        id: 5,
        title: "Brooke Industrial Town",
        category: "Environment",
        newPrize: "$199.99",
        prize: "$260.00",
        img: "/img/Environments1.png",
    },
    {
        id: 6,
        title: "Pharaoh's Legacy",
        category: "Environment",
        newPrize: "$199.99",
        prize: "$260.00",
        img: "/img/Environments2.png",
    },
    {
        id: 7,
        title: "Feudal Japan",
        category: "Environment",
        newPrize: "$199.99",
        prize: "$260.00",
        img: "/img/Environments3.png",
    },
    {
        id: 8,
        title: "Gothic Cathedral",
        category: "Environment",
        newPrize: "$199.99",
        prize: "$260.00",
        img: "/img/Environments4.png",
    }
];

const filters = ["Genres", "Pack Sizes", "Coverage", "Mesh Count", "Platform", "Publisher"];

export const Environments = () => {
    // const [activeFilter, setActiveFilter] = useState("");

    return (
        <div className="w-full text-white">

            <div className="flex flex-wrap gap-3 mb-8">
                {filters.map((filterName) => (
                    <div key={filterName} className="min-w-[100px]">
                        <CustomSelect
                            className="rounded-[360px] py-[9px]! px-[12px]! text-[13px]! font-normal!"
                            popUpClassName='px-[10px]! py-[7px]!'
                            options={[filterName, "Option 1", "Option 2"]}
                            defaultValue={filterName}
                            onChange={(val) => console.log(val)}
                        />
                    </div>
                ))}
            </div>

            <div className="mb-8">
                <SectionTitle className="mb-2">
                    Environments
                </SectionTitle>
                <SubTitle>
                    Bring your ideas to life instantly with our expansive library of premium 3D environments.
                    Designed for filmmakers, game developers, and anyone with a vision, these immersive environments
                    come packed with high-quality assets, ready to ignite your storytelling.
                </SubTitle>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                {products.map((item) => (
                    <ListItem key={item.id} asset={item}/>
                ))}
            </ul>
        </div>
    );
};