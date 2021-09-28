import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    transition: 0.4s;
    background-color: ${props => props.theme.body};
`;
