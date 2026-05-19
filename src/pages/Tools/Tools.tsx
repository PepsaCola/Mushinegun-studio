import {SectionTitle} from "../../components/CumonComponents/SectionTitle/SectionTitle.tsx";
import {SubTitle} from "../../components/CumonComponents/SubTitle/SubTitle.tsx";
import {ListItem} from "../../components/ToolsPageComponents/ListItem/ListItem.tsx";

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
        img: '/icons/tools.svg',
        title: 'Asset Name',
        category: 'Tools',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 2,
        img: '/icons/tools.svg',
        title: 'Asset Name',
        category: 'Tools',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 3,
        img: '/icons/tools.svg',
        title: 'Asset Name',
        category: 'Tools',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 4,
        img: '/icons/tools.svg',
        title: 'Asset Name',
        category: 'Tools',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 5,
        img: '/icons/tools.svg',
        title: 'Asset Name',
        category: 'Tools',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 6,
        img: '/icons/tools.svg',
        title: 'Asset Name',
        category: 'Tools',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 7,
        img: '/icons/tools.svg',
        title: 'Asset Name',
        category: 'Tools',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 8,
        img: '/icons/tools.svg',
        title: 'Asset Name',
        category: 'Tools',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 9,
        img: '/icons/tools.svg',
        title: 'Asset Name',
        category: 'Tools',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 10,
        img: '/icons/tools.svg',
        title: 'Asset Name',
        category: 'Tools',
        prize: '$260.00',
        newPrize: '$199.99'
    }
];

export const Tools =()=>{
    return (
        <div className="w-full text-white">
            <div className="mb-8">
                <SectionTitle className="mb-2">
                    Tools
                </SectionTitle>
                <SubTitle>
                    Enhance your game design with advanced tools and code plugins for Unreal Engine, streamlining your creative process with precision-engineered solutions that boost efficiency and innovation.
                </SubTitle>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
                {products.map((item) => (
                    <ListItem key={item.id} asset={item} />
                ))}
            </ul>
        </div>
    )
}