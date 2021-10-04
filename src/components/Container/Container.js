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

                <S.Section id="section1"></S.Section>
                <S.Section id="section2"></S.Section>
            </S.Container>
        </>
    );
}
