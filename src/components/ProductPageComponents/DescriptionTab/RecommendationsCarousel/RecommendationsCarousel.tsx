import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import { SectionTitle } from "../../../CumonComponents/SectionTitle/SectionTitle.tsx";

interface CardItem {
    id: number;
    title: string;
    subtitle: string;
    imageUrl: string;
}

const carts: CardItem[] = [
    { id: 1, title: 'The Carnival', subtitle: 'Collection', imageUrl: '/img/you-may-like1.png' },
    { id: 2, title: 'Elven Oak Village', subtitle: 'Collection', imageUrl: '/img/you-may-like2.png' },
    { id: 3, title: 'The Light Forest', subtitle: 'Collection', imageUrl: '/img/you-may-like1.png' },
    { id: 4, title: 'Neon City', subtitle: 'Collection', imageUrl: '/img/you-may-like2.png' },
    { id: 5, title: 'Mountain Pass', subtitle: 'Collection', imageUrl: '/img/you-may-like1.png' },
];

export const RecommendationsSwiper: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const updateSlideStatus = (swiper: SwiperType) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-4">
                <SectionTitle>
                    You may like
                </SectionTitle>

                <div className="flex gap-2">
                    <button
                        onClick={() => swiperInstance?.slidePrev()}
                        disabled={isBeginning}
                        className={`flex items-center justify-center w-[24px] h-[24px] rounded-full bg-[#16161A] transition-colors
                            ${isBeginning
                            ? 'opacity-20 cursor-not-allowed'
                            : 'hover:bg-[#363b46] active:scale-95 cursor-pointer'
                        }`}
                        aria-label="Previous slide"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <button
                        onClick={() => swiperInstance?.slideNext()}
                        disabled={isEnd}
                        className={`flex items-center justify-center w-[24px] h-[24px] rounded-full bg-[#16161A] transition-colors
                            ${isEnd
                            ? 'opacity-20 cursor-not-allowed'
                            : 'hover:bg-[#363b46] active:scale-95 cursor-pointer'
                        }`}
                        aria-label="Next slide"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => {
                    setSwiperInstance(swiper);
                    updateSlideStatus(swiper);
                }}
                onSlideChange={(swiper) => updateSlideStatus(swiper)}
                spaceBetween={16}
                slidesPerView="auto"
                className="w-full"
            >
                {carts.map((item) => (
                    <SwiperSlide key={item.id} className="!w-[300px]">
                        <div className="relative h-[180px] rounded-xl overflow-hidden group cursor-pointer">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />

                            <div className="absolute bottom-0 left-0 p-4 w-full">
                                <h3 className="text-sm font-medium text-white">
                                    {item.title}
                                </h3>
                                <p className="opacity-60 text-[13px] font-normal mt-[7px] text-white">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

