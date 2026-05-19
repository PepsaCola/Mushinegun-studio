import {SectionTitle} from "../../CumonComponents/SectionTitle/SectionTitle.tsx";
import {SubTitle} from "../../CumonComponents/SubTitle/SubTitle.tsx";

export const Hero = () => {
    return (
        <section className="flex flex-col  w-full -mt-[24px]">
            <div className="flex flex-col items-center justify-center mb-[32px] mt-[24px] px-[28px]">
                <SectionTitle className={'text-[26px]!'}>
                    Welcome to Our New Marketplace
                </SectionTitle>
                <SubTitle className={'text-[#9f9fa1] text-center max-w-[474px]!'}>
                    Premium access to our library of AAA quality props, VFX, materials and monthly ammo supply. <a
                    href="" className={'text-[#f29315] underline'}>
                    learn about ammo
                </a>
                </SubTitle>
            </div>

            <div className="w-full h-[600px] relative">
                <img
                    className={'w-full h-full object-cover'}
                    src="/img/hero-subscribtion.png"
                    alt="Hero"
                />

                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.7)] pointer-events-none" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent opacity-90 pointer-events-none" />

                <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e]/60 via-transparent to-transparent pointer-events-none" />
            </div>
        </section>
    )
}