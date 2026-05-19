import {Outlet} from "react-router-dom";
import {Content} from "../../components/ForUserPageComponents/Content/Content.tsx";
import {Sidebar} from "../../components/ForUserPageComponents/Sidebar/Sidebar.tsx";

export const ForUser = () => {
    return (
        <div className="w-full h-full lg:py-[24px] lg:px-[52px]">
            <div className="bg-[#202024] rounded-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px] border border-white/15 ">
                <Sidebar />
                <Content >
                    <Outlet/>
                </Content>
            </div>
        </div>
    );
};