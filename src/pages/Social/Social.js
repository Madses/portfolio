import React from "react";
import * as S from "./About.styled";

import Chat from "../../components/Chat/Chat";

export default function Social() {
    const savedName = localStorage.getItem("name");
    const savedAge = localStorage.getItem("age");
    const savedReason = localStorage.getItem("reason");
    const savedActivity = localStorage.getItem("activity");

    return (
        <S.Container id="social">
            {savedName &&
            savedReason &&
            savedActivity &&
            savedName &&
            savedAge ? (
                <>
                    <S.TextArea>
                        {savedActivity === "Workout together" && (
                            <>
                                <h1>Daily workout</h1>
                                <iframe
                                    width="700"
                                    height="515"
                                    src="https://www.youtube.com/embed/ml6cT4AZdqI"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </>
                        )}

                        {savedActivity === "Watch videos and chat" && (
                            <>
                                <iframe
                                    width="700"
                                    height="515"
                                    src="https://www.youtube.com/embed/ErqiOWoduaA"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </>
                        )}
                    </S.TextArea>
                    <Chat
                        savedActivity={savedActivity}
                        savedAge={savedAge}
                        savedName={savedName}
                    />
                </>
            ) : (
                <S.TextArea>
                    <h1>Please make a profile before visiting this page</h1>
                </S.TextArea>
            )}
        </S.Container>
    );
}
