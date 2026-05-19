import { Link } from "react-router-dom";

export const ClickForFree = ({ classes = "" }: { classes?: string }) => {
    return (
        <section className={`w-full ${classes}`}>
            <Link
                to="#"
                className="group relative block w-full h-[120px] sm:h-[140px] lg:h-[170px] rounded-xl overflow-hidden shadow-lg  transition-all"
            >
                <div
                    className="absolute inset-0 bg-[url('/img/click.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />

                <div className="relative z-10 h-full flex items-center justify-center px-4">
                    <p className="text-white text-[32px] sm:text-[48px] lg:text-[64px] font-black uppercase tracking-widest drop-shadow-md text-center font-['Jersey_25'] leading-none transition-all duration-300 group-hover:text-[#FCA311]">
                        Click for a Free Pack
                    </p>
                </div>
            </Link>
        </section>
    );
};