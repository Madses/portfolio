import React from "react";
import * as S from "./Home.styled";
import { ButtonPrimary } from "../../components/Buttons";

export default function Home() {
    return (
        <S.Container id="home">
            <S.Content>
                <S.TextArea>
                    <h1>Hi, Welcome to friendsready</h1>
                    <h2>
                        A place to meet friends battling mental health problems
                    </h2>
                    <p>Click on the button down below to create a profile.</p>
                    <ButtonPrimary to="profile" smooth={true} duration="500">
                        Start now!
                    </ButtonPrimary>
                </S.TextArea>
                <S.Image
                    src={
                        "https://www.pngall.com/wp-content/uploads/2/Friend-PNG-Image-HD.png"
                    }
                    alt=""
                />
            </S.Content>
        </S.Container>
    );
}
