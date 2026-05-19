import {Featured} from "../../components/HomePageComponents/Featured/Featured.tsx";
import {NewEnvironments} from "../../components/HomePageComponents/NewEnvironments/NewEnvironments.tsx";
import {NewCollections} from "../../components/HomePageComponents/NewCollections/NewCollections.tsx";
import {ClickForFree} from "../../components/HomePageComponents/ClickForFree/ClickForFree.tsx";
import {Hero} from "../../components/SalesPageComponents/Hero/Hero.tsx";

export const Sales = ()=>{
    return(
        <>
            <Hero/>
            <Featured/>
            <NewEnvironments/>
            <NewCollections/>
            <ClickForFree classes={'my-0 mt-[24px]'}/>
        </>
    )
}