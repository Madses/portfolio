import React from "react";
import * as S from "./Header.styled";
import { useThemeStore } from "../../store";
import Toggle from "../Toggle";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

export default function Header() {
    const { setTheme } = useThemeStore();
    const icons = { active: moon, inactive: sun };
    return (
        <S.Header>
            <Toggle icons={icons} handler={() => console.log("state")} />
        </S.Header>
    );
}
