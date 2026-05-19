import  { useState } from "react";
import { SectionTitle } from "../../components/CumonComponents/SectionTitle/SectionTitle.tsx";
import { SubTitle } from "../../components/CumonComponents/SubTitle/SubTitle.tsx";
import {ListItem} from "../../components/PlayableDemosPageComponents/ListItem/ListItem.tsx";
import {DemoModal} from "../../components/PlayableDemosPageComponents/DemoModal/DemoModal.tsx";

interface CollectionItem {
    id: number;
    title: string;
    img: string;
}

const products: CollectionItem[] = [
    {
        id: 1,
        img: '/img/Environments1.png',
        title: 'Some text here will be for the title of playable demo',
    },
    {
        id: 2,
        img: '/img/Environments2.png',
        title: 'Some text here will be for the title of playable demo',
    },
    {
        id: 3,
        img: '/img/Environments3.png',
        title: 'Some text here will be for the title of playable demo',
    },
    {
        id: 4,
        img: '/img/Environments4.png',
        title: 'Some text here will be for the title of playable demo',
    },
    {
        id: 5,
        img: '/img/Environments1.png',
        title: 'Some text here will be for the title of playable demo',
    },
    {
        id: 6,
        img: '/img/Environments2.png',
        title: 'Some text here will be for the title of playable demo',
    },
    {
        id: 7,
        img: '/img/Environments3.png',
        title: 'Some text here will be for the title of playable demo',
    },
    {
        id: 8,
        img: '/img/Environments4.png',
        title: 'Some text here will be for the title of playable demo',
    },
    {
        id: 9,
        img: '/img/Environments1.png',
        title: 'Some text here will be for the title of playable demo',
    },
    {
        id: 10,
        img: '/img/Environments2.png',
        title: 'Some text here will be for the title of playable demo',
    }
];


export const PlayableDemos = () => {
    const [selectedDemo, setSelectedDemo] = useState<CollectionItem | null>(null);

    return (
        <div className="w-full text-white">
            <div className="mb-8">
                <SectionTitle className="mb-2">
                    Playable Demos
                </SectionTitle>
                <SubTitle>
                    Experience the thrill of our interactive demos, where you can dive into a world of creativity and innovation. Perfect for game developers and filmmakers alike, these playable demos allow you to explore our extensive library of stunning 3D environments. Test out features, experiment with assets.
                </SubTitle>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
                {products.map((item) => (
                    <ListItem
                        key={item.id}
                        asset={item}
                        onDownloadClick={(asset) => setSelectedDemo(asset)}
                    />
                ))}
            </ul>

            <DemoModal
                isOpen={!!selectedDemo}
                onClose={() => setSelectedDemo(null)}
                data={selectedDemo}
            />
        </div>
    );
};