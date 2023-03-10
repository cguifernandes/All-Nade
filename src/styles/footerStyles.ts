import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--dark);
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 40px;
    width: 100%;

    @media (max-width: 550px) {
        flex-direction: column;
        height: 120px;
    }
`;

export const Text = styled.div`
    p {
        color: rgba(235, 235, 235, 0.7);
    }

    a {
        transition: 0.4s ease;
    }

    a:hover {
        color: var(--grey);
    }

    @media (max-width: 550px) {
        padding-bottom: 20px;
    }
`;

export const Sociais = styled.div`
    display: flex;

    .icon {
        color: rgba(235, 235, 235, 0.7);
        width: 28px;
        height: 28px;
        cursor: pointer;
        transition: 0.4s ease;
    }

    a {
        display: inline-block;
        width: 28px;
        height: 28px;
    }

    .hover {
        padding: 10px;
        border-radius: 50%;
        height: 48px;
        transition: 0.4s ease;
    }

    .hover:hover {
        background-color: var(--dark-grey);
    }

    @media (max-width: 550px) {
        padding-top: 20px;
    }
   
`;