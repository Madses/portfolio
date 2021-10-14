import React from "react";
import * as S from "./Container.styled";

import Menu from "../Menu";
import Header from "../Header";
import Home from "../../pages/Home";

export default function Container() {
    return (
        <>
            <S.Container>
                <Menu />
                <Header />
                <S.Section id="home">
                    <Home />
                </S.Section>
                <S.Section id="about"></S.Section>
            </S.Container>
        </>
    );
}
