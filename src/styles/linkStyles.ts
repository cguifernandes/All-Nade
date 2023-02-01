import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
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
    width: 800px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 1) 0px 10px 20px;
    background-color: var(--dark);
    z-index: 99;

    @media (max-width: 850px) {
        width: 95%;
    }
`;

export const Img = styled.div`
    h2 {
        color: var(--grey);
        text-align: center;
        padding-bottom: 10px;
    }

    img {
        display: block;
        margin: 0 auto;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    @media (max-width: 420px) {
        img {
            width: 250px;
        }
    }
`;

export const Divisor = styled.div `
    .custom-shape-divider-bottom-1675263634 {
        position: absolute;
        bottom: -80px;
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
        fill: var(--dark);
    }

`;

export const Text = styled.div`
    p {
        color: var(--grey);
        text-align: center;
        font-weight: 800;
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
        padding: 0 10px;
        padding-bottom: 10px;
    }

    @media (max-width: 550px) {
        p, span, .overview {
            font-size: 14px;
        }
    }
`;