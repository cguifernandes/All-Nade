import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    margin-top: 50px;
    
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
    position: relative;
    transform: translate(-50%, 0);
    left: 50%;

    @media (max-width: 770px) {
        flex-direction: column;
        padding: 10px;
        width: 100%;
        border-radius: 0px;
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

export const Sliders = styled.div `
    overflow: hidden;
`;

export const Cards = styled.div `
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-items: center;
    gap: 50px 20px;
    margin-bottom: 60px;


    img {
        width: 300px;
        border-radius: 8px;
        transition: 0.4s ease;
        display: block;
        margin: 10px auto;
    }

    span {
        font-weight: normal;
    }

    h3, p {
        color: var(--grey);
        text-align: center;
        padding: 8px;
        word-wrap: break-word;
    }

    h3 {
        padding-top: 35px;
    }

    .vote {
        color: var(--grey);
        padding: 0;
        font-weight: bold;
    }

    a:hover {
        img {
            transform: scale(0.95);
        }
    }

    
    @media (max-width: 1670px) {
        grid-template-columns: auto auto auto; 
    }

    @media (max-width: 1260px) {
        grid-template-columns: auto auto;
    }

    @media (max-width: 920px) {
        grid-template-columns: auto;
    }
`;

export const CardRecommended = styled.div `
    padding: 10px;
    background-color: var(--dark);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0,0,0,1) 0px 10px 20px;
    flex-direction: column;
    width: 370px;
    position: relative;

    @media (max-width: 1670px) {
        width: 90%;
    }

    @media (max-width: 920px) {
        width: 90%;
    }
`;

