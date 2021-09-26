import React from "react";
import * as S from "./Header.styled";

export default function Header({ children }) {
    return (
        <S.Header>
            <div>{children}</div>
        </S.Header>
    );
}
