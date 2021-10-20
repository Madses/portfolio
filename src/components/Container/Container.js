import React from "react";
import * as S from "./Container.styled";

import Menu from "../Menu";
import Header from "../Header";
import Home from "../../pages/Home";
import About from "../../pages/About";

export default function Container() {
    return (
        <>
            <S.Container>
                <Menu />
                <Header />
                <Home />
                <About />
            </S.Container>
        </>
    );
}
