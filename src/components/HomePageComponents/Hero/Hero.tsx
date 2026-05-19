import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bullet } from "./Bullet/Bullet.tsx";

export interface HeroSlide {
    id: number;
    category: string;
    title: string;
    description: string;
    image: string;
}

const slides: HeroSlide[] = [
    {
        id: 1,
        category: "ENVIRONMENTS",
        title: "Pharaoh's Legacy: Egyptian Temple",
        description: "Step into a world where towering pyramids reach for the heavens.",
        image: "/img/bullet1.png"
    },
    {
        id: 2,
        category: "ENVIRONMENTS",
        title: "Atlantis: The Lost City",
        description: "Discover the submerged secrets of the ancient civilization.",
        image: "/img/bullet2.png"
    },
    {
        id: 3,
        category: "ENVIRONMENTS",
        title: "IronForge: Master the Myth",
        description: "The fires of the forge never die in this dwarven stronghold.",
        image: "/img/bullet3.png"
    },
    {
        id: 4,
        category: "ENVIRONMENTS",
        title: "Fantasy Gothic Pack",
        description: "Dark spires and gloomy atmosphere for your next RPG.",
        image: "/img/bullet4.png"
    }
];

export const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeSlide = slides[activeIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full flex flex-col lg:flex-row gap-4 mt-6 lg:h-[338px]">

            <div className="relative w-full h-[400px] sm:h-[450px] lg:h-full lg:flex-1 rounded-2xl overflow-hidden group cursor-pointer">

                <AnimatePresence mode="wait">
                    <motion.img
                        key={activeSlide.image}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        src={activeSlide.image}
                        alt={activeSlide.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent lg:via-black/40" />

                <div className="absolute bottom-0 left-0 p-6 pb-9 sm:p-8 lg:p-10 lg:bottom-[50%] lg:translate-y-[50%] w-full lg:max-w-[60%] z-10 flex flex-col items-start justify-end lg:justify-center h-full lg:h-auto">
                    <motion.div
                        key={activeSlide.title}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#FCA311] lg:text-white/80 uppercase mb-3 block">
                            {activeSlide.category}
                        </span>

                        <h1 className="text-2xl sm:text-3xl lg:text-[26px] font-bold text-white mb-3 leading-tight">
                            {activeSlide.title}
                        </h1>

                        <p className="text-sm sm:text-base lg:text-[13px] text-gray-300 lg:text-white/80 mb-6 lg:mb-8 max-w-md lg:max-w-lg leading-relaxed">
                            {activeSlide.description}
                        </p>
                    </motion.div>

                    <button className="bg-[#FCA311] hover:bg-[#e0910f] text-[11px] sm:text-xs text-black font-bold py-3 px-6 lg:py-[10px] lg:px-[16px] rounded-full transition-transform active:scale-95 uppercase tracking-wide">
                        Go to Collection
                    </button>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 lg:hidden">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === activeIndex ? "bg-[#FCA311] w-6" : "bg-white/50 hover:bg-white"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <div className="hidden lg:flex flex-col justify-center min-w-[450px]">
                <ul className="flex flex-col gap-3">
                    {slides.map((item, index) => (
                        <Bullet
                            key={item.id}
                            item={item}
                            isActive={index === activeIndex}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </ul>
            </div>

        </section>
    );
};