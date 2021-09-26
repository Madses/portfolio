import React from "react";
import * as S from "./Container.styled";

import Menu from "../Menu";
import Header from "../Header";

export default function Container() {
    return (
        <>
            <S.Container>
                <Menu />
                <Header />
            </S.Container>
        </>
    );
}
