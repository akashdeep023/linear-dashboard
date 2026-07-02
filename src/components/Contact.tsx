import {
    CalendarIcon,
    Edit,
    LocationEdit,
    Mail,
    MessageCircle,
    MinusCircle,
    Phone,
    PhoneCallIcon,
    StickyNotePlusIcon,
} from "lucide-react";

const Contact = () => {
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
        desc: "Investor Implementation Analyst, Harvey Inc",
        time: "10:56 AM",
        mail: "<lina.k@zmail.com>",
        mail2: "To: malinda-h@zmail.com",
    };
    return (
        <div className="flex flex-col mx-auto w-full">
            <div className="flex items-center gap-4 justify-end mt-4 mr-6">
                <div className="text-sm flex items-center gap-2">
                    <Edit
                        strokeWidth={1.7}
                        className="min-h-4! h-4 min-w-4! w-4"
                    />
                    Update
                </div>
                <div className="text-sm flex items-center gap-2">
                    <MinusCircle
                        strokeWidth={1.7}
                        className="min-h-4! h-4 min-w-4! w-4"
                    />
                    Delete
                </div>
            </div>
            <div className="w-xl h-fit overflow-auto dark:bg-blue-400/10 bg-white/50 mt-12 p-2 mx-auto rounded-lg">
                <div className="flex items-center justify-around dark:bg-blue-400/10 bg-emerald-700/5 h-60 w-full rounded-t-lg flex-col p-4 mb-4">
                    <img
                        alt="Profile"
                        loading="lazy"
                        width="120"
                        height="120"
                        decoding="async"
                        data-nimg="1"
                        className="h-32 w-32 rounded-full"
                        src={userList.url}
                    />
                    <p className="text-sm font-semibold">{userList.name}</p>
                    <p className="text-sm">{userList.desc}</p>
                </div>
                <div
                    className={`flex gap-2 items-center px-2.5 rounded-lg h-14 p-2.5 mt-1.5`}
                >
                    <div className="h-9 w-9 rounded-full bg-emerald-700/5 flex items-center justify-center">
                        <PhoneCallIcon
                            strokeWidth={1.5}
                            className="min-h-5! h-5 min-w-5! w-5 opacity-85"
                        />
                    </div>
                    <div className="w-full">
                        <p className="text-nowrap flex justify-between text-sm mb-1 w-full">
                            <span className="text-xs opacity-70">
                                Mobile Phone
                            </span>
                            <CalendarIcon
                                strokeWidth={1.7}
                                className="min-h-4! h-4 min-w-4! w-4"
                            />
                        </p>
                        <span className="text-sm">303-570-0941</span>
                    </div>
                </div>
                <div
                    className={`flex gap-2 items-center px-2.5 rounded-lg h-14 p-2.5 mt-1.5 border-t border-blue-400/10 pt-4`}
                >
                    <div className="h-9 w-9 rounded-full bg-emerald-700/5 flex items-center justify-center">
                        <Phone
                            strokeWidth={1.5}
                            className="min-h-5! h-5 min-w-5! w-5 opacity-85"
                        />
                    </div>
                    <div className="w-full">
                        <p className="text-nowrap flex justify-between text-sm mb-1 w-full">
                            <span className="text-xs opacity-70">
                                Home Phone
                            </span>
                            <CalendarIcon
                                strokeWidth={1.7}
                                className="min-h-4! h-4 min-w-4! w-4"
                            />
                        </p>
                        <span className="text-sm">543-769-0002</span>
                    </div>
                </div>
                <div
                    className={`flex gap-2 items-center px-2.5 rounded-lg h-14 p-2.5 mt-1.5 border-t border-blue-400/10 pt-4`}
                >
                    <div className="h-9 w-9 rounded-full bg-emerald-700/5 flex items-center justify-center">
                        <Phone
                            strokeWidth={1.5}
                            className="min-h-5! h-5 min-w-5! w-5 opacity-85"
                        />
                    </div>
                    <div className="w-full">
                        <p className="text-nowrap flex justify-between text-sm mb-1 w-full">
                            <span className="text-xs opacity-70">
                                Email Address
                            </span>
                            <Mail
                                strokeWidth={1.7}
                                className="min-h-4! h-4 min-w-4! w-4"
                            />
                        </p>
                        <span className="text-sm">
                            andre-allison@allison.hn
                        </span>
                    </div>
                </div>
                <div
                    className={`flex gap-2 items-center px-2.5 rounded-lg h-14 p-2.5 mt-1.5 border-t border-blue-400/10 pt-4`}
                >
                    <div className="h-9 w-9 rounded-full bg-emerald-700/5 flex items-center justify-center">
                        <MessageCircle
                            strokeWidth={1.5}
                            className="min-h-5! h-5 min-w-5! w-5 opacity-85"
                        />
                    </div>
                    <div className="w-full">
                        <p className="text-nowrap flex justify-between text-sm mb-1 w-full">
                            <span className="text-xs opacity-70">Message</span>
                            <CalendarIcon
                                strokeWidth={1.7}
                                className="min-h-4! h-4 min-w-4! w-4"
                            />
                        </p>
                        <span className="text-sm">@andreallison</span>
                    </div>
                </div>
                <div
                    className={`flex gap-2 items-center px-2.5 rounded-lg h-14 p-2.5 mt-1.5 border-t border-blue-400/10 pt-4`}
                >
                    <div className="h-9 w-9 rounded-full bg-emerald-700/5 flex items-center justify-center">
                        <LocationEdit
                            strokeWidth={1.5}
                            className="min-h-5! h-5 min-w-5! w-5 opacity-85"
                        />
                    </div>
                    <div className="w-full">
                        <p className="text-nowrap flex justify-between text-sm mb-1 w-full">
                            <span className="text-xs opacity-70">Location</span>
                            <CalendarIcon
                                strokeWidth={1.7}
                                className="min-h-4! h-4 min-w-4! w-4"
                            />
                        </p>
                        <span className="text-sm">
                            866 Romrog Way, Curtis, 69025, Nebraska
                        </span>
                    </div>
                </div>
                <div
                    className={`flex gap-2 items-start px-2.5 rounded-lg h-fit p-2.5 mt-1.5 border-t border-blue-400/10 pt-4`}
                >
                    <div className="h-9 w-9 rounded-full bg-emerald-700/5 flex items-center justify-center">
                        <StickyNotePlusIcon
                            strokeWidth={1.5}
                            className="min-h-5! h-5 min-w-5! w-5 opacity-85"
                        />
                    </div>
                    <div className="w-full">
                        <p className="text-nowrap flex justify-between text-sm mb-1 w-full">
                            <span className="text-xs opacity-70">Notes</span>
                            <CalendarIcon
                                strokeWidth={1.7}
                                className="min-h-4! h-4 min-w-4! w-4"
                            />
                        </p>
                        <span className="text-sm">
                            Nulla vitae elit libero, a pharetra augue. Duis
                            mollis, est non commodo luctus, nisi erat porttitor
                            ligula, eget lacinia odio sem nec elit. Vestibulum
                            id ligula porta felis euismod semper. Nullam quis
                            risus eget urna mollis ornare vel eu leo. Cras justo
                            odio, dapibus ac facilisis in, egestas eget quam.
                            Donec id elit non mi porta gravida at eget metus.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
