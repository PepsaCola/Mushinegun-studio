interface ListItemProps {
    asset: {
        id: number | string;
        img: string;
        title: string;
        category: string;
        prize: string;
        newPrize: string;
    };

}

export const ListItem = ({ asset }: ListItemProps) => {
    return (
        <li className="bg-white/5 p-[22px] rounded-[10px] group cursor-pointer flex flex-col items-center gap-3">

            <div className={`relative rounded-xl overflow-hidden p-[15px] bg-white/5 w-auto
                
            `}>
                <img
                    src={asset.img}
                    alt={asset.title}
                    className={`transition-transform duration-500 group-hover:scale-110
                    `}
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            <div className="flex flex-col items-center gap-[15px] justify-between items-start">
                <div className="flex flex-col mx-auto gap-1">
                    <span className="text-center opacity-60 text-[13px]">
                        {asset.category}
                    </span>
                    <h4 className="text-white text-center text-sm font-medium leading-tight group-hover:text-[#FCA311] transition-colors line-clamp-1">
                        {asset.title}
                    </h4>

                </div>

                <div className="flex  items-end gap-[7px]">
                    <p className="text-[#FEA227]  text-[13px] backdrop-blur-[15px] font-['Overpass_Mono'] px-[7px] box-border py-[5px]  leading-[16px]! bg-white/5 rounded-[360px]">
                        {asset.newPrize}
                    </p>
                    <span className="opacity-30 text-[13px] text-center w-full line-through decoration-opacity-30 font-['Overpass_Mono'] leading-[22px]">
                        {asset.prize}
                    </span>
                </div>
            </div>
        </li>
    );
};