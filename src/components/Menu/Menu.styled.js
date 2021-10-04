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
`;

export const MenuItem = styled(Link)``;
