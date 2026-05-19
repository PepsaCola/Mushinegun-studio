import { Link } from "react-router-dom";

export const Available = () => {
    return (
        <section className="w-full mt-[48px]">
            <div className="relative w-full h-[320px] rounded-2xl overflow-hidden group">

                <img
                    src="/img/banner-bg-home.png"
                    alt="Mystical Village"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

                <div className="relative z-10 h-full flex flex-col justify-center px-10 max-w-2xl">

                    <h2 className="text-white text-3xl font-bold mb-4">
                        Discover the Mystical Village
                    </h2>

                    <p className="text-gray-300 text-[15px] leading-relaxed mb-8 opacity-90">
                        Step into a world of enchantment with the Elven Oak Village Pack,
                        where ancient oaks intertwine with elegant architecture to create
                        a serene, magical realm.
                    </p>

                    <div>
                        <Link
                            to="#"
                            className="inline-block bg-[#FCA311] hover:bg-[#e0900e] text-black text-xs font-bold uppercase py-3 px-8 rounded-full transition-colors transition-transform active:scale-95"
                        >
                            Available on Unity
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};