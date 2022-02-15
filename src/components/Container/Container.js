import React from "react";
import * as S from "./Container.styled";

import Menu from "../Menu";
import Header from "../Header";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Social from "../../pages/Social";
import Learning from "../../pages/Learning";

export default function Container() {
    return (
        <>
            <S.Container>
                <Menu />
                <Header />
                <Home />
                <Profile />
                <Learning />
                <Social />
            </S.Container>
        </>
    );
}
