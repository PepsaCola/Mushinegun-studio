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
        img: '/img/Environments1.png',
        title: 'Fafnir\'s Keep',
        category: 'Environment',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 2,
        img: '/img/Environments2.png',
        title: 'Decay: Oil Drums District',
        category: 'Environment',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 3,
        img: '/img/Environments3.png',
        title: 'Decay: Oil Drums District',
        category: 'Environment',
        prize: '$260.00',
        newPrize: '$199.99'
    },
    {
        id: 4,
        img: '/img/Environments4.png',
        title: 'Feudal Japan: Full Set',
        category: 'Environment',
        prize: '$260.00',
        newPrize: '$199.99'
    }
];

export const NewEnvironments = () => {
    return (
        <section className="mt-[48px] w-full">
            <SectionTitle className="mb-[24px]" link>
                New Environments
            </SectionTitle>

            <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {assets.map((asset) => (
                    <ListItem key={asset.id} asset={asset}/>
                ))}
            </AnimatedList>
        </section>
    );
};