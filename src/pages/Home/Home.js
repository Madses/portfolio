import React from "react";
import * as S from "./Home.styled";
import { ButtonPrimary } from "../../components/Buttons";
import memoji from "../../assets/memoji-computer.png";

export default function Home() {
    return (
        <S.Container id="home">
            <S.Content>
                <S.TextArea>
                    <h1>Hi, I'm Kevin.</h1>
                    <h2>I build things for the web</h2>
                    <p>
                        I am a Frontend (React) developer from the Netherlands.
                    </p>
                    <ButtonPrimary to="about" smooth={true} duration="500">
                        More about me
                    </ButtonPrimary>
                </S.TextArea>
                <S.Image src={memoji} />
            </S.Content>
        </S.Container>
    );
}
