import {ArrowDownZa} from "lucide-react";

const InboxBox = () => {
    const userList: {name: string; url: string; desc: string; time: string}[] =
        [
            {
                name: "Lina Klein",
                url: "https://linear-next.avidtemplates.com/_next/image?url=%2Fimg%2Fcontacts%2F2.jpg&w=64&q=75",
                desc: "Hey Lina, don't forget to check the updated project files attached.",
                time: "10:56",
            },
            {
                name: "John Doe",
                url: "https://randomuser.me/api/portraits/men/1.jpg",
                desc: "Project update scheduled for tomorrow at 10am.",
                time: "09:21",
            },
            {
                name: "Jane Smith",
                url: "https://randomuser.me/api/portraits/women/2.jpg",
                desc: "Please review the attached document before EOD.",
                time: "08:51",
            },
            {
                name: "Mike Brown",
                url: "https://randomuser.me/api/portraits/men/3.jpg",
                desc: "Monthly meeting invitation - RSVP requested.",
                time: "08:32",
            },
            {
                name: "Emily White",
                url: "https://randomuser.me/api/portraits/women/4.jpg",
                desc: "Final version of the brochure attached.",
                time: "07:49",
            },
            {
                name: "Robert Wilson",
                url: "https://randomuser.me/api/portraits/men/5.jpg",
                desc: "Important: Change in contract terms, please sign.",
                time: "07:04",
            },
            {
                name: "Laura Johnson",
                url: "https://randomuser.me/api/portraits/women/6.jpg",
                desc: "Great job on the presentation yesterday!",
                time: "06:18",
            },
            {
                name: "David Kim",
                url: "https://randomuser.me/api/portraits/men/7.jpg",
                desc: "Can you provide a status update on the project?",
                time: "05:42",
            },
            {
                name: "Sophia Martinez",
                url: "https://randomuser.me/api/portraits/women/8.jpg",
                desc: "Lunch meeting moved to Friday at noon.",
                time: "04:57",
            },
            {
                name: "Chris Lee",
                url: "https://randomuser.me/api/portraits/men/9.jpg",
                desc: "Reminder: Fill out travel reimbursement form.",
                time: "04:38",
            },
            {
                name: "Grace Hopper",
                url: "https://randomuser.me/api/portraits/women/10.jpg",
                desc: "Let's schedule a code review session this week.",
                time: "03:10",
            },
            {
                name: "Alan Turing",
                url: "https://randomuser.me/api/portraits/men/11.jpg",
                desc: "Encryption keys updated for the deployment pipeline.",
                time: "02:23",
            },
            {
                name: "Ada Lovelace",
                url: "https://randomuser.me/api/portraits/women/12.jpg",
                desc: "Drafted the architecture overview, please check.",
                time: "01:56",
            },
        ];
    return (
        <div className="min-w-sm  h-[calc(100dvh-75px)] overflow-auto">
            <div className="flex items-center justify-between mt-4">
                <p className="text-sm py-1 px-2">Inbox</p>
                <ArrowDownZa
                    strokeWidth={1.7}
                    className="min-h-4! h-4 min-w-4! w-4 mr-3"
                />
            </div>
            {userList.map((user, idx) => {
                return (
                    <a
                        key={idx + "user"}
                        href={"#"}
                        className={`flex gap-2 items-center dark:hover:bg-blue-400/10 hover:bg-white/30 px-2.5 rounded-lg h-14 ${idx == 0 && "dark:bg-blue-400/10 bg-white/30"} p-2.5 mt-1.5`}
                    >
                        <img
                            alt="Profile"
                            loading="lazy"
                            width="50"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            className="h-8 w-8 rounded-full mr-2"
                            src={user.url}
                        />
                        <div className="w-full">
                            <p className="text-nowrap flex justify-between text-sm mb-1.5 w-full">
                                {user.name}
                                <span className="opacity-50 text-xs">
                                    {user.time}
                                </span>
                            </p>
                            <span className="text-xs opacity-70 line-clamp-1">
                                {user.desc}
                            </span>
                        </div>
                    </a>
                );
            })}
        </div>
    );
};

export default InboxBox;
