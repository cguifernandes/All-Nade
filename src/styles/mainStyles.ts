import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-items: center;
    margin: 80px 0px;
    margin-top: 160px;
    gap: 50px 0px;

    @media (max-width: 1670px) {
        grid-template-columns: auto auto auto;
    }

    @media (max-width: 1260px) {
        grid-template-columns: auto auto;
    }

    @media (max-width: 800px) {
        grid-template-columns: auto;
    }
`;

export const Card = styled.div `
    box-shadow: rgba(0, 0, 0, 1) 0px 10px 20px;
    background-color: var(--dark);
    width: 400px;
    height: auto;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    position: relative;

    &:hover {
        img {
            scale: 0.95;
        }
    }

    @media (max-width: 800px) {
        width: 85% !important;
    }

    @media (max-width: 650px) {
        width: 85%;
    }

    @media (max-width: 1260px) {
        width: 90%;
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    height: 38px;
    padding: 10px;
    border-radius: 50%;
    transition: 0.4s ease-in-out;

    &:hover {
        background-color: var(--dark-grey);

        .icon {
            color: #FFD700;
        }
    }
    
    .icon {
        color: var(--grey);
        font-size: 18px;
    }
`;

export const Text = styled.div`
    padding-bottom: 10px;

    h3 {
        color: var(--grey);
        text-align: center;
        padding: 10px 0px;
    }

    p {
        word-wrap: break-word;
        color: var(--grey);
        text-align: center;
        padding: 0px 10px;
    }

    .vote {
        color: var(--grey);
        padding: 0;
    }
`;

export const Img = styled.div`
    padding-top: 25px;

    img {
        display: block;
        transition: 0.4s ease;
        margin: 10px auto;
        border-radius: 10px;
        transition: 0.4s ease;
        width: 300px;
    }

    @media (max-width: 520px) {
        img {
            width: 220px;
        }
    }
`;