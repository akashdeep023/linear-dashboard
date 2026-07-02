import React from "react";
import Sidebar from "./Sidebar";
import Topside from "./Topside";
import Rightside from "./Rightside";

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div
            className="h-screen w-full relative text-blue-950 dark:text-blue-200 bg-[url('https://linear-next.avidtemplates.com/img/misc/body.jpg')]
    dark:bg-[url('https://linear-next.avidtemplates.com/img/misc/body-dark.png')] bg-cover bg-center bg-no-repeat"
        >
            <Sidebar />
            <Topside />
            <main className="rounded-2xl border dark:border-blue-400/20 border-white/40 ml-14 mr-14 h-[calc(100dvh-56px)] p-4 flex gap-6">
                {children}
            </main>
            <Rightside />
        </div>
    );
};

export default Layout;
