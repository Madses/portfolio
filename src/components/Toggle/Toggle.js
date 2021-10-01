import React, { useState, useEffect } from "react";
import * as S from "./Toggle.styled";

export default function Toggle({ icons, handler, defaultState }) {
    const [active, setActive] = useState(defaultState);

    const handleClick = () => {
        setActive(prev => !prev);
    };

    useEffect(() => {
        handler(active);
    }, [active, handler]);

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
