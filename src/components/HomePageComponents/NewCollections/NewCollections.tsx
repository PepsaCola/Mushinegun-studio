import {SectionTitle} from "../../CumonComponents/SectionTitle/SectionTitle.tsx";
import {ListItemWithLike} from "../../CumonComponents/ListItemWithLike/ListItemWithLike.tsx";
import {AnimatedList} from "../../AnimatedList/AnimatedList.tsx";

interface Asset {
    id: number;
    img: string;
    title: string;
    category: string;
}

const assets: Asset[] = [
    {
        id: 1,
        img: '/img/Collection1.png',
        title: 'Medieval Banquet',
        category: 'Collection',
    },
    {
        id: 2,
        img: '/img/Collection2.png',
        title: 'Premium Fabrics',
        category: 'Collection',
    },
    {
        id: 3,
        img: '/img/Collection3.png',
        title: 'Neoclassical Modular Building Vol. 4',
        category: 'Collection',
    }
];

export const NewCollections= ()=>{
    return (
        <section className={'mt-[48px] w-full'}>
            <SectionTitle className="mb-[24px]" link>
                New Collections
            </SectionTitle>
            <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {assets.map((asset) => (
                    <ListItemWithLike key={asset.id} asset={asset}/>
                ))}
            </AnimatedList>
        </section>
    )
}