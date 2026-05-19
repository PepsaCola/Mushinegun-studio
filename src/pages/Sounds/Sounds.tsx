import { SectionTitle } from "../../components/CumonComponents/SectionTitle/SectionTitle.tsx";
import { SubTitle } from "../../components/CumonComponents/SubTitle/SubTitle.tsx";
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
        img: '/img/VFX1.png',
        title: 'Asset Name',
        category: 'Sounds',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 2,
        img: '/img/VFX2.png',
        title: 'Asset Name',
        category: 'Sounds',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 3,
        img: '/img/VFX3.png',
        title: 'Asset Name',
        category: 'Sounds',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 4,
        img: '/img/VFX4.png',
        title: 'Asset Name',
        category: 'Sounds',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 5,
        img: '/img/VFX5.png',
        title: 'Asset Name',
        category: 'Sounds',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 6,
        img: '/img/VFX6.png',
        title: 'Asset Name',
        category: 'Sounds',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 7,
        img: '/img/VFX7.png',
        title: 'Asset Name',
        category: 'Sounds',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 8,
        img: '/img/VFX8.png',
        title: 'Asset Name',
        category: 'Sounds',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 9,
        img: '/img/VFX9.png',
        title: 'Asset Name',
        category: 'Sounds',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 10,
        img: '/img/VFX10.png',
        title: 'Asset Name',
        category: 'Sounds',
        prize: '$260.00',
        newPrize: '$199.99'
    }
];


export const Sounds = () => {

    return (
        <div className="w-full text-white">
            <div className="mb-8">
                <SectionTitle className="mb-2">
                    Sounds
                </SectionTitle>
                <SubTitle>
                    Discover and download amazing sound effects for your Unity and Unreal Engine projects. Our sound collection merges creativity and technology to provide immersive audio that enhances every scene and character.
                </SubTitle>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
                {products.map((item) => (
                    <ListItem key={item.id}  asset={item} />
                ))}
            </ul>
        </div>
    );
};