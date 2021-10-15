import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Content = styled.div`
    width: 70%;
    max-width: 1800px;
    min-height: 600px;
    display: flex;
    justify-content: center;
    border-radius: 15px;
    flex-wrap: wrap;
`;

export const TextArea = styled.div`
    width: 700px;
    height: 100%;
    padding: 100px;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.text};

    h1 {
        font-size: 80px;
        font-weight: bold;
        margin: 0;
    }

    h2 {
        font-size: 40px;
        font-weight: bold;
        padding-top: 20px;
        color: ${props => props.theme.subHeader};
    }

    p {
        padding-top: 15px;
    }

    a {
        margin-top: 60px;
    }
`;

export const Image = styled.div`
    width: 400px;
    height: 400px;
    text-align: center;
    background: url(${props => props.src});
    background-repeat: no-repeat;
`;
