import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const Header = styled.div`
  background-color: var(--dark);
  height: 80px;
  display: flex;
  align-items: center;

  h2 {
    color: var(--grey);
    letter-spacing: 4px;
    display: block;
    margin: 0 auto;
  }

  .icon {
    color: var(--grey);
    font-size: 30px;
    transition: 0.2s ease-in-out;
  }

  a {
    height: 50px;
    padding: 10px;
    margin-left: 20px;
    border-radius: 50%;
    transition: 0.4s ease-in-out;
  }

  a:hover {
    background-color: var(--dark-grey);
  }
`;

export const Card = styled.div`
    padding: 15px;
    width: 1000px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 1) 0px 10px 20px;
    background-color: var(--dark);
    z-index: 99;
    position: absolute;
    top: 100px;
    transform: translate(-50%, 0);
    left: 50%;

    h2 {
        color: var(--grey);
        text-align: center;
        padding-bottom: 10px;
    }

    @media (max-width: 1030px) {
        width: 95%;
    }

    @media (max-width: 770px) {
        flex-direction: column;
    }

    @media (max-width: 770px) {
        h2 {
            padding-bottom: 0px;
            padding: 10px 0px;
        }
    }

`;

export const Genero = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 0px 80px;
    margin-top: 10px;

    .hover {
        padding: 10px;
        border-radius: 10px;
        transition: 0.4s ease;
    }

    .hover:hover {
        background-color: var(--dark-grey);
    }
`;

export const Img = styled.div`
    img {
        display: block;
        margin: 0 auto;
        border-radius: 10px;
    }

    @media (max-width: 770px) {
        img {
            width: 300px;
        }
    }

`;

export const Divisor = styled.div `
    .custom-shape-divider-bottom-1675263634 {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }

    .custom-shape-divider-bottom-1675263634 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 220px;
    }

    .custom-shape-divider-bottom-1675263634 .shape-fill {
        fill: var(--dark-grey);
    }

    @media (max-width: 640px) {
        .custom-shape-divider-bottom-1675263634 {
            position: fixed;
        }
    }

`;

export const Text = styled.div`
    p {
        color: var(--grey);
        text-align: center;
        font-weight: bold;
    }

    span {
        font-weight: normal;
    }

    .overview {
        font-weight: normal;
        padding-bottom: 10px;
        word-wrap: break-word;
        color: var(--grey);
        text-align: center;
        padding: 0 20px;
        padding-bottom: 10px;
    }

    @media (max-width: 840px) {
        span, p, .overview {
            font-size: 14px;
        }
    }
`;