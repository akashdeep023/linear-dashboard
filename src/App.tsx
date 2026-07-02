import {useEffect} from "react";
import InboxBox from "./components/InboxBox";
import InboxDetais from "./components/InboxDetais";
import Layout from "./components/Layout";
import MailCat from "./components/MailCat";

function App() {
    useEffect(() => {
        const theme = localStorage.getItem("theme");

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }
    }, []);
    return (
        <Layout>
            <MailCat />
            <InboxBox />
            <InboxDetais />
        </Layout>
    );
}

export default App;
