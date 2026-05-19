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
        img: '/img/Materials1.png',
        title: 'Asset Name',
        category: 'Materials',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 2,
        img: '/img/Materials2.png',
        title: 'Asset Name',
        category: 'Materials',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 3,
        img: '/img/Materials3.png',
        title: 'Asset Name',
        category: 'Materials',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 4,
        img: '/img/Materials4.png',
        title: 'Asset Name',
        category: 'Materials',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 5,
        img: '/img/Materials5.png',
        title: 'Asset Name',
        category: 'Materials',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 6,
        img: '/img/Materials6.png',
        title: 'Asset Name',
        category: 'Materials',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 7,
        img: '/img/Materials7.png',
        title: 'Asset Name',
        category: 'Materials',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 8,
        img: '/img/Materials8.png',
        title: 'Asset Name',
        category: 'Materials',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 9,
        img: '/img/Materials9.png',
        title: 'Asset Name',
        category: 'Materials',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 10,
        img: '/img/Materials10.png',
        title: 'Asset Name',
        category: 'Materials',
        prize: '$260.00',
        newPrize: '$199.99'
    }
];

const filters = ["Prices", "Genres", "Sizes", "Types"];

export const Materials = () => {
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
                    Materials                </SectionTitle>
                <SubTitle>
                    Explore and download a universe of high-resolution textures and materials meticulously designed to transform digital landscapes. Our materials infuse realism, aesthetic brilliance, and intricate details into your games, empowering creators to craft visually stunning and immersive worlds.                </SubTitle>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8">
                {products.map((item) => (
                    <ListItem key={item.id} aspect={'square'} asset={item} imageFit='contain'/>
                ))}
            </ul>
        </div>
    );
};