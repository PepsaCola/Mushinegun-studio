export const ListItem = ({ asset }: { asset: any }) => {
    return (
        <li key={asset.id} className="group cursor-pointer block h-full">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/5">

                <img
                    src={asset.img}
                    alt={asset.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <div className="flex gap-[7px] flex-col justify-between items-end w-full">

                        <div className="flex w-full items-center justify-between gap-1.5">
                            <h4 className="text-white text-[14px] font-bold leading-tight group-hover:text-[#FCA311] transition-colors duration-300">
                                {asset.title}
                            </h4>
                            <p className="text-[#FEA227] block text-[13px] backdrop-blur-[15px] font-['Overpass_Mono'] px-[9px] box-border py-[5px]  leading-[16px] bg-white/5 rounded-[360px]">
                                {asset.newPrize}
                            </p>

                        </div>

                        <div className="flex w-full items-center justify-between ">
                            <span className="opacity-60 text-[13px] font-medium opacity-80">
                                {asset.category}
                            </span>
                            <span
                                className="opacity-30 mr-[7px] text-center text-[13px] line-through decoration-opacity-30 font-['Overpass_Mono']">
                                {asset.prize}
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </li>
    );
};