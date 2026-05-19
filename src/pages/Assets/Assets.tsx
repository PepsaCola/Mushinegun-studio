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
        img: '/img/prop1.png',
        title: 'Asset Name',
        category: '3D Assets',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 2,
        img: '/img/prop2.png',
        title: 'Asset Name',
        category: '3D Assets',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 3,
        img: '/img/prop3.png',
        title: 'Asset Name',
        category: '3D Assets',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 4,
        img: '/img/prop4.png',
        title: 'Asset Name',
        category: '3D Assets',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 5,
        img: '/img/prop5.png',
        title: 'Asset Name',
        category: '3D Assets',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 6,
        img: '/img/prop6.png',
        title: 'Asset Name',
        category: '3D Assets',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 7,
        img: '/img/prop7.png',
        title: 'Asset Name',
        category: '3D Assets',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 8,
        img: '/img/prop8.png',
        title: 'Asset Name',
        category: '3D Assets',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 9,
        img: '/img/prop9.png',
        title: 'Asset Name',
        category: '3D Assets',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 10,
        img: '/img/prop10.png',
        title: 'Asset Name',
        category: '3D Assets',
        prize: '$260.00',
        newPrize: '$199.99'
    }
];

const filters = ["Prices", "Genres", "Coverage", "Sizes", "Types"];

export const Assets = () => {
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
                    3D Assets
                </SectionTitle>
                <SubTitle>
                    Here you can discover and download top-quality 3D Models & Assets. Our extensive collection of game-ready 3D assets for Unity and Unreal Engine is designed to enhance your game visuals.
                </SubTitle>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8">
                {products.map((item) => (
                    <ListItem key={item.id} aspect={'square'} asset={item} imageFit='contain'/>
                ))}
            </ul>
        </div>
    );
};