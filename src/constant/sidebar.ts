import {
    Calendar,
    ChartPie,
    CheckCircle,
    CircleUserRoundIcon,
    ContactIcon,
    EarthIcon,
    Folder,
    Layout,
    LayoutGrid,
    LucideFileChartColumn,
    LucideLayoutList,
    Mail,
    MailsIcon,
    MessageCircle,
    ShoppingBag,
    Type,
    UserSquareIcon,
} from "lucide-react";

export const DashboardItems = {
    label: "Dashboard",
    items: [
        {
            label: "E-Commerce",
            icon: ShoppingBag,
            href: "/#",
        },
        {
            label: "CRM",
            icon: UserSquareIcon,
            href: "/#",
        },
        {
            label: "Analytics",
            icon: EarthIcon,
            href: "/#",
        },
        {
            label: "Project Management",
            icon: LucideLayoutList,
            href: "/#",
        },
        {
            label: "Email Marketing",
            icon: MailsIcon,
            href: "/#",
        },
    ],
};

export const ApplicationItems = {
    label: "Application",
    items: [
        {
            label: "User",
            icon: CircleUserRoundIcon,
            items: [
                {
                    label: "Profile",
                    href: "/#",
                },
                {
                    label: "Timeline",
                    href: "/#",
                },
                {
                    label: "Connection",
                    href: "/#",
                },
            ],
        },
        {
            label: "File Manager",
            icon: Folder,
            href: "/#",
        },
        {
            label: "Contacts",
            icon: ContactIcon,
            href: "/#",
        },
        {
            label: "Mail",
            icon: Mail,
            href: "/#",
        },
        {
            label: "Messages",
            icon: MessageCircle,
            href: "/#",
        },
        {
            label: "Todo List",
            icon: CheckCircle,
            href: "/#",
        },
        {
            label: "Calendar",
            icon: Calendar,
            href: "/#",
        },
    ],
};

export const MiscellaneouItems = {
    label: "Miscellaneous",
    items: [
        {
            label: "Sample Pages",
            icon: Layout,
            items: [
                {
                    label: "Invoice",
                    href: "/#",
                },
                {
                    label: "Pricing Table",
                    href: "/#",
                },
                {
                    label: "Search Results",
                    href: "/#",
                },
                {
                    label: "FAQ",
                    href: "/#",
                },
                {
                    label: "Teams",
                    href: "/#",
                },
                {
                    label: "Login",
                    href: "/#",
                },
                {
                    label: "Register",
                    href: "/#",
                },
                {
                    label: "Forgot Password",
                    href: "/#",
                },
                {
                    label: "Coming Soon",
                    href: "/#",
                },
                {
                    label: "Error",
                    href: "/#",
                },
            ],
        },
        {
            label: "Content",
            icon: Type,
            items: [
                {
                    label: "Typography",
                    href: "/#",
                },
                {
                    label: "Icons",
                    href: "/#",
                },
                {
                    label: "Tables",
                    href: "/#",
                },
            ],
        },
        {
            label: "Forms",
            icon: LucideFileChartColumn,
            href: "/#",
        },
        {
            label: "Components",
            icon: LayoutGrid,
            href: "/#",
        },
        {
            label: "Charts",
            icon: ChartPie,
            href: "/#",
        },
    ],
};
