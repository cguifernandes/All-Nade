import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-items: center;
    margin: 80px 0px;
    margin-top: 140px;
    gap: 50px 0px;

    @media (max-width: 1580px) {
        grid-template-columns: auto auto auto;
    }

    @media (max-width: 1190px) {
        grid-template-columns: auto auto;
    }

    @media (max-width: 800px) {
        grid-template-columns: auto;
    }
`;

export const Card = styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 15px 25px;
    background-color: var(--dark);
    width: 380px;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        img {
            scale: 0.95;
        }
    }

    @media (max-width: 800px) {
        width: 65%;
    }

    @media (max-width: 650px) {
        width: 85%;
    }
`;

export const Text = styled.div`
    p {
        word-wrap: break-word;
        color: var(--grey);
        text-align: center;
    }

    .vote {
        color: var(--grey);
    }
`;

export const Img = styled.div`
    position: relative;

    img {
        display: block;
        transition: 0.4s ease;
        margin: 10px auto;
        border-radius: 10px;
        transition: 0.4s ease;
    }

    h3 {
        color: var(--grey);
        text-align: center;
    }

    @media (max-width: 520px) {
        img {
            width: 220px;
        }
    }
`;