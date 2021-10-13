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
    width: 80px;
    height: 600px;
    background: ${props => props.theme.panel};
    border-radius: 20px;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    box-shadow: 0px 0px 2px rgb(0 0 0 / 20%);
`;

export const MenuItem = styled(Link)`
    width: 80px;
    text-align: center;
    color: ${props => props.theme.text};
    font-size: 1.1rem;
    cursor: pointer;
    position: relative;
    margin-bottom: 40px;
    transition: 0.2s;

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
    padding-bottom: 5px;
    > svg {
        font-size: 2.5rem;
    }
`;
