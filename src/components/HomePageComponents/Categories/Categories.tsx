import {SectionTitle} from "../../CumonComponents/SectionTitle/SectionTitle.tsx";
import {Link} from "react-router-dom";

interface Category {
    id: number;
    name: string;
    path: string;
    icon: string;
}

const categories: Category[] = [
    { id: 1, name: "Environments", path: "/environments", icon: "environments.svg" },
    { id: 12, name: "3D Assets", path: "/assets", icon: "3d.svg" },
    { id: 13, name: "Materials", path: "/materials", icon: "materials.svg" },
    { id: 14, name: "VFX", path: "/vfx", icon: "vfx.svg" },
    { id: 15, name: "Tools", path: "/tools", icon: "tools.svg" },
    { id: 16, name: "Sounds", path: "/sounds", icon: "sounds.svg" }
];

export const Categories = () => {
    return (
        <section className="w-full mt-8">
            <SectionTitle className=" mb-[12px]">
                Categories
            </SectionTitle>

            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 w-full">
                {categories.map((cat) => (
                    <li key={cat.id}>
                        <Link
                            to={cat.path}
                            className="group flex flex-col items-center justify-center pt-[15px] pb-[10px]
                         bg-[#111111] border border-white/25 rounded-xl
                         hover:border-[#FCA311] gap-[4px]
                         transition-all duration-300 cursor-pointer relative overflow-hidden"
                        >
                                <img
                                    src={`/icons/${cat.icon}`}
                                    alt={cat.name}
                                    className="object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                                />
                            <p className=" opacity-50 relative text-base group-hover:opacity-100 transition-colors tracking-wider">
                                {cat.name}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};