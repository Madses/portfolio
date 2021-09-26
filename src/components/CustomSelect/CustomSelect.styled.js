import styled from "styled-components";

export const DropDown = styled.div`
    min-height: 50px;
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: beige;
    right: 10px;
    margin-top: -10px;
`;

export const Option = styled.button`
    min-width: 100px;
    height: 30px;
    background: ${props => (props.active ? "red" : null)};
`;

export const CurrentSelected = styled.button`
    width: 100%;
    text-align: left;
    > svg {
        height: 10px;
    }
`;
