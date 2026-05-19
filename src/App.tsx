import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { SharedLayout } from "./layout/SharedLayout/SharedLayout.tsx";

import { Home } from "./pages/Home/Home.tsx";
import { Collections } from "./pages/Collections/Collections.tsx";
import { Product } from "./pages/Product/Product.tsx";
import { Login } from "./pages/Login/Login.tsx";
import { Signup } from "./pages/Signup/Signup.tsx";
import { PlayableDemos } from "./pages/PlayableDemos/PlayableDemos.tsx";
import { ForUser } from "./pages/ForUser/ForUser.tsx";

import { Sales } from "./pages/Sales/Sales.tsx";
import { Bundles } from "./pages/Bundles/Bundles.tsx";
import { Blog } from "./pages/Blog/Blog.tsx";
import { Environments } from "./pages/Environments/Environments.tsx";
import { Assets } from "./pages/Assets/Assets.tsx";
import { Materials } from "./pages/Mararials/Mararials.tsx";
import { VFX } from "./pages/VFX/VFX.tsx";
import { Tools } from "./pages/Tools/Tools.tsx";
import { Sounds } from "./pages/Sounds/Sounds.tsx";
import { Company } from "./pages/Company/Company.tsx";
import { Subscription } from "./pages/Subscription/Subscription.tsx";
import { Timeline } from "./pages/Timeline/Timeline.tsx";

import { Settings } from "./pages/Settings/Settings.tsx";
import { ProfileSettings } from "./components/SettingsPageComponents/ProfileSettings/ProfileSettings.tsx";
import { Purchases } from "./components/SettingsPageComponents/Purchases/Purchases.tsx";
import { Cards } from "./components/SettingsPageComponents/Cards/Cards.tsx";
import { Wishlist } from "./components/SettingsPageComponents/Wishlist/Wishlist.tsx";
import { Pro } from "./components/SettingsPageComponents/Pro/Pro.tsx";
import { Ammo } from "./components/SettingsPageComponents/Ammo/Ammo.tsx";
import { Password } from "./components/SettingsPageComponents/Password/Password.tsx";

import { DescriptionTab } from "./components/ProductPageComponents/DescriptionTab/DescriptionTab.tsx";
import { VideosTab } from "./components/ProductPageComponents/VideosTab/VideosTab.tsx";
import { ReviewsTab } from "./components/ProductPageComponents/ReviewsTab/ReviewsTab.tsx";
import { TechSpecsTab } from "./components/ProductPageComponents/TechSpecsTab/TechSpecsTab.tsx";

import { TermOfUse } from "./components/ForUserPageComponents/TermOfUse/TermOfUse.tsx";

const PlaceholderPage = ({ title }: { title: string }) => (
    <div className="flex items-center justify-center h-[50vh] text-white">
        <h1 className="text-2xl font-bold opacity-50">{title} Page</h1>
    </div>
);

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
};

const TabTransition = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-8 lg:mt-10"
        >
            {children}
        </motion.div>
    );
};

function App() {
    const location = useLocation();

    const element = useRoutes([
        {
            path: "/",
            element: <SharedLayout />,
            children: [
                { index: true, element: <PageTransition><Home /></PageTransition> },
                { path: "collections", element: <PageTransition><Collections /></PageTransition> },

                {
                    path: "collection-product",
                    element: <Product />,
                    children: [

                        { index: true, element: <TabTransition><DescriptionTab /></TabTransition> },
                        { path: "videos", element: <TabTransition><VideosTab /></TabTransition> },
                        { path: "reviews", element: <TabTransition><ReviewsTab /></TabTransition> },
                        { path: "tech-specs", element: <TabTransition><TechSpecsTab /></TabTransition> },
                    ]
                },

                { path: "sales", element: <PageTransition><Sales /></PageTransition> },
                { path: "bundles", element: <PageTransition><Bundles /></PageTransition> },
                { path: "blog", element: <PageTransition><Blog /></PageTransition> },
                { path: "environments", element: <PageTransition><Environments /></PageTransition> },
                { path: "assets", element: <PageTransition><Assets /></PageTransition> },
                { path: "materials", element: <PageTransition><Materials /></PageTransition> },
                { path: "vfx", element: <PageTransition><VFX /></PageTransition> },
                { path: "tools", element: <PageTransition><Tools /></PageTransition> },
                { path: "sounds", element: <PageTransition><Sounds /></PageTransition> },

                { path: "demos", element: <PageTransition><PlayableDemos /></PageTransition> },

                { path: "company", element: <PageTransition><Company /></PageTransition> },
                { path: "subscription", element: <PageTransition><Subscription /></PageTransition> },
                { path: "timeline", element: <PageTransition><Timeline /></PageTransition> },

                {
                    path: "settings",
                    element: <Settings />,
                    children: [
                        { index: true, element: <PageTransition><ProfileSettings /></PageTransition> },
                        { path: "purchases", element: <PageTransition><Purchases /></PageTransition> },
                        { path: "cards", element: <PageTransition><Cards /></PageTransition> },
                        { path: "wishlist", element: <PageTransition><Wishlist /></PageTransition> },
                        { path: "pro", element: <PageTransition><Pro /></PageTransition> },
                        { path: "ammo", element: <PageTransition><Ammo /></PageTransition> },
                        { path: "password", element: <PageTransition><Password /></PageTransition> },
                    ]
                },

                {
                    path: "for-user",
                    element: <ForUser />,
                    children: [
                        { path: "terms-of-use", element: <PageTransition><TermOfUse /></PageTransition> },
                        { path: "help", element: <PageTransition><PlaceholderPage title="Help" /></PageTransition> },
                        { path: "privacy-policy", element: <PageTransition><PlaceholderPage title="Privacy Policy" /></PageTransition> },
                        { path: "contact-us", element: <PageTransition><PlaceholderPage title="Contact Us" /></PageTransition> },
                    ]
                }
            ]
        },
        {
            path: "/login",
            element: <PageTransition><Login /></PageTransition>
        },
        {
            path: "/signup",
            element: <PageTransition><Signup /></PageTransition>
        }
    ]);

    if (!element) return null;

    return (
        <>
            <AnimatePresence mode="wait">
                {React.cloneElement(element, { key: location.pathname })}
            </AnimatePresence>
        </>
    );
}

export default App;