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
        img: '/img/asset1.png',
        title: 'Elven Oak Village',
        category: 'Environment',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 2,
        img: '/img/asset2.png',
        title: 'Apocalyptic Hospital',
        category: 'Environment',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 3,
        img: '/img/asset3.png',
        title: 'Decay: Oil Drums District',
        category: 'Environment',
        prize: '$260.00',
        newPrize: '$199.99'
    }
];

export const Featured = () => {
    return (
        <section className="mt-[48px] w-full">
            <SectionTitle className="mb-[24px]" link>
                Featured Assets
            </SectionTitle>

            <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {assets.map((asset) => (
                    <ListItem key={asset.id} asset={asset}/>
                ))}
            </AnimatedList>
        </section>
    );
};