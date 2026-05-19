import { useState } from "react";
import { Header } from "../Header/Header.tsx";
import { Sidebar } from "../Sidebar/Sidebar.tsx";
import { Content } from "../Content/Content.tsx";
import { Outlet } from "react-router-dom";
import {ShoppingCart} from "../../components/PopUps/ShoppingCart/ShoppingCart.tsx";


export const SharedLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <div className="flex flex-col w-full min-h-screen bg-[#26292F]">

            <Header
                onMenuClick={() => setIsSidebarOpen(true)}
                onCartClick={() => setIsCartOpen(true)}
            />

            <ShoppingCart
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />

            <div className='flex w-full flex-1 relative'>
                <Sidebar
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                />

                <Content>
                    <Outlet/>
                </Content>
            </div>
        </div>
    )
}