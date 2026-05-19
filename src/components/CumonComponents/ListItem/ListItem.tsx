import {ImageWithLoader} from "../../ImageWithLoader/ImageWithLoader.tsx";

interface ListItemProps {
    asset: {
        id: number | string;
        img: string;
        title: string;
        category: string;
        prize: string;
        newPrize: string;
    };
    aspect?: 'square' | 'video';
    imageFit?: 'cover' | 'contain';
}

export const ListItem = ({ asset, aspect = 'video', imageFit = 'cover' }: ListItemProps) => {

    const aspectRatioClass = aspect === 'square' ? 'aspect-square' : 'aspect-[16/9]';

    return (
        <div className="group cursor-pointer flex flex-col gap-3 h-full">

            <div className={`relative w-full ${aspectRatioClass} rounded-xl overflow-hidden bg-white/5`}>
                <ImageWithLoader
                    src={asset.img}
                    alt={asset.title}
                    containerClassName={`w-full h-full ${imageFit === 'contain' ? 'flex items-center justify-center p-4' : ''}`}
                    className={`transition-transform duration-500 group-hover:scale-110
                        ${imageFit === 'cover'
                        ? 'w-full h-full object-cover'
                        : 'w-auto h-auto max-w-full max-h-full object-contain'
                    }
                    `}
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
            </div>

            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                    <h4 className="text-white text-sm font-medium leading-tight group-hover:text-[#FCA311] transition-colors line-clamp-1">
                        {asset.title}
                    </h4>
                    <span className="text-gray-500 text-[13px]">
                        {asset.category}
                    </span>
                </div>

                <div className="flex flex-col items-end gap-[4px]">
                    <p className="text-[#FEA227] text-[13px] backdrop-blur-[15px] font-['Overpass_Mono'] px-[7px] box-border py-[5px] leading-[16px] bg-white/5 rounded-[360px]">
                        {asset.newPrize}
                    </p>
                    <span className="opacity-30 text-[13px] text-center w-full line-through decoration-opacity-30 font-['Overpass_Mono'] leading-[22px]">
                        {asset.prize}
                    </span>
                </div>
            </div>
        </div>
    );
};