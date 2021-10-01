import React, { useState } from "react";
import * as S from "./Toggle.styled";

export default function Toggle({ icons, handler }) {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(prev => !prev);
    };

    return (
        <>
            <S.Toggle
                onClick={handleClick}
                active={active}
                image={active ? icons.active : icons.inactive}
            ></S.Toggle>
        </>
    );
}
