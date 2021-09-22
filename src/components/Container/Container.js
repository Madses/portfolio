import React from "react";
import * as S from "./Container.styled";
import Menu from "../Menu";

export default function Container() {
    return (
        <>
            <S.Container>
                <Menu />
            </S.Container>
        </>
    );
}
