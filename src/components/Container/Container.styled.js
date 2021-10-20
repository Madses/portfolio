import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    transition: 0.4s;
    background-color: ${props => props.theme.body};
`;
