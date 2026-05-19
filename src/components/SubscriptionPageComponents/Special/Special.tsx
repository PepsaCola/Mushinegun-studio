import {SectionTitle} from "../../CumonComponents/SectionTitle/SectionTitle.tsx";
import {SubTitle} from "../../CumonComponents/SubTitle/SubTitle.tsx";

export const Special=()=>{
    return (
        <section
            className=" py-[48px] px-[80px] border-b border-white/10">

            <div className="grid  grid-cols-1 items-center lg:grid-cols-12 w-full gap-[24px] max-w-[1400px] mx-auto">
                <div className={'lg:col-span-7 text-white'}>
                    <SectionTitle className={'gap-[4px]! mb-[16px]!'}>
                        Monthly <span className={'text-[#F29314]'}>Ammo</span> + Special <span
                        className={'text-[#F29314]'}>Discounts</span>
                    </SectionTitle>
                    <SubTitle className={'  mb-[40px]!'}>
                        Get 300 Ammo monthly, exclusive deals, discounts, and earn Ammo on every purchase with Armory
                        Pro.
                    </SubTitle>
                    <ul className={' flex flex-col gap-[16px] '}>
                        <li className={' flex items-center text-[13px] font-light'}>
                            <img src="/icons/check.svg" className={'mr-[16px]'} alt=""/>
                            <p><span className={'text-[#F29314] '}>300 Ammo</span> added to your account every month</p>
                        </li>
                        <li className={' flex items-center text-[13px] font-light'}>
                            <img src="/icons/check.svg" className={'mr-[16px]'} alt=""/>
                            <p>
                                Take advantage <span className={'text-[#F29314] '}>of Ammo-only deals</span>, discounts,
                                bundles
                            </p>
                        </li>
                        <li className={' flex items-center text-[13px] font-light'}>
                            <img src="/icons/check.svg" className={'mr-[16px]'} alt=""/>
                            <p>
                                <span className={'text-[#F29314] '}>Collect Ammo </span>on each purchase
                            </p>
                        </li>
                        <li className={' flex items-center text-[13px] font-light'}>
                            <img src="/icons/check.svg" className={'mr-[16px]'} alt=""/>
                            <p>
                                <span className={'text-[#F29314] '}>Redeem Ammo</span> to purchase products
                            </p>
                        </li>
                    </ul>
                </div>
                <img className={'lg:col-span-5'} src="/img/subscription-props3.png" alt=""/>
            </div>

        </section>
    )
}