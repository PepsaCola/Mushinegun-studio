import {Hero} from "../../components/SubscriptionPageComponents/Hero/Hero.tsx";
import {PremiumProps} from "../../components/SubscriptionPageComponents/PremiumProps/PremiumProps.tsx";
import {Environments} from "../../components/SubscriptionPageComponents/Environments/Environments.tsx";
import {Special} from "../../components/SubscriptionPageComponents/Special/Special.tsx";
import {Discount} from "../../components/SubscriptionPageComponents/Discount/Discount.tsx";
import {JoinNow} from "../../components/SubscriptionPageComponents/JoinNow/JoinNow.tsx";
import {FAQ} from "../../components/SubscriptionPageComponents/FAQ/FAQ.tsx";


export const Subscription =()=>{
    return (
        <div className={'-mx-[28px]'}>
            <Hero/>
            <PremiumProps/>
            <Environments/>
            <Special/>
            <Discount/>
            <JoinNow/>
            <FAQ/>
        </div>
    )
}