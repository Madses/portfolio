import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    transition: 0.4s;
`;

export const Section = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.body};
    transition: 0.2s;
`;
