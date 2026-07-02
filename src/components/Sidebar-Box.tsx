import {ChevronRightIcon, type LucideIcon} from "lucide-react";
import {useState} from "react";

const SidebarBox = ({
    sidebarItems,
}: {
    sidebarItems: {
        label: string;
        items: {
            label: string;
            icon: LucideIcon;
            items?: {
                label: string;
                href: string;
            }[];
            href?: string;
        }[];
    };
}) => {
    return (
        <div>
            <p className="text-xs py-3 px-2 opacity-60">
                <span className="group-hover:hidden ml-[5px] text-sm flex">
                    ...
                </span>
                <span className="hidden group-hover:inline">
                    {sidebarItems.label}
                </span>
            </p>
            <div>
                {sidebarItems?.items.map((side) => {
                    return (
                        <div>
                            {side?.href ? (
                                <a
                                    href={side?.href || "#"}
                                    className="flex gap-2 items-center py-1.5 dark:hover:bg-blue-400/10 hover:bg-white/30 px-2.5 rounded-full h-9 my-1"
                                >
                                    {
                                        <side.icon
                                            strokeWidth={1.7}
                                            className="min-h-4! h-4 min-w-4! w-4"
                                        />
                                    }
                                    <p className="text-nowrap group-hover:flex hidden">
                                        {side.label}
                                    </p>
                                </a>
                            ) : (
                                <SidebarItemBox side={side} />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SidebarBox;

const SidebarItemBox = ({
    side,
}: {
    side: {
        icon: LucideIcon;
        label: string;
        items?: {href: string; label: string}[];
    };
}) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div
            className={`flex flex-col cursor-pointer`}
            onClick={() => setOpen(!open)}
        >
            <div
                className={`flex items-center gap-2 justify-start dark:hover:bg-blue-400/10 hover:bg-white/30 py-1.5 px-2.5 rounded-full ${open ? "mb-2" : "mb-0"} ransition-all duration-500 ease-in-out h-9 my-1`}
            >
                {
                    <side.icon
                        strokeWidth={1.7}
                        className="min-h-4! h-4 min-w-4! w-4"
                    />
                }
                <p className="text-nowrap group-hover:flex hidden">
                    {side.label}
                </p>
                <ChevronRightIcon
                    size={16}
                    className="ml-auto text-nowrap group-hover:flex hidden"
                />
            </div>
            <div
                className={`group-hover:flex hidden flex-col mx-6 gap-1 bg-linear-to-t dark:from-blue-400/10 from-white/30 dark:to-blue-400/0 to-white/0 rounded-xl ${open ? "max-h-96 py-2" : "max-h-0 py-0"} px-2 overflow-hidden transition-all duration-500 ease-in-out`}
            >
                {side?.items.map((item) => {
                    return (
                        <a
                            href={item.href}
                            className="text-sm dark:hover:bg-blue-400/10 hover:bg-white/30 py-1 px-2.5 rounded-full"
                        >
                            {item.label}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};
