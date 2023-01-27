import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-items: center;
    margin: 80px 0px;
    gap: 50px 0px;
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
`;

export const Text = styled.div`
    p {
        word-wrap: break-word;
        color: var(--grey);
        text-align: center;
    }

    .vote {
        color: var(--grey);
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            margin: 0px 2px;
        }
    }
`;

export const Img = styled.div`
    img {
        display: block;
        transition: 0.4s all;
        margin: 10px auto;
    }

    h3 {
        color: var(--grey);
        text-align: center;
    }
`;