import styled from "styled-components";

export const Container = styled.div`
  width: 750px;
  height: 600px;
  position: absolute;
  transform: translate(-50%, 0);
  left: 50%;
  top: 120px;
  background-color: var(--dark);
  animation: overlayAnimation 0.2s ease;
  border-radius: 10px;
  z-index: 32;

  @media (max-width: 768px) {
    width: 95%;
  }
`;
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0/0.5);
  top: 0px;
  position: fixed;
  z-index: 30;
  animation: overlayAnimation 0.8s ease;
`;

export const Header = styled.div`
  margin: 20px 0px;
  height: 50px;

  button {
    outline: none;
    border: none;
    padding: 0px;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: absolute;
    top: 15px;
    right: 15px;
  }

  button:hover {
    .icon {
      color: rgba(235, 235, 235, 0.7);
    }
  }

  .icon {
    width: 34px;
    height: 34px;
    color: #fff;
    transition: 0.2s ease;
  }

  h1 {
    color: var(--grey);
    text-align: center;
    letter-spacing: 3.5px;
  }

  p {
    color: rgba(235, 235, 235, 0.7);
    margin: 10px 0px;
    text-align: center;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 305px;

  input {
    outline: none;
    border: none;
    font-family: "Poppins", sans-serif;
    padding: 15px;
    display: block;
    width: 80%;
    background-color: transparent;
    border: 1px solid var(--grey);
    margin: 0 auto;
    font-size: 16px;
    color: #fff;
    transition: 0.4s all;
  }

  .icon {
    color: #fff;
    position: absolute;
    right: 12%;
    top: 17px;
    width: 24px;
    height: 24px;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  input:invalid {
    border-color: var(--red);
  }

  input:invalid ~ .icon,
  input:invalid ~ label {
    color: var(--red);
  }

  @media (max-width: 570px) {
    .icon {
        right: 13%;
    }

    label {
        left: 13%;
    }
  }
`;

export const Email = styled.div`
  position: relative;
  width: 100%;
  top: 20px;
  display: flex;
`;

export const Nome = styled.div`
  position: relative;
  width: 100%;
  top: 50px;
  display: flex;
`;

export const Senha = styled.div`
  position: relative;
  width: 100%;
  top: 80px;
  display: flex;
`;

export const Footer = styled.div`
  p {
    color: rgba(235, 235, 235, 0.7);
    text-align: center;
  }

  a {
    text-align: center;
    cursor: pointer;
    transition: 0.4s ease;
  }

  a:hover {
    color: var(--grey);
  }
`;

export const Button = styled.div`
  position: relative;
  top: 140px;

  button {
    border-radius: 8px;
    outline: none;
    display: block;
    margin: 15px auto;
    width: 50%;
    border: none;
    background-color: transparent;
    color: var(--grey);
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    border: 1px solid var(--grey);
    padding: 15px;
    transition: 0.4s all;
    cursor: pointer;
  }

  p {
    color: var(--grey);
    transition: opacity 250ms;
    transition-delay: 250ms;
    width: 100%;
    transition: 0.4s all;
    font-size: 16px;
  }

  button.loading p {
    opacity: 0;
    transition-delay: 0s;
  }

  .spinner {
    border: 4px solid transparent;
    border-radius: 50%;
    border-top-color: var(--grey);
    opacity: 0;
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;
    margin: auto;
    width: 32px;
    height: 32px;
    transition: opacity 250ms;
    animation: rotate-spinner 1s linear;
    animation-iteration-count: infinite;
  }

  button.loading .spinner {
    opacity: 1;
    transition-delay: 250ms;
  }

  button:hover {
    box-shadow: inset 0 -3.95em 0 0 #fff;
    border: 1px solid #fff;

    p {
      color: #000;
    }
  }

  @media (max-width: 768px) {
    button {
        width: 65%;
    }
  }
`;

export const Text = styled.div`
  position: absolute;
  width: 100%;
  bottom: 40px;
`;
