import styled from "styled-components";

export const Toggle = styled.button`
    width: 60px;
    height: 30px;
    transition: 0.2s;
    border-radius: 15px;
    background: ${props => (props.active ? "#0d1117" : "#85afff")};
    position: relative;

    &::after {
        content: "";
        font-size: 1.5rem;
        position: absolute;
        height: 25px;
        width: 25px;
        left: 5px;
        top: 2px;
        line-height: 25px;
        border-radius: 50%;
        background-image: url(${props => props.image});
        background-size: 25px 25px;
        transition: 0.2s;
        transform: translateX(${props => (props.active ? "25px" : "0px")});
    }
`;
