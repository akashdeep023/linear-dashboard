import {BellRing, CheckCircle2, Moon, Search, Sun} from "lucide-react";
import {useEffect, useState} from "react";

const Rightside = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light",
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <div className="ml-14 w-14 absolute top-14 right-0 p-2 *:mb-2">
            <div className="dark:hover:bg-blue-400/20 hover:bg-white/30 w-10 h-10 cursor-pointer hover:shadow flex items-center justify-center rounded-xl transition-all duration-300">
                <img
                    alt="Lnaguage"
                    loading="lazy"
                    className="h-6 w-6 rounded-full"
                    src="https://linear-next.avidtemplates.com/img/flags/england.svg"
                ></img>
            </div>
            <div className="dark:hover:bg-blue-400/20 hover:bg-white/30 w-10 h-10 cursor-pointer hover:shadow flex items-center justify-center rounded-xl transition-all duration-300">
                <Search
                    strokeWidth={1.7}
                    className="min-h-5! h-5 min-w-5! w-5"
                />
            </div>
            <div className="dark:hover:bg-blue-400/20 hover:bg-white/30 w-10 h-10 cursor-pointer hover:shadow flex items-center justify-center rounded-xl transition-all duration-300">
                <BellRing
                    strokeWidth={1.7}
                    className="min-h-5! h-5 min-w-5! w-5"
                />
            </div>
            <div className="dark:hover:bg-blue-400/20 hover:bg-white/30 w-10 h-10 cursor-pointer hover:shadow flex items-center justify-center rounded-xl transition-all duration-300">
                <CheckCircle2
                    strokeWidth={1.7}
                    className="min-h-5! h-5 min-w-5! w-5"
                />
            </div>
            <div
                onClick={toggleTheme}
                className="dark:hover:bg-blue-400/20 hover:bg-white/30 w-10 active:*:scale-75 h-10 active:*:animate-spin cursor-pointer hover:shadow flex items-center justify-center rounded-xl transition-all duration-300"
            >
                {theme === "dark" ? (
                    <Sun
                        strokeWidth={1.7}
                        className="min-h-5! h-5 min-w-5! w-5"
                    />
                ) : (
                    <Moon
                        strokeWidth={1.7}
                        className="min-h-5! h-5 min-w-5! w-5"
                    />
                )}
            </div>
        </div>
    );
};

export default Rightside;
