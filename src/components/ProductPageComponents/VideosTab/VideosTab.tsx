import React from "react";

interface VideoItem {
    id: number;
    title: string;
    description: string;
    fileSize: string;
    date: string;
    thumbnail: string;
}

const videos: VideoItem[] = [
    {
        id: 1,
        title: "Pharaoh's Legacy: Egyptian Temple Megapack",
        description: "Pharaoh's Legacy: Egyptian Temple Megapack is an engaging blend of adventure and puzzle-solving set against the backdrop of ancient Egypt.",
        fileSize: "1.19 GB",
        date: "Feb 3, 2022",
        thumbnail: "video"
    },
    {
        id: 2,
        title: "Pharaoh's Legacy: Egyptian Temple Megapack - Walkthrough",
        description: "Pharaoh's Legacy: Egyptian Temple Megapack is an engaging blend of adventure and puzzle-solving set against the backdrop of ancient Egypt.",
        fileSize: "1.19 GB",
        date: "Feb 3, 2022",
        thumbnail: "video"
    }
];


export const VideosTab: React.FC = () => {
    return (
        <div className="lg:col-span-8 flex flex-col gap-8 ">
            <div className="flex flex-col gap-8">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        className="flex flex-col md:flex-row gap-6 pb-8 border-b border-white/10 last:border-none"
                    >
                        <div
                            className="relative flex-shrink-0 w-full md:w-[280px] aspect-video rounded-xl overflow-hidden group cursor-pointer bg-[#1a1a1a]">
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                    className="w-[40px] h-[40px] rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <img src="/icons/play.svg" alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-3">
                            <h3 className="text-base font-semibold cursor-pointer">
                                {video.title}
                            </h3>

                            <p className="opacity-80 text-[13px] font-light leading-[22px]">
                                {video.description}
                            </p>

                            <div className="flex items-center gap-6 mt-1">
                                <div className="flex items-center gap-2 text-[13px] font-light">
                                    <img src="/icons/size.svg" alt=""/>
                                    <span>{video.fileSize}</span>
                                </div>
                                <div className="flex items-center gap-2 text-[13px] font-light">
                                    <img src="/icons/calendar.svg" alt=""/>
                                    <span>{video.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center ">
                <button
                    className={'flex gap-[14px] justify-center items-center py-[14px] px-[55px] rounded-[360px] border border-white/25 bg-[#28282B] box-border opacity-80 hover:opacity-100 text-[13px] font-semibold uppercase '}>
                    More Videos
                </button>
            </div>
        </div>
    );
};