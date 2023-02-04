import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    @media (max-width: 770px) {
        height: 100vh;
    }
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
    width: 95%;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: var(--dark);
    z-index: 99;
    position: absolute;
    top: 140px;
    transform: translate(-50%, 0);
    left: 50%;

    @media (max-width: 770px) {
        flex-direction: column;
        top: 130px;
        padding: 10px;
        width: 100%;
    }
`;

export const Input = styled.div `
    background-color: var(--dark-grey);
    padding: 10px 20px;
    width: 180px;
    border-radius: 10px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    cursor: pointer;
    position: relative;

    p {
        color: var(--grey);
        text-align: center;
        cursor: pointer;
    }

    .hover {
        padding: 10px;
        border-radius: 10px;
    }

    .hover:hover {
        background-color: #313131;
    }

    .icon {
        color: var(--grey);
        font-size: 22px;
        transition: 0.2s ease-in-out;
    }

    &:hover {
        .icon {
            transform: rotate(-90deg);
        }
    }
`;

export const DropDowns = styled.div `
    display: flex;
    gap: 0px 30px;


    @media (max-width: 920px) {
        p {
            font-size: 14px;
        }
    }
`;

export const DropDown = styled.div `
    background-color: var(--dark-grey);
    position: absolute;
    top: 50px;
    width: 100%;
    left: 0px;
    border-radius: 10px;
`;

export const Img = styled.div`
    img {
        display: block;
        margin: 0 auto;
        border-radius: 10px;
    }

    @media (max-width: 920px) {
        img {
            width: 300px;
        }
    }

    @media (max-width: 770px) {
        margin-top: 10px;
    }
`;


export const Text = styled.div`
    width: 100%;
    p {
        color: var(--grey);
        text-align: center;
        font-weight: bold;
    }

    span {
        font-weight: normal;
    }

    h2 {
        color: var(--grey);
        text-align: center;
    }

    .tagline {
        color: rgba(235, 235, 235, 0.7);
        padding: 0px 15px;
        padding-bottom: 10px;
    }

    .overview {
        font-weight: normal;
        word-wrap: break-word;
        color: var(--grey);
        text-align: center;
        padding: 0px 20px;
        padding-bottom: 10px;
    }

    @media (max-width: 920px) {
        .overview, span, p, .tagline {
            font-size: 14px;
        }

        h2 {
            font-size: 18px;
        }
    }
`;