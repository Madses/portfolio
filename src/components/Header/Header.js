import React, { useEffect } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import * as S from "./Header.styled";
import { useThemeStore } from "../../store";

export default function Header() {
    const { setTheme } = useThemeStore();

    const themeOptions = [
        { value: "light", label: "Light" },
        { value: "dark", label: "Dark" },
        { value: "system", label: "System" },
    ];

    const handleThemeChange = option => {
        setTheme(option.value);
        localStorage.setItem("theme", option.value);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, [setTheme]);

    return (
        <S.Header>
            <span>Site colors:</span>
            <div>
                <CustomSelect
                    options={themeOptions}
                    defaultValue={
                        localStorage.getItem("theme")
                            ? themeOptions.find(
                                  option =>
                                      option.value ===
                                      localStorage.getItem("theme")
                              )
                            : null
                    }
                    callBack={handleThemeChange}
                />
            </div>
        </S.Header>
    );
}
