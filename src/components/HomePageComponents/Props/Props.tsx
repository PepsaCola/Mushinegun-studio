import { SectionTitle } from "../../CumonComponents/SectionTitle/SectionTitle.tsx";
import { ListItem } from "../../CumonComponents/ListItem/ListItem.tsx";
import {AnimatedList} from "../../AnimatedList/AnimatedList.tsx";

interface Asset {
    id: number;
    img: string;
    title: string;
    category: string;
    prize: string;
    newPrize: string;
}

const assets: Asset[] = [
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

export const Props = () => {
    return (
        <section className="mt-[48px] w-full">
            <div className="flex items-center gap-2 mb-[24px]">
                <SectionTitle link>
                    Props
                </SectionTitle>
            </div>

            <AnimatedList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {assets.map((asset) => (
                    <ListItem
                        key={asset.id}
                        asset={asset}
                        aspect="square"
                        imageFit="contain"
                    />
                ))}
            </AnimatedList>

            <div className="w-full flex justify-center mt-10">
                <button className="bg-[#FCA311] hover:bg-[#e0900e] text-black text-xs font-semibold uppercase py-3 px-3 rounded-lg transition-colors cursor-pointer transition-transform active:scale-95">
                    Load More
                </button>
            </div>
        </section>
    );
};