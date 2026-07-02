import {
    Info,
    MailPlus,
    MoreHorizontalIcon,
    Search,
    Settings,
} from "lucide-react";

const Topside = () => {
    return (
        <div className="ml-14 h-14 p-2 flex items-center gap-4">
            <p>Mail</p>
            <div className="border dark:border-blue-400/20 border-white/40 flex items-center justify-between gap-2 rounded-3xl px-3 h-9 ml-3">
                <Search size={14} strokeWidth={1.7} />
                <input
                    type="text"
                    placeholder="Search Mail..."
                    className="text-sm border-none outline-none focus:outline-none w-60"
                />
                <span className="text-[9px]"> Ctrl K</span>
            </div>
            <div className="flex items-center ml-auto mr-1 gap-2">
                <div className="dark:hover:bg-blue-400/20 hover:bg-white/40 w-10 h-10 cursor-pointer hover:shadow flex items-center justify-center rounded-xl transition-all duration-300">
                    <Info
                        strokeWidth={1.7}
                        className="min-h-5! h-5 min-w-5! w-5"
                    />
                </div>
                <div className="dark:hover:bg-blue-400/20 hover:bg-white/40 w-10 h-10 cursor-pointer hover:shadow flex items-center justify-center rounded-xl transition-all duration-300">
                    <Settings
                        strokeWidth={1.7}
                        className="min-h-5! h-5 min-w-5! w-5"
                    />
                </div>
                <div className="dark:hover:bg-blue-400/20 hover:bg-white/40 w-10 h-10 cursor-pointer hover:shadow flex items-center justify-center rounded-xl transition-all duration-300">
                    <MoreHorizontalIcon
                        strokeWidth={1.7}
                        className="min-h-5! h-5 min-w-5! w-5"
                    />
                </div>
                <div className="border dark:border-blue-400/20 border-white/40 flex items-center justify-between gap-2 rounded-3xl px-3 h-9 ml-2 mr-6">
                    <MailPlus size={14} strokeWidth={1.7} />
                    <span className="text-sm">Compose Mail</span>
                </div>
                <div>
                    <img
                        alt="Profile"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="h-8 w-8 rounded-full"
                        src="https://linear-next.avidtemplates.com/_next/image?url=%2Fimg%2Fcontacts%2F2.jpg&w=64&q=75"
                    />
                </div>
            </div>
        </div>
    );
};

export default Topside;
