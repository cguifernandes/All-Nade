import styled from "styled-components";

export const Bar = styled.div`
    background-color: var(--dark);
    width: 350px;
    height: 91.7%;
    position: fixed;
    right: 0;
    top: 80px;
    z-index: 999;
    animation: favoritesAnimationOut forwards 0.6s ease;
    overflow-y: auto;

    &.active {
        animation: favoritesAnimationIn 0.6s ease;
    }
`;

export const Container = styled.div`
    p {
        color: var(--grey);
        text-align: center;
        margin: 20px 0px;
    }
`;

export const Card = styled.div`
    margin: 20px 0px;
`;

export const Img = styled.div`
    img {
        width: 200px;
        display: block;
        margin: 0 auto;
    }
`;

export const Title = styled.div`
    margin: 10px 0px;

    h3 {
        color: var(--grey);
        text-align: center;
        padding: 0px 20px;
    }
`;