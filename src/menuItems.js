import {
    FaHome,
    FaUser,
    FaPhoneSquareAlt,
    FaRegLightbulb,
    FaUserFriends,
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
        title: "Social area",
        sectionId: "social",
        icon: <FaUserFriends />,
    },

    {
        title: "Learning",
        sectionId: "learning",
        icon: <FaRegLightbulb />,
    },
];
