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
    padding: 60px;
    padding-left: 0;
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
export const Form = styled.form`
    width: 900px;
    height: 500px;
    background: ${props => props.theme.panel};
    border-radius: 20px;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    box-shadow: 0px 0px 2px rgb(0 0 0 / 20%);

    input {
        width: 250px;
        height: 40px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    select {
        width: 250px;
        height: 40px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    label {
        color: ${props => props.theme.text};
        font-size: 16px;
        font-weight: bold;
    }

    div {
        width: 500px;
        display: flex;
        justify-content: space-between;
    }
`;
