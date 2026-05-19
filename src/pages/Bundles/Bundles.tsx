import {SectionTitle} from "../../components/CumonComponents/SectionTitle/SectionTitle.tsx";
import {ListItem} from "../../components/CumonComponents/BundleListItem/ListItem.tsx";
import {SubTitle} from "../../components/CumonComponents/SubTitle/SubTitle.tsx";

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
        img: '/img/Bundles1.png',
        title: 'Castle Ruins',
        category: 'Bundle',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 2,
        img: '/img/Bundles2.png',
        title: 'Modular Saloon Interior',
        category: 'Bundle',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 3,
        img: '/img/Bundles3.png',
        title: 'Abattoir',
        category: 'Bundle',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 4,
        img: '/img/Bundles4.png',
        title: 'Horror Mansion',
        category: 'Bundle',
        prize: '$260.00',
        newPrize: '$199.99'
    }
];

export const Bundles =()=>{
    return (
        <>
            <SectionTitle className={'mb-[8px]'}>
                Bundles
            </SectionTitle>
            <SubTitle >
                Explore our curated bundles of diverse 3D environments, crafted to inspire and enhance game development. Ideal for creators seeking cohesive, stunning settings, these collections offer unique, game-ready landscapes to bring your virtual worlds to life.
            </SubTitle>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[44px]">
                {assets.map((asset) => (
                    <ListItem key={asset.id} asset={asset}/>
                ))}
            </ul>
        </>
    )
}