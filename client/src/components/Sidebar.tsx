// import userLogOut from "../auth/userLogOut";
// import { useNavigate } from "react-router-dom";

import React, {useState} from "react";
//TODO: Handle single collapse issue (maybe by using a separate Dropdown component), consider how to change content (NavLink, or state)

import {
    BsArrowLeftShort,
    BsSearch,
    BsChevronDown,
    BsListTask,
    BsBoxArrowRight,
    BsReverseLayoutTextWindowReverse,
    BsCollectionPlay,
    BsCalendar3,
    BsGear,
    BsBook,
    BsPersonFill,
    BsEnvelopeFill,
} from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import LogoImage from '../assets/images/small-logo.png';

type SidemenuSubitem = {
    label: string;
    path: string;
}
interface SidemenuItem {
    title: string;
    icon: React.ReactElement;
    path?: string,
    links?: SidemenuSubitem[];
    spacing?: true;
    event?(): void;
}

const Sidebar: React.FC = () => {
    const [isSidebarOpenned, setIsSidebarOpenned] = useState<boolean>(true);
    const [expandedSubmenuItem, setExpandedSubmenuItem] = useState<number | null>(null);

    //Logout feature
    // const navigate = useNavigate();
    // const { error, logOut } = userLogOut();

    // const handleLogOut = async () => {
    //     await logOut();
    //
    //     if (!error) {
    //         navigate("/");
    //     }
    // };

    const menu: SidemenuItem[] = [
        {
            title: "Dashboard",
            icon: <BsReverseLayoutTextWindowReverse />,
            path: "/dashboard",
        },
        {
            title: "Exercises",
            icon: <BsListTask />,
            links: [
                { label: "Grammar", path: "exercises/grammar" },
                { label: "Reading", path: "exercises/reading" },
                { label: "Vocabulary", path: "exercises/vocabulary" },
                { label: "Listening", path: "exercises/listening" },
            ],
            spacing: true,
        },
        {
            title: "Resources",
            icon: <BsCollectionPlay />,
            links: [
                { label: "Articles", path: "resources/articles" },
                { label: "Podcasts", path: "resources/podcasts" },
            ],
        },
        {
            title: "Your Vocabulary",
            icon: <BsBook />,
        },

        {
            title: "Tutoring",
            icon: <BsCalendar3 />,
            links: [
                { label: "Find a tutor", path: "tutors" },
                { label: "Order a class", path: "online-class" },
                { label: "How it works", path: "docs/classes" },
                { label: "Pricing", path: "docs/pricing" },
            ],
        },
        {
            title: "Inbox",
            icon: <BsEnvelopeFill />,
            path: "/inbox",
        },
        {
            title: "Profile",
            icon: <BsPersonFill />,
            path: "/profile",
            spacing: true,
        },
        {
            title: "Settings",
            icon: <BsGear />,
            path: "/settings",
        },
        {
            title: "Log out",
            icon: <BsBoxArrowRight />,
            path: "/",
            // event: handleLogOut,
        },
    ];

    const handleExpand = (index: number): void => {
        if (index === expandedSubmenuItem) setExpandedSubmenuItem(null);
        else {
            setExpandedSubmenuItem(index);
        }
    };
    const renderedMenu = menu.map((item, index) => {
        const isExpanded = expandedSubmenuItem === index;
        return (
            <React.Fragment key={index}>
                <li
                    key={index}
                    onClick={item.event || (() => handleExpand(index))}
                    className={`group text-indigo-200 dark:text-indigo-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-orange-500 hover:text-white dark:hover:text-white rounded-md mt-2 duration-300 ${
                        item.spacing ? "mt-9" : "mt-2"
                    }`}
                >
          <span className="text-2xl group-hover:text-white text-indigo-200 dark:text-indigo-900 block float-left">
            {item.icon ? item.icon : <MdDashboard />}
          </span>
                    <span
                        className={`text-base font-medium flex-1 ${
                            !isSidebarOpenned && "hidden"
                        }`}
                    >
            {item.title}
          </span>
                    {item.links && isSidebarOpenned && (
                        <BsChevronDown className={`${isExpanded && "rotate-180"}`} />
                    )}
                </li>
                {item.links && isExpanded && isSidebarOpenned && (
                    <ul>
                        {item.links.map((item, index) => (
                            <li
                                key={index}
                                className="text-orange-500 hover:text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-indigo-900 rounded-md mt-2 duration-300"
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                )}
            </React.Fragment>
        );
    });

    return (
        <aside
            className={`bg-stone-900 dark:bg-indigo-100 h-screen p-5 pt-8 ${
                isSidebarOpenned ? "w-72" : "w-20"
            } relative duration-300 shadow`}
        >
            <BsArrowLeftShort
                className={`bg-indigo-100  text-stone-800 text-3xl rounded-full absolute -right-3 top-9 border border-indigo-200 cursor-pointer ${
                    !isSidebarOpenned && "rotate-180"
                }`}
                onClick={() => setIsSidebarOpenned(!isSidebarOpenned)}
            />
            <div className="inline-flex items-center">
                <img
                    src={LogoImage}
                    alt='easy-peasy logo'
                    className={`w-10 cursor-pointer block float-left mr-1 duration-1000 ${
                        isSidebarOpenned && "rotate-[360deg]"
                    }`}
                />
                <span
                    className={`font-mono text-indigo-100 dark:text-indigo-900 drop-shadow origin-left font-medium text-2xl duration-300 ${
                        !isSidebarOpenned && "scale-0"
                    }`}
                >
                    EASY-PEASY
                </span>
            </div>
            <div
                className={`flex items-center rounded-md bg-indigo-500 mt-6 px-4 ${
                    !isSidebarOpenned ? "px-2.5" : "px-4"
                } p-2`}
            >
                <BsSearch
                    className={`text-indigo-100 text-lg block float-left cursor-pointer ${
                        isSidebarOpenned && "mr-2"
                    }`}
                />
                <input
                    type={"search"}
                    className={`text-base bg-transparent w-full text-white focus:outline-none ${
                        !isSidebarOpenned && "hidden"
                    }`}
                />
            </div>
            <ul className="pt-2">{renderedMenu}</ul>
        </aside>
    );
}

export default Sidebar;