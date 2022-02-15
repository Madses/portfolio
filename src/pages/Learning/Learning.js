import React from "react";
import * as S from "./Home.styled";

export default function Learning() {
    return (
        <S.Container id="learning">
            <S.Content>
                <S.TextArea>
                    <h1>Self education</h1>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/IaSpas9hWNQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>

                    <h2>Helpful links</h2>
                    <a href="https://www.kff.org/coronavirus-covid-19/issue-brief/the-implications-of-covid-19-for-mental-health-and-substance-use/">
                        The Implications of COVID-19 for Mental Health and
                        Substance Use
                    </a>
                    <a href="https://reliefweb.int/report/world/children-risk-lasting-psychological-distress-coronavirus-lockdown-save-children">
                        Children at risk of lasting psychological distress from
                        coronavirus lockdown’: Save the Children
                    </a>
                    <a href="https://www.margahogenhuis.nl/post/waiting-lists-in-health-care-are-enormous-now-what?lang=en">
                        Waiting lists in health care are enormous, now what?
                    </a>
                    <a href="https://www.margahogenhuis.nl/post/waiting-lists-in-health-care-are-enormous-now-what?lang=en">
                        Waiting lists in health care are enormous, now what?
                    </a>
                </S.TextArea>
            </S.Content>
        </S.Container>
    );
}
