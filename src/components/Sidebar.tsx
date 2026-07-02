import {LayoutTemplateIcon} from "lucide-react";
import {
    ApplicationItems,
    DashboardItems,
    MiscellaneouItems,
} from "../constant/sidebar";
import SidebarBox from "./Sidebar-Box";

const Sidebar = () => {
    return (
        <div className="w-14 group hover:w-72 transition-all duration-500 h-screen overflow-y-hidden hover:overflow-y-auto overflow-x-hidden backdrop-blur-md absolute top-0 left-0 p-2.5 hover:border-r dark:border-blue-400/20 border-white/40 z-50">
            <div className="flex items-center gap-2 mb-5 h-9">
                <LayoutTemplateIcon
                    strokeWidth={1.7}
                    className="min-h-5! min-w-5! h-5 w-5 ml-2"
                />{" "}
                <span className="font-bold group-hover:flex hidden text-nowrap">
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
