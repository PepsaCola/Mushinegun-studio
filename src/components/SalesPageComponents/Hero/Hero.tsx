
export const Hero = () => {
    return (
        <section className="w-full h-[320px] rounded-2xl relative overflow-hidden group">

            <img
                src="/img/Banner%20(sale).png"
                alt="Halloween Sales"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 z-10">

                <span className="opacity-80 justify-start  text-[11px] font-semibold tracking-[.25em] uppercase mb-[12px]">
                    Sale
                </span>

                <h2 className="text-white text-3xl md:text-4xl font-bold mb-[12px] tracking-tight">
                    Halloween Sales
                </h2>

                <p className="  opacity-80 text-[13px] font-normal max-w-[380px] leading-[22px] mb-[24px]  ">
                    Explore spooky sales for environments, 3D assets and other materials.
                </p>

                <button className="bg-[#FCA311] w-fit hover:bg-[#e0900e] text-[#111111] px-8 py-3.5 rounded-full text-[11px] font-semibold uppercase transition-transform active:scale-95 tracking-[.025em] leading-[11px] transition-colors">
                    Show More
                </button>
            </div>
        </section>
    );
};