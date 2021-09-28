import React, { useEffect , useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import * as S from "./Header.styled";
import { useThemeStore } from "../../store";

export default function Header() {
    const { setTheme } = useThemeStore();
    const [defaultOption,setDefaultOption] = useState(null);

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
        setDefaultOption(themeOptions.find(option => option.value === savedTheme));

        if (savedTheme && savedTheme !== 'system') {
            setTheme(savedTheme);
        }
    }, [setTheme]);

    return (
        <S.Header>
            <span>Site colors:</span>
            <div>
                <CustomSelect
                    options={themeOptions}
                    defaultValue={defaultOption}
                    callBack={handleThemeChange}
                />
            </div>
        </S.Header>
    );
}
