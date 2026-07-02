import {
    Forward,
    Fullscreen,
    Languages,
    Printer,
    Reply,
    Smile,
} from "lucide-react";

const InboxDetais = () => {
    const userList: {
        name: string;
        url: string;
        desc: string;
        time: string;
        mail: string;
        mail2: string;
    } = {
        name: "Lina Klein",
        url: "https://linear-next.avidtemplates.com/_next/image?url=%2Fimg%2Fcontacts%2F2.jpg&w=64&q=75",
        desc: "Hey Lina, don't forget to check the updated project files attached.",
        time: "10:56 AM",
        mail: "<lina.k@zmail.com>",
        mail2: "To: malinda-h@zmail.com",
    };
    const jon = {
        name: "John Doe",
        url: "https://randomuser.me/api/portraits/men/1.jpg",
        desc: "Project update scheduled for tomorrow at 10am.",
        time: "09:21 AM",
        mail: "To: lina.k@zmail.com",
    };
    return (
        <div className="w-full  h-[calc(100dvh-75px)] overflow-auto mx-8">
            <div className="flex items-center justify-between mt-4 pt-8">
                <p className="text-sm py-1 px-2">{userList.desc}</p>
                <div className="flex gap-2 items-center">
                    <Languages
                        strokeWidth={1.7}
                        className="min-h-4! h-4 min-w-4! w-4 mr-3"
                    />
                    <Printer
                        strokeWidth={1.7}
                        className="min-h-4! h-4 min-w-4! w-4 mr-3"
                    />
                    <Fullscreen
                        strokeWidth={1.7}
                        className="min-h-4! h-4 min-w-4! w-4 mr-3"
                    />
                </div>
            </div>
            <div
                className={`flex gap-2 items-start dark:hover:bg-blue-400/10 hover:bg-white/30 rounded-lg p-5 mt-1.5 dark:bg-blue-400/10 bg-white/40`}
            >
                <img
                    alt="Profile"
                    loading="lazy"
                    width="50"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    className="h-8 w-8 rounded-full mr-2"
                    src={userList.url}
                />
                <div className="w-full">
                    <p className="text-nowrap flex justify-between text-sm mb-1 w-full">
                        <div className="flex items-center gap-3">
                            <span>{userList.name}</span>
                            <span className="text-xs opacity-70 line-clamp-1">
                                {userList.mail}
                            </span>
                        </div>
                        <span className="opacity-50 text-xs">
                            {userList.time}
                        </span>
                    </p>
                    <span className="text-xs opacity-70 line-clamp-1">
                        {userList.mail2}
                    </span>
                    <div className="text-sm mt-4">
                        Hi Malinda,
                        <br />
                        <br />
                        I trust this message finds you well. As we progress with
                        the ongoing project, I believe it's crucial for us to
                        touch base and discuss certain aspects in detail. Are
                        you available for a meeting tomorrow at 2 PM? I'd like
                        to have an in-depth conversation about the project's
                        current status, address any challenges, and explore
                        potential strategies moving forward..
                        <br />
                        <br />
                        Your insights and input are invaluable to the success of
                        this project, and I believe a focused discussion will
                        help us streamline our efforts. If tomorrow at 2 PM
                        doesn't work for you, please let me know a time that
                        suits your schedule, and I'll do my best to
                        accommodate.,
                        <br />
                        <br />
                        Looking forward to our collaboration and the positive
                        impact it will have on the project.
                        <br />
                        <br />
                        Regards,
                        <br />
                        <br />
                        Lina Klein
                    </div>
                </div>
            </div>
            <div
                className={`flex gap-2 items-start dark:hover:bg-blue-400/10 hover:bg-white/30 rounded-lg p-5 mt-1.5 dark:bg-blue-400/10 bg-white/40`}
            >
                <img
                    alt="Profile"
                    loading="lazy"
                    width="50"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    className="h-8 w-8 rounded-full mr-2"
                    src={jon.url}
                />
                <div className="w-full">
                    <p className="text-nowrap flex justify-between text-sm mb-1 w-full">
                        <div className="flex items-center gap-3">
                            <span>{jon.name}</span>
                        </div>
                        <span className="opacity-50 text-xs">{jon.time}</span>
                    </p>
                    <span className="text-xs opacity-70 line-clamp-1">
                        {jon.mail}
                    </span>
                    <div className="text-sm mt-4">
                        Hi Lina,
                        <br />
                        <br />
                        Unfortunately, I won't be available at 2 PM. I have a
                        prior commitment during that time that I cannot
                        reschedule. I appreciate the offer and would have loved
                        to join you, but it seems like our schedules won't align
                        this time. If there's another suitable time in the
                        future, I'd be happy to coordinate.
                    </div>
                </div>
            </div>
            <div
                className={`flex gap-2 items-start dark:hover:bg-blue-400/10 hover:bg-white/30 rounded-lg p-5 mt-1.5 dark:bg-blue-400/10 bg-white/40`}
            >
                <img
                    alt="Profile"
                    loading="lazy"
                    width="50"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    className="h-8 w-8 rounded-full mr-2"
                    src={userList.url}
                />
                <div className="w-full">
                    <p className="text-nowrap flex justify-between text-sm mb-1 w-full">
                        <div className="flex items-center gap-3">
                            <span>{userList.name}</span>
                            <span className="text-xs opacity-70 line-clamp-1">
                                {userList.mail}
                            </span>
                        </div>
                        <span className="opacity-50 text-xs">
                            {userList.time}
                        </span>
                    </p>
                    <span className="text-xs opacity-70 line-clamp-1">
                        {userList.mail2}
                    </span>
                    <div className="text-sm mt-4">
                        Thank you for the prompt response and letting me know
                        about your prior commitment. I completely understand,
                        and I appreciate your willingness to coordinate for a
                        future meeting. It's important to prioritize existing
                        commitments. Let's definitely plan for another time that
                        works for both of us. Please share your availability,
                        and we'll find a suitable slot to discuss the project.
                        Your understanding is greatly appreciated.
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-1 my-4">
                <div className="border dark:border-blue-400/20 border-blue-400/30 flex items-center justify-between gap-2 rounded-3xl px-3 h-9 w-fit">
                    <Reply size={14} strokeWidth={1.7} />
                    <span className="text-sm">Reply</span>
                </div>
                <div className="border dark:border-blue-400/20 border-blue-400/30 flex items-center justify-between gap-2 rounded-3xl px-3 h-9 w-fit">
                    <Forward size={14} strokeWidth={1.7} />
                    <span className="text-sm">Forward</span>
                </div>
                <div className="border dark:border-blue-400/20 border-blue-400/30 flex items-center justify-between gap-2 rounded-3xl px-3 h-9 w-fit">
                    <Smile size={14} strokeWidth={1.7} />
                </div>
            </div>
        </div>
    );
};

export default InboxDetais;
