import { SectionTitle } from "../../components/CumonComponents/SectionTitle/SectionTitle.tsx";
import { SubTitle } from "../../components/CumonComponents/SubTitle/SubTitle.tsx";

interface TimelineItem {
    id: number;
    year: string;
    imageUrl: string;
    title: string;
    description: string;
}

const TIMELINE_DATA: TimelineItem[] = [
    {
        id: 1,
        year: "2024",
        imageUrl: "/img/time1.png",
        title: "Title 01",
        description: "Step into the captivating world of game title—an epic adventure where every choice shapes your journey. The game blends stunning visuals, an engaging storyline, and dynamic combat mechanics. Explore open worlds, solve intricate puzzles, and create a character that's truly your own."
    },
    {
        id: 2,
        year: "2023",
        imageUrl: "/img/time2.png",
        title: "Title 02",
        description: "Step into the captivating world of game title—an epic adventure where every choice shapes your journey. The game blends stunning visuals, an engaging storyline, and dynamic combat mechanics. Explore open worlds, solve intricate puzzles, and create a character that's truly your own."
    },
    {
        id: 3,
        year: "2022",
        imageUrl: "/img/time3.png",
        title: "Title 03",
        description: "Step into the captivating world of game title—an epic adventure where every choice shapes your journey. The game blends stunning visuals, an engaging storyline, and dynamic combat mechanics. Explore open worlds, solve intricate puzzles, and create a character that's truly your own."
    },
    {
        id: 4,
        year: "2021",
        imageUrl: "/img/time4.png",
        title: "Title 04",
        description: "Step into the captivating world of game title—an epic adventure where every choice shapes your journey. The game blends stunning visuals, an engaging storyline, and dynamic combat mechanics. Explore open worlds, solve intricate puzzles, and create a character that's truly your own."
    }
];

export const Timeline = () => {
    const LEFT_COL_WIDTH_VAL = 458;
    const GAP_WIDTH_VAL = 40;

    const LINE_LEFT_OFFSET = `${LEFT_COL_WIDTH_VAL + GAP_WIDTH_VAL}px`;

    return (
        <div className="w-full text-white">

            <div className="mb-12">
                <SectionTitle className="mb-2">Upcoming Projects</SectionTitle>
                <SubTitle>This page will be used to post news about the upcoming project</SubTitle>
            </div>

            <div className="relative">

                <div
                    className="absolute inset-y-0 w-[1px] bg-white/10 hidden lg:block"
                    style={{ left: LINE_LEFT_OFFSET }}
                />

                <div className="flex flex-col gap-12 relative z-10">
                    {TIMELINE_DATA.map((item) => (
                        <div key={item.id} className="flex flex-col lg:flex-row items-start relative group">

                            <div
                                className="flex items-center justify-between gap-2 lg:justify-end lg:gap-8 mb-6 lg:mb-0 w-full max-w-[458px] flex-shrink-0"
                            >
                                <span className="text-2xl font-bold text-white hidden lg:block">
                                    {item.year}
                                </span>

                                <span className="text-2xl font-bold text-white lg:hidden mb-2">
                                    {item.year}
                                </span>

                                <div className="w-full max-w-[338px] h-[135px] rounded-xl overflow-hidden border border-white/10 bg-[#111] ">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            <div
                                className="absolute h-[1px] bg-white/10 hidden lg:block"
                                style={{
                                    left: `${LEFT_COL_WIDTH_VAL}px`,
                                    width: `${GAP_WIDTH_VAL}px`,
                                    top: '67.5px'
                                }}
                            />

                            <div
                                className="absolute w-[6px] h-[6px] bg-[#fff] rounded-full ring-2 ring-[#FEA227] hidden lg:block z-20"
                                style={{
                                    left: LINE_LEFT_OFFSET,
                                    top: '67.5px',
                                    transform: 'translate(-50%, -50%)'
                                }}
                            />

                            <div className="flex-1 lg:pl-[80px]">
                                <div className="flex flex-col justify-center h-full min-h-[135px]">
                                    <h3 className="text-base font-bold text-white mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="opacity-60 text-[13px] font-normal leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};