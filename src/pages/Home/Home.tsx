import {Advertisement} from "../../components/HomePageComponents/Advertisement/Advertisement.tsx";
import {Hero} from "../../components/HomePageComponents/Hero/Hero.tsx";
import {Categories} from "../../components/HomePageComponents/Categories/Categories.tsx";
import {Featured} from "../../components/HomePageComponents/Featured/Featured.tsx";
import {NewEnvironments} from "../../components/HomePageComponents/NewEnvironments/NewEnvironments.tsx";
import {NewCollections} from "../../components/HomePageComponents/NewCollections/NewCollections.tsx";
import {NewBundles} from "../../components/HomePageComponents/NewBundles/NewBundles.tsx";
import {Props} from "../../components/HomePageComponents/Props/Props.tsx";
import {Available} from "../../components/HomePageComponents/Available/Available.tsx";
import {ClickForFree} from "../../components/HomePageComponents/ClickForFree/ClickForFree.tsx";

export const Home = () => {
    return (
        <>

            <Advertisement/>
            <Hero/>
            <Categories/>
            <Featured/>
            <NewEnvironments/>
            <NewCollections/>
            <ClickForFree classes={'my-[48px]'}/>
            <NewBundles/>
            <Props/>
            <Available/>
        </>
    )
}