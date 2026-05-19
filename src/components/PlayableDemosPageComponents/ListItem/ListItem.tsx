
import {ImageWithLoader} from "../../ImageWithLoader/ImageWithLoader.tsx";

interface ListItemProps {
    asset: {
        id: number | string;
        img: string;
        title: string;
    };
    onDownloadClick: (asset: any) => void;
}

export const ListItem = ({ asset, onDownloadClick }: ListItemProps) => {

    return (
        <li
            className="group cursor-pointer flex flex-col gap-3 h-full"
            onClick={() => onDownloadClick(asset)}
        >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#202024]">
                <ImageWithLoader
                    src={asset.img}
                    alt={asset.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
            </div>

            <div className="flex justify-between items-start">
                <div className="flex gap-[16px] w-full items-center">
                    <h4 className="flex-1 text-white text-sm font-medium leading-tight group-hover:text-[#FCA311] transition-colors line-clamp-2">
                        {asset.title}
                    </h4>

                    <button
                        type="button"
                        className="bg-[#FCA311] hover:bg-[#e0900e] p-[10px] rounded-full transition-colors active:scale-95 flex-shrink-0"
                    >
                        <img src="/icons/Download.svg" alt="Download"/>
                    </button>
                </div>
            </div>
        </li>
    );
};