import styled from "styled-components";

export const Container = styled.div`
    overflow: hidden;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .loader {
        width: 68px;
        height: 68px;
        border: 5px solid var(--dark);
        border-bottom-color: transparent;
        border-radius: 50%;
        position: absolute;
        
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
`;