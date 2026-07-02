import {
    ApplicationItems,
    DashboardItems,
    MiscellaneouItems,
} from "../constant/sidebar";
import SidebarBox from "./Sidebar-Box";

const Sidebar = () => {
    return (
        <div className="w-14 group hover:w-60 transition-all duration-500 h-screen overflow-y-hidden hover:overflow-y-auto overflow-x-hidden backdrop-blur-md dark:hover:bg-blue-400/10 rounded-r-2xl hover:bg-white/20 absolute top-0 left-0 p-2.5 hover:border-r dark:border-blue-400/20 border-white/40 z-50">
            <div className="flex items-center gap-2 h-9 mb-5">
                <img
                    alt="Lnaguage"
                    loading="lazy"
                    className="h-4 w-4 ml-3"
                    src="/image.png"
                ></img>
                <span className="font-extrabold text-lg group-hover:flex hidden ml-1 text-nowrap bg-linear-to-r from-blue-500 to-green-700 bg-clip-text text-transparent">
                    Linear Dashboard
                </span>
            </div>
            <SidebarBox sidebarItems={DashboardItems} />
            <SidebarBox sidebarItems={ApplicationItems} />
            <SidebarBox sidebarItems={MiscellaneouItems} />
        </div>
    );
};

export default Sidebar;
