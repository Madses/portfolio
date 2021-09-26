import React from "react";
import * as S from "./Container.styled";
import { useThemeStore } from "../../store";

import Menu from "../Menu";
import CustomSelect from "../CustomSelect/CustomSelect";
import Header from "../Header";

export default function Container() {
    const { setTheme } = useThemeStore();
    const themeOptions = [
        { value: "system", label: "System settings" },
        { value: "light", label: "Light mode" },
        { value: "dark", label: "Dark mode" },
    ];

    const callBack = option => {
        setTheme(option.value);
    };

    return (
        <>
            <S.Container>
                <Menu />
                <Header>
                    <CustomSelect options={themeOptions} callBack={callBack} />
                </Header>
            </S.Container>
        </>
    );
}
