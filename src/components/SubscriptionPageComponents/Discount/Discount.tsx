import {SectionTitle} from "../../CumonComponents/SectionTitle/SectionTitle.tsx";
import {SubTitle} from "../../CumonComponents/SubTitle/SubTitle.tsx";

export const Discount=()=>{
    return (
        <section
            className=" gap-[24px] py-[48px] px-[80px] border-b border-white/10">
            <div className={'grid  grid-cols-1 items-center lg:grid-cols-12 w-full gap-[24px] max-w-[1400px] mx-auto'}>
                <img className={'lg:col-span-5'} src="/img/subscription-3.png" alt=""/>

                <div className={'lg:col-span-7 text-white'}>
                    <SectionTitle className={'gap-[4px]! mb-[16px]!'}>
                        <span className={'text-[#F29314]'}>20% Ammo</span> Box Set Discount
                    </SectionTitle>
                    <SubTitle className={'  mb-[40px]!'}>
                        Enjoy an exclusive 20% discount on each Ammo Box set, making it even easier to load up on the
                        resources you need for your projects.
                    </SubTitle>
                    <button
                        className={'w-full max-w-[200px] py-[14px] rounded-full bg-[#F29315] hover:bg-[#E68A00] text-center text-[#111111] text-xs font-semibold capitalize transition-transform active:scale-95'}>
                        purchase ammo box
                    </button>
                </div>
            </div>


        </section>
    )
}