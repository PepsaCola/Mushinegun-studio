import {SectionTitle} from "../../CumonComponents/SectionTitle/SectionTitle.tsx";
import {SubTitle} from "../../CumonComponents/SubTitle/SubTitle.tsx";

export const Environments=()=>{
    return (
        <section
            className=" py-[48px] px-[80px] border-b border-white/10 ">
            <div
                className="grid grid grid-cols-1 items-center lg:grid-cols-12 w-full gap-[24px] max-w-[1400px] mx-auto">
                <img className={'lg:col-span-5'} src="/img/subscription-props2.png" alt=""/>

                <div className={'lg:col-span-7'}>
                    <SectionTitle className={'gap-[4px]! mb-[16px]!'}>
                        Access to Free <span className={'text-[#F29314]'}>Environments</span>
                    </SectionTitle>
                    <SubTitle className={'  mb-[40px]!'}>
                        With Armony Pro, gain access to a selection of our premium environments, including detailed
                        urban scenes, vibrant marketplaces, and more-perfect for bringing your projects to life.
                    </SubTitle>
                </div>
            </div>
        </section>
    )
}