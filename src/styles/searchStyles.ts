import styled from "styled-components";


export const Input = styled.div`
    position: relative;
    top: 120px;
    width: 90%;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    align-items: center;

    input {
        outline: none;
        padding: 10px;
        border: none;
        border: 1px solid var(--grey);
        background-color: transparent;
        width: 100%;
        font-size: 14px;
        font-family: 'Poppins', sans-serif;
        border-radius: 5px;
        color: var(--grey);
    }

    .icon {
        position: absolute;
        height: 43px;
        width: 43px;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0px;
        border-left: 1px solid var(--grey);
        transition: 0.3s all;

        svg {
            color: var(--grey);
            width: 22px;
            height: 22px;
        }
    }

    input::placeholder {
        color: var(--grey);
    }
`;