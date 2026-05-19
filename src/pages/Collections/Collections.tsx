import {SectionTitle} from "../../components/CumonComponents/SectionTitle/SectionTitle.tsx";
import {ListItemWithLike} from "../../components/CumonComponents/ListItemWithLike/ListItemWithLike.tsx";

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
    },
    {
        id: 4,
        img: '/img/Collection4.png',
        title: 'Nordic Medieval Tavern',
        category: 'Collection',
    },
    {
        id: 5,
        img: '/img/Collection5.png',
        title: 'Auge Mountaintop Observatory',
        category: 'Collection',
    },
    {
        id: 6,
        img: '/img/Collection6.png',
        title: 'Abandoned Subway Station in Berlin',
        category: 'Collection',
    },
    {
        id: 7,
        img: '/img/Collection7.png',
        title: 'Medieval Banquet',
        category: 'Collection',
    },
    {
        id: 8,
        img: '/img/Collection8.png',
        title: 'Medieval Banquet',
        category: 'Collection',
    },
    {
        id: 9,
        img: '/img/Collection9.png',
        title: 'Medieval Banquet',
        category: 'Collection',
    }
];

export const Collections = ()=>{
    return (
        <>
            <section className={'w-full'}>
                <SectionTitle>
                    Collections
                </SectionTitle>
                <p className='max-w-[900px] opacity-80  text-[13px] mt-[8px] mb-[44px] leading-[22px]'>
                    Explore our thoughtfully assembled asset collections, each a harmony of assets for cohesive, immersive experiences. Every collection is a symphony of visuals, sounds, and textures, curated to empower storytellers and captivate audiences.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {assets.map((asset) => (
                        <ListItemWithLike key={asset.id} asset={asset}/>
                    ))}
                </ul>
            </section>
        </>
    )
}