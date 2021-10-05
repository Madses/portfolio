import styled from "styled-components";
import { Link } from "react-scroll";

export const MenuContainer = styled.div`
    width: 100px;
    height: 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 10;
`;

export const Menu = styled.div`
    width: 70px;
    height: 900px;
    background: #181818;
    border-radius: 20px;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
`;

export const MenuItem = styled(Link)`
    width: 70px;
    text-align: center;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    position: relative;
    margin-bottom: 20px;

    &.active {
        color: #03bbbbf0;
        &::after {
            content: "";
            position: absolute;
            height: 100%;
            width: 5px;
            left: 0;
            top: 0;
            background-color: #03bbbbf0;
        }
    }
`;

export const IconHolder = styled.div`
    text-align: center;
    > svg {
        font-size: 2.5rem;
    }
`;
