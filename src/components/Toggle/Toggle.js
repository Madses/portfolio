import React, { useState } from "react";
import * as S from "./Toggle.styled";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

export default function Toggle() {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(prev => !prev);
    };

    return (
        <>
            <S.Toggle
                onClick={handleClick}
                active={active}
                image={active ? moon : sun}
            ></S.Toggle>
        </>
    );
}
