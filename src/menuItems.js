import {
    FaHome,
    FaUser,
    FaPhoneSquareAlt,
    FaRegLightbulb,
} from "react-icons/fa";

export const menuItems = [
    {
        title: "Home",
        sectionId: "home",
        icon: <FaHome />,
    },

    {
        title: "Profile",
        sectionId: "profile",
        icon: <FaUser />,
    },

    {
        title: "Learning",
        sectionId: "work",
        icon: <FaRegLightbulb />,
    },

    {
        title: "Contact us",
        sectionId: "contact",
        icon: <FaPhoneSquareAlt />,
    },
];
