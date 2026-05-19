import {SectionTitle} from "../../CumonComponents/SectionTitle/SectionTitle.tsx";
import {ListItem} from "../../CumonComponents/BundleListItem/ListItem.tsx";
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
    }
];

export const NewBundles= ()=>{
    return (
        <section className={'mt-[48px] w-full'}>
            <SectionTitle className="mb-[24px]" link>
                New Bundles
            </SectionTitle>
            <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {assets.map((asset) => (
                    <ListItem key={asset.id} asset={asset}/>
                ))}
            </AnimatedList>
        </section>
    )
}