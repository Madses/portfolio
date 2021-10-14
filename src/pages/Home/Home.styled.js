import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    color: ${props => props.theme.text};
    /* background: ${props => props.theme.panel}; */
    border-radius: 15px;
    /* box-shadow: 0px 0px 2px rgb(0 0 0 / 20%); */
`;

export const TextArea = styled.div`
    width: 50%;
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

    button {
        margin-top: 60px;
    }
`;

export const ImageContainer = styled.div`
    width: 50%;
    height: 100%;
    img {
        height: 600px;
        width: auto;
    }
`;
