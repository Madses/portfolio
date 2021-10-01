import React, { useCallback } from "react";
import * as S from "./Header.styled";
import { useThemeStore } from "../../store";
import Toggle from "../Toggle";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

export default function Header() {
    const { setTheme } = useThemeStore();
    const icons = { active: moon, inactive: sun };

    const toggleHandler = useCallback(
        active => {
            const options = {
                false: "light",
                true: "dark",
            };
            setTheme(options[active]);
        },
        [setTheme]
    );

    const prefersDarkMode = () => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches)
            return true;
        return false;
    };

    return (
        <S.Header>
            <Toggle
                icons={icons}
                handler={toggleHandler}
                defaultState={prefersDarkMode()}
            />
        </S.Header>
    );
}
