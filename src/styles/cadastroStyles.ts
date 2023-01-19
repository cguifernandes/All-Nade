import styled from "styled-components";

export const Container = styled.div`
  width: 750px;
  height: 700px;
  position: absolute;
  transform: translate(-50%, 0);
  left: 50%;
  top: 120px;
  background-color: var(--dark);
  animation: overlayAnimation 0.2s ease;
  border-radius: 10px;
  z-index: 32;
`;
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0/0.3);
  top: 0px;
  position: absolute;
  z-index: 30;
  animation: name duration timing-function delay iteration-count direction
    fill-mode;
  animation: overlayAnimation 0.8s ease;
`;

export const Header = styled.div`
  margin: 10px 0px;

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
    right: 95px;
    top: 17px;
    width: 24px;
    height: 24px;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  label {
    color: rgba(235, 235, 235, 0.7);
    position: absolute;
    font-size: 16px;
    top: 16px;
    left: 93px;
    pointer-events: none;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  input:focus {
    border-color: var(--blue);
  }

  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    transform: translateX(6px) translateY(-25px);
    font-size: 14px;
    padding: 0 10px;
    background: var(--dark);
    color: var(--blue);
  }

  input:focus ~ .icon,
  input:not(:placeholder-shown) ~ .icon {
    color: var(--blue);
  }

  input:not(:placeholder-shown) {
    border-color: var(--blue);
  }

  input:invalid {
    border-color: red;
  }

  input:invalid ~ .icon,
  input:invalid ~ label {
    color: red;
  }
`;

export const Email = styled.div`
  position: relative;
  width: 100%;
  top: 40px;
  display: flex;
`;

export const Nome = styled.div`
  position: relative;
  width: 100%;
  top: 70px;
  display: flex;
`;

export const Senha = styled.div`
  position: relative;
  width: 100%;
  top: 100px;
  display: flex;
`;

export const Footer = styled.div`
  p {
    color: rgba(235, 235, 235, 0.7);
    text-align: center;
  }

  a {
    font-size: 16px;
    color: var(--blue);
    text-align: center;
  }
`;

export const Button = styled.div`
  position: relative;
  top: 120px;

  button {
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
`;

export const Text = styled.div`
  position: absolute;
  width: 100%;
  bottom: 40px;

  .senha {
    display: block;
    margin: 10px auto;
  }
`;
