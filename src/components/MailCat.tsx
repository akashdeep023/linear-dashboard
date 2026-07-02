import {
    Flag,
    FolderClosed,
    Inbox,
    Info,
    PenBoxIcon,
    SendHorizonal,
    Star,
    TimerResetIcon,
    Trash2,
} from "lucide-react";

const MailCat = () => {
    return (
        <div className="min-w-56">
            <p className="text-xs py-1 px-2 mt-4 opacity-60">Mailboxes</p>
            <div className="text-sm *:mb-1">
                <a
                    href={"#"}
                    className="flex gap-2 items-center py-1.5 dark:hover:bg-blue-400/10 hover:bg-emerald-700/10 px-2.5 rounded-lg h-9 dark:bg-blue-400/10 bg-emerald-700/10"
                >
                    <Inbox
                        strokeWidth={1.7}
                        className="min-h-4! h-4 min-w-4! w-4"
                    />
                    <p className="text-nowrap flex">Inbox</p>
                </a>
                <a
                    href={"#"}
                    className="flex gap-2 items-center py-1.5 dark:hover:bg-blue-400/10 hover:bg-emerald-700/10 px-2.5 rounded-lg h-9"
                >
                    <Star
                        strokeWidth={1.7}
                        className="min-h-4! h-4 min-w-4! w-4"
                    />
                    <p className="text-nowrap flex">Starred</p>
                </a>
                <a
                    href={"#"}
                    className="flex gap-2 items-center py-1.5 dark:hover:bg-blue-400/10 hover:bg-emerald-700/10 px-2.5 rounded-lg h-9"
                >
                    <TimerResetIcon
                        strokeWidth={1.7}
                        className="min-h-4! h-4 min-w-4! w-4"
                    />
                    <p className="text-nowrap flex">Scheduled</p>
                </a>
                <a
                    href={"#"}
                    className="flex gap-2 items-center py-1.5 dark:hover:bg-blue-400/10 hover:bg-emerald-700/10 px-2.5 rounded-lg h-9"
                >
                    <Flag
                        strokeWidth={1.7}
                        className="min-h-4! h-4 min-w-4! w-4"
                    />
                    <p className="text-nowrap flex">Important</p>
                </a>
                <a
                    href={"#"}
                    className="flex gap-2 items-center py-1.5 dark:hover:bg-blue-400/10 hover:bg-emerald-700/10 px-2.5 rounded-lg h-9"
                >
                    <SendHorizonal
                        strokeWidth={1.7}
                        className="min-h-4! h-4 min-w-4! w-4"
                    />
                    <p className="text-nowrap flex">Sent</p>
                </a>
                <a
                    href={"#"}
                    className="flex gap-2 items-center py-1.5 dark:hover:bg-blue-400/10 hover:bg-emerald-700/10 px-2.5 rounded-lg h-9"
                >
                    <PenBoxIcon
                        strokeWidth={1.7}
                        className="min-h-4! h-4 min-w-4! w-4"
                    />
                    <p className="text-nowrap flex">Draft</p>
                </a>
                <a
                    href={"#"}
                    className="flex gap-2 items-center py-1.5 dark:hover:bg-blue-400/10 hover:bg-emerald-700/10 px-2.5 rounded-lg h-9"
                >
                    <Info
                        strokeWidth={1.7}
                        className="min-h-4! h-4 min-w-4! w-4"
                    />
                    <p className="text-nowrap flex">Spam</p>
                </a>
                <a
                    href={"#"}
                    className="flex gap-2 items-center py-1.5 dark:hover:bg-blue-400/10 hover:bg-emerald-700/10 px-2.5 rounded-lg h-9"
                >
                    <Trash2
                        strokeWidth={1.7}
                        className="min-h-4! h-4 min-w-4! w-4"
                    />
                    <p className="text-nowrap flex">Trash</p>
                </a>
            </div>
            <p className="text-xs py-1 px-2 mt-6 opacity-60">Categories</p>
            <div className="text-sm mb-1">
                {[
                    "Promotions",
                    "Social",
                    "Work",
                    "Updates",
                    "Forums",
                    "Conversations",
                ].map((item, idx) => {
                    return (
                        <a
                            href={"#"}
                            key={idx + "cate"}
                            className="flex gap-2 items-center py-1.5 dark:hover:bg-blue-400/10 hover:bg-emerald-700/10 px-2.5 rounded-lg h-9"
                        >
                            <FolderClosed
                                strokeWidth={1.7}
                                className="min-h-4! h-4 min-w-4! w-4"
                            />
                            <p className="text-nowrap flex">{item}</p>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default MailCat;
