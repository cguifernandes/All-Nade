import styled from "styled-components";

export const Bar = styled.div`
    background-color: var(--dark);
    width: 350px;
    height: 91.8%;
    position: fixed;
    right: 0;
    top: 80px;
    z-index: 22;
    animation: favoritesAnimationOut forwards 0.6s ease;
    overflow-y: auto;

    &.active {
        animation: favoritesAnimationIn 0.6s ease;
    }
`;

export const ContainerFavorite = styled.div`
    p {
        color: var(--grey);
        text-align: center;
        margin: 20px 0px;
    }
`;

export const CardFavorite = styled.div`
    padding: 10px 0px;
    transition: 0.4s all;
    cursor: pointer;
    position: relative;
    padding: 20px 0px;
    
    &:hover {
        background-color: var(--dark-grey);
    }
`;

export const ImgFavorite = styled.div`
    img {
        width: 200px;
        display: block;
        margin: 0 auto;
    }
`;

export const Title = styled.div`
    padding-top: 10px;
    h3 {
        color: var(--grey);
        text-align: center;
        padding: 0px 15px;
    }
`;