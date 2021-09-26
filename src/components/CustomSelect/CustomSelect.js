import React, { useState, useRef } from "react";
import useOnClickOutside from "../../hooks";

import * as S from "./CustomSelect.styled";

export default function CustomSelect({
    options,
    defaultValue = null,
    callBack,
}) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showDropDown, setShowDropDown] = useState(false);

    const dropDownRef = useRef(null);
    useOnClickOutside(dropDownRef, () => setShowDropDown(false));

    const handleSelection = option => {
        if (callBack) {
            callBack(option);
        }
        setSelectedOption(option);
        setShowDropDown(false);
    };

    return (
        <>
            <S.CurrentSelected onClick={() => setShowDropDown(prev => !prev)}>
                {selectedOption?.label ||
                    defaultValue?.label ||
                    options[0]?.label}
            </S.CurrentSelected>

            {showDropDown && (
                <S.DropDown ref={dropDownRef}>
                    {options.map((option, index) => (
                        <button
                            onClick={() => handleSelection(option)}
                            key={index}
                        >
                            {option.label}
                        </button>
                    ))}
                </S.DropDown>
            )}
        </>
    );
}
