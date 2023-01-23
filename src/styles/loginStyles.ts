import styled from "styled-components";

export const Container = styled.div`
  width: 750px;
  height: 530px;
  position: absolute;
  transform: translate(-50%, 0);
  left: 50%;
  top: 210px;
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
  position: absolute;
  z-index: 30;
  animation: name duration timing-function delay iteration-count direction
    fill-mode;
  animation: overlayAnimation 0.8s ease;
`;

export const Header = styled.div`
  margin: 20px 0px;

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

  svg {
    width: 100%;
    height: 70px;
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
  height: 215px;

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

  input:focus {
    border-color: var(--blue);
  }

  input:focus ~ .icon {
    color: var(--blue);
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
  top: 50px;
  display: flex;
`;

export const Senha = styled.div`
  position: relative;
  width: 100%;
  top: 70px;
  display: flex;
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

  button:hover {
    box-shadow: inset 0 -3.95em 0 0 var(--blue);
    border: 1px solid var(--blue);
  }

  @media (max-width: 768px) {
    button {
      width: 65%;
    }
  }
`;
