import React from "react";
import Sidebar from "./Sidebar";
import Topside from "./Topside";
import Rightside from "./Rightside";

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div
            className="h-screen min-w-fit relative text-blue-950 dark:text-blue-200 bg-[url('/bg-light.png')]
    dark:bg-[url('/bg-dark.png')] bg-cover bg-center bg-no-repeat"
        >
            <Sidebar />
            <Topside />
            <main className="rounded-2xl border dark:border-blue-400/20 border-white/40 ml-14 mr-14 h-[calc(100dvh-64px)] p-4 flex gap-6 dark:bg-blue-400/5 bg-white/30">
                {children}
            </main>
            <Rightside />
        </div>
    );
};

export default Layout;
