import React from "react";
import * as S from "./Buttons.styled";

export default function ButtonPrimary({ children, ...props }) {
    return <S.ButtonPrimary {...props}>{children}</S.ButtonPrimary>;
}
