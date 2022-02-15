import React, { useState, useEffect } from "react";
import * as S from "./About.styled";
import { ButtonPrimary } from "../../components/Buttons";

export default function Profile() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [reason, setReason] = useState("Private");
    const [activity, setActivity] = useState("Just chat");

    useEffect(() => {
        const savedName = localStorage.getItem("name");
        const savedAge = localStorage.getItem("age");
        const savedReason = localStorage.getItem("reason");
        const savedActivity = localStorage.getItem("activity");

        if (savedName && savedAge && savedReason && savedActivity) {
            setName(savedName);
            setAge(savedAge);
            setReason(savedReason);
            setActivity(savedActivity);
        }
    }, []);
    const handleSubmit = e => {
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);
        localStorage.setItem("reason", reason);
        localStorage.setItem("activity", activity);
    };

    return (
        <S.Container id="profile">
            <S.TextArea>
                <h1>Create your profile</h1>
            </S.TextArea>
            <S.Form onSubmit={handleSubmit}>
                <div>
                    <label for="name">Your name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        required
                    ></input>
                </div>
                <div>
                    <label for="age">Your age</label>
                    <input
                        type="number"
                        name="age"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        required
                    ></input>
                </div>

                <div>
                    <label for="reason">Reason for your visit</label>
                    <select
                        name="reason"
                        onInput={e => setReason(e.target.value)}
                        required
                        value={reason}
                    >
                        <option>Private</option>
                        <option>Depressed</option>
                        <option>Lonely</option>
                        <option>Other</option>
                    </select>
                </div>

                <div>
                    <label for="activity">Choose an activity</label>
                    <select
                        name="activity"
                        onChange={e => setActivity(e.target.value)}
                        required
                        value={activity}
                    >
                        <option>Just chat</option>
                        <option>Workout together</option>
                        <option>Watch videos and chat</option>
                    </select>
                </div>

                <div style={{ marginTop: "40px" }}>
                    <button
                        type="submit"
                        style={{
                            width: "200px",
                            height: "50px",
                            lineHeight: "50px",
                            textAlign: "center",
                            background: "#03bbbbf0",
                            color: "white",
                            borderRadius: "50px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            position: " absolute",
                        }}
                    >
                        Save profile
                    </button>
                </div>

                {/* <div style={{ marginTop: "40px" }}>
                    <ButtonPrimary to="social" smooth={true} duration="500">
                        Find match!
                    </ButtonPrimary>
                </div> */}
            </S.Form>
        </S.Container>
    );
}
