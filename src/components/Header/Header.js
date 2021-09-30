import React from "react";
import * as S from "./Header.styled";
import { useThemeStore } from "../../store";
import Toggle from "../Toggle";

export default function Header() {
    const { setTheme } = useThemeStore();

    return (
        <S.Header>
            {/* <span>Site colors:</span> */}
            <Toggle />
        </S.Header>
    );
}
