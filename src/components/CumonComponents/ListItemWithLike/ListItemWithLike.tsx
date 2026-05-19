import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeartIcon = ({ filled }: { filled: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill={filled ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${filled ? 'text-[#FCA311]' : 'text-white'} transition-colors duration-300`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);

export const ListItemWithLike = ({ asset }: { asset: any }) => {
    const [isLiked, setIsLiked] = useState(false);
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/collection-product');
        window.scrollTo(0, 0);
    };

    return (
        <li
            key={asset.id}
            onClick={handleCardClick}
            className="group cursor-pointer block h-full"
        >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/5 transition-colors">

                <img
                    src={asset.img}
                    alt={asset.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <div className="flex justify-between items-end w-full">

                        <div className="flex flex-col gap-1.5">
                            <h4 className="text-white text-[14px] font-bold leading-tight group-hover:text-[#FCA311] transition-colors duration-300">
                                {asset.title}
                            </h4>
                            <span className="text-gray-300 text-[13px] font-medium opacity-80">
                                {asset.category}
                            </span>
                        </div>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsLiked(!isLiked);
                            }}
                            className="hover:scale-110 transition-transform duration-300 p-1"
                        >
                            <HeartIcon filled={isLiked} />
                        </button>

                    </div>
                </div>
            </div>
        </li>
    );
};