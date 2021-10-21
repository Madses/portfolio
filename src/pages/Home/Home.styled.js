import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 70%;
    max-width: 1800px;
    min-height: 600px;
    display: flex;
    justify-content: center;
    gap: 10px;
    border-radius: 15px;
    flex-wrap: wrap;
    overflow: hidden;
`;

export const TextArea = styled.div`
    width: 700px;
    padding: 100px;
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

export const Image = styled.img`
    height: 400px;
    min-width: 400px;
`;
