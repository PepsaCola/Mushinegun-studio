import type { HeroSlide } from "../Hero.tsx";

interface BulletProps {
    item: HeroSlide;
    isActive: boolean;
    onClick: () => void;
}

export const Bullet = ({ item, isActive, onClick }: BulletProps) => {
    const THEME_COLOR = "#1A1A1E";
    const OVERLAY_OPACITY = isActive ? 0 : 0.6;

    const uniqueId = `bullet-${item.id}`;
    const clipPathId = `clip-${uniqueId}`;
    const gradientId = `grad-${uniqueId}`;

    const imagePathData = "M0 5.53424V69.0133H5.05622L16.6847 74H207.001L235 64.2383V10.1956L207.001 0H16.6847L4.94364 5.53424H0Z";
    const tailPathData = "M449.942 36.0826C449.942 15.6519 305.803 10.9595 234.942 10.2031V64.2332C340.615 69.6816 449.942 51.0663 449.942 36.0826Z";

    return (
        <li
            onClick={onClick}
            className="relative w-[450px] h-[74px] cursor-pointer group transition-transform duration-300 active:scale-[0.99] select-none hidden lg:block"
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 450 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-lg"
            >
                <defs>
                    <clipPath id={clipPathId}>
                        <path d={imagePathData} />
                    </clipPath>

                    <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={THEME_COLOR} stopOpacity="0" />
                        <stop offset="60%" stopColor={THEME_COLOR} stopOpacity="0.8" />
                        <stop offset="100%" stopColor={THEME_COLOR} stopOpacity="1" />
                    </linearGradient>
                </defs>

                <g clipPath={`url(#${clipPathId})`}>
                    <rect width="235" height="74" fill={THEME_COLOR} />

                    <image
                        href={item.image}
                        width="235"
                        height="74"
                        preserveAspectRatio="xMidYMid slice"
                        className={`transition-all duration-500 ${isActive ? 'opacity-100 scale-105' : 'opacity-60 group-hover:opacity-100'}`}
                    />

                    <rect width="235" height="74" fill={`url(#${gradientId})`} />

                    <rect
                        width="235"
                        height="74"
                        fill="#1A1A1E"
                        fillOpacity={OVERLAY_OPACITY}
                        className="transition-all duration-300"
                    />
                </g>

                <g>
                    <path
                        d={tailPathData}
                        fill={THEME_COLOR}
                    />

                    <path
                        d={tailPathData}
                        fill="#1A1A1E"
                        fillOpacity={OVERLAY_OPACITY}
                        className="transition-all duration-300"
                    />
                </g>
            </svg>

            <div className="absolute inset-y-0 left-[140px] right-[20px] flex flex-col justify-center z-10 pointer-events-none">
                <span className={`text-[9px] font-bold tracking-[0.15em] uppercase mb-1 transition-colors duration-300
                    ${isActive ? 'text-[#FCA311]' : 'text-gray-500 group-hover:text-gray-400'}`}>
                    {item.category}
                </span>

                <h3 className={`font-bold text-[13px] leading-snug transition-colors duration-300 line-clamp-2 pr-4
                    ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                    {item.title}
                </h3>
            </div>
        </li>
    );
};