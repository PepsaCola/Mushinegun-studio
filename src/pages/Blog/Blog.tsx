import  { useState } from "react";
import { SectionTitle } from "../../components/CumonComponents/SectionTitle/SectionTitle.tsx";
import { SubTitle } from "../../components/CumonComponents/SubTitle/SubTitle.tsx";
import { CustomSelect } from "../../components/CumonComponents/CustomSelect/CustomSelect.tsx";

interface BlogPost {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const posts: BlogPost[] = [
    {
        id: 1,
        title: "How can I purchase the products?",
        description: "Learn how to purchase a product on Meshingun Studio step by step",
        imageUrl: "/img/blog1.png"
    },
    {
        id: 2,
        title: "How can I purchase the products?",
        description: "Learn how to purchase a product on Meshingun Studio step by step",
        imageUrl: "/img/blog2.png"
    },
    {
        id: 3,
        title: "How can I purchase the products?",
        description: "Learn how to purchase a product on Meshingun Studio step by step",
        imageUrl: "/img/blog3.png"
    },
    {
        id: 4,
        title: "How can I purchase the products?",
        description: "Learn how to purchase a product on Meshingun Studio step by step",
        imageUrl: "/img/blog4.png"
    }
];

export const Blog = () => {
    const [category, setCategory] = useState("Categories");

    return (
        <div className="w-full text-white">
            <div className="mb-6 max-w-[120px]">
                <CustomSelect
                    className=" rounded-[360px] py-[9px]! px-[12px]!  text-[13px]! font-normal!"
                    options={["Categories", "News", "Updates", "Tutorials"]}
                    defaultValue="Categories"
                    onChange={(val) => setCategory(val)}
                />
            </div>

            <div className="mb-8">
                <SectionTitle className="mb-2">
                    Blog
                </SectionTitle>
                <SubTitle>
                    This page will be used to post news about the upcoming project
                </SubTitle>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {posts.map((post) => (
                    <div key={post.id} className="flex flex-col group cursor-pointer">
                        <div className="rounded-xl overflow-hidden aspect-video mb-4 border border-white/10">
                            <img
                                src={post.imageUrl}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <h3 className="text-white  text-sm font-medium mb-2 leading-[22px] group-hover:text-[#FCA311] transition-colors">
                            {post.title}
                        </h3>
                        <p className="opacity-60 text-[13px] font-normal leading-5">
                            {post.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};