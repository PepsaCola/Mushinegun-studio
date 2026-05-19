import {SectionTitle} from "../../CumonComponents/SectionTitle/SectionTitle.tsx";
import {SubTitle} from "../../CumonComponents/SubTitle/SubTitle.tsx";

export const PremiumProps = () => {
    return (
        <section className=" py-[48px] px-[80px] border-b border-white/10 ">
            <div className="grid  grid-cols-1 items-center lg:grid-cols-12 w-full gap-[24px] max-w-[1400px] mx-auto">
                <div className={'lg:col-span-7'}>
                    <SectionTitle className={'gap-[4px]! mb-[16px]!'}>
                        Access to <span className={'text-[#F29314]'}>Premium Props</span>
                    </SectionTitle>
                    <SubTitle className={'mb-[40px]!'}>
                        Step up your creations with Armony Pro, Free access to an extensive collection of premium assets
                        designrd to bring depth and quality to your projects.
                    </SubTitle>
                    <ul className={'grid grid-cols-1 md:grid-cols-2 gap-y-[40px] gap-x-[16px]'}>
                        <li className={'flex flex-col gap-[12px] items-start'}>
                            <img src="/icons/props1.svg" alt=""/>
                            <p className="text-[#9f9fa1] text-[13px] font-light leading-[22px]">
                        <span className={'text-[13px] font-bold'}>
                           3D assets
                        </span> in variety of genres, styles, architects and more
                            </p>
                        </li>
                        <li className={'flex flex-col gap-[12px] items-start'}>
                            <img src="/icons/props2.svg" alt=""/>
                            <p className="text-[#9f9fa1] text-[13px] font-light leading-[22px]">
                        <span className={'text-[13px] font-bold'}>
                            Materials
                        </span> library of custom, in-house materials crafted to enhance your projects with unique
                                textures and
                                finishes
                            </p>
                        </li>
                        <li className={'flex flex-col gap-[12px] items-start'}>
                            <img src="/icons/props3.svg" alt=""/>
                            <p className="text-[#9f9fa1] text-[13px] font-light leading-[22px]">
                        <span className={'text-[13px] font-bold'}>
                            Sound Effects
                        </span> from ambient sounds like wind to immersive effects, designed to enrich your projects’
                                atmosphere
                            </p>
                        </li>
                    </ul>
                </div>
                <img className={'lg:col-span-5'} src="/img/subscription-props.png" alt=""/>
            </div>
        </section>
    )
}