import styled from "styled-components";

export const Bar = styled.div`
    background-color: var(--dark);
    width: 350px;
    height: 100%;
    position: fixed;
    right: 0;
    top: 80px;
    z-index: 999;
    animation: favoritesAnimationOut forwards 0.6s ease;

    &.active {
        animation: favoritesAnimationIn 0.6s ease;
    }
`;