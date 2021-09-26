import styled from "styled-components";

export const DropDown = styled.div`
    width: 100px;
    min-height: 50px;

    display: flex;
    flex-direction: column;

    > button {
        width: 100%;
        height: 50px;
        border: 1px solid black;
    }
`;

export const CurrentSelected = styled.button`
    border-bottom: 1px solid black;
    width: 100px;
`;
