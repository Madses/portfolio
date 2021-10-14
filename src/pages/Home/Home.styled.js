import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 20px;
    color: ${props => props.theme.text};
    border-radius: 15px;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 200px;
    padding-left: 50px;
`;

export const TextArea = styled.div`
    width: 700px;
    height: 100%;
    padding: 100px;
    display: flex;
    flex-direction: column;

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

export const ImageContainer = styled.div`
    width: 400px;
    height: 400px;
    text-align: center;
    background: url(${props => props.src});
    background-repeat: no-repeat;
`;
