import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-items: center;
    margin: 80px 0px;
    gap: 50px 0px;

    @media (max-width: 1460px) {
        grid-template-columns: auto auto auto;
    }

    @media (max-width: 1100px) {
        grid-template-columns: auto auto;
    }

    @media (max-width: 740px) {
        grid-template-columns: auto;
    }
`;

export const Card = styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: var(--dark);
    width: 350px;
    padding: 15px;
    border-radius: 10px;

    &:hover {
        img {
            scale: 0.95;
        }
    }

    @media (max-width: 740px) {
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
    img {
        display: block;
        transition: 0.4s all;
        margin: 10px auto;
        border-radius: 10px;
    }

    h3 {
        color: var(--grey);
        text-align: center;
    }

    @media (max-width: 415px) {
        img {
            width: 220px;
        }
    }
`;