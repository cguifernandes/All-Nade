import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--dark);
  height: 80px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 28;
`;

export const Favoritos = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.4s ease-in-out;
  &:hover {
    background-color: var(--dark-grey);

    .icon {
      color: #ffd700;
    }
  }

  .icon {
    color: var(--grey);
    width: 20px;
    height: 20px;
    transition: 0.4s ease-in-out;
  }
`;

export const Logo = styled.div`
  position: absolute;
  transform: translate(-50%, 0);
  left: 50%;

  h2 {
    color: var(--grey);
    letter-spacing: 4px;
  }

  @media (max-width: 740px) {
    display: none
  }
`;

export const Button = styled.div`
  width: auto;

  button {
    outline: none;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    color: var(--grey);
    font-family: "Poppins", sans-serif;
    margin: 0px auto;
    border: 1px solid var(--grey);
    padding: 10px;
    transition: 0.4s all;
    cursor: pointer;
  }

  .button {
    font-size: 18px;
    margin-right: 5px;
  }

  button:hover {
    box-shadow: inset 0 -3.95em 0 0 var(--grey);
    color: #000;
  }
`;

export const Account = styled.div`
  width: auto;
`;

export const UserAccount = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  align-items: center;
  border-radius: 5px;
  transition: 0.4s all ease;
  cursor: pointer;
  border: 1px solid var(--grey);

  &:hover {
    box-shadow: inset 0 -3.95em 0 0 var(--grey);

    p {
      color: #000;
    }

    .account {
      color: #000;
    }
  }

  p {
    color: var(--grey);
    pointer-events: none;
    transition: 0.4s all ease;
  }

  .account {
    font-size: 22px;
    color: var(--grey);
    margin-left: 10px;
    transition: 0.4s all ease;
  }

  .loading {
    background-color: #ebebeb;
  }
`;

export const List = styled.div`
  position: fixed;
  width: auto;
  height: auto;
  left: 20px;
  top: 76px;
  border-radius: 5px;
  background-color: var(--dark);
  border: 1px solid var(--grey);
  overflow: hidden;
  z-index: 28;

  .line {
    width: 100%;
    height: 1px;
    background-color: var(--grey);
  }
`;

export const Email = styled.div`
  p {
    color: var(--grey);
    text-align: center;
    padding: 10px;
  }
`;

export const Caret = styled.div`
  position: absolute;
  left: 50px;

  .icon {
    color: var(--grey);
    font-size: 28px;
  }
  @media (max-width: 768px) {
    left: 50px;
  }
`;

export const Text = styled.div`
  cursor: pointer;
  transition: 0.4s all ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;

  &:hover {
    background-color: var(--dark-grey);
  }
  p {
    color: var(--grey);
    text-align: center;
    padding: 10px;
  }
  .icon {
    color: var(--grey);
    font-size: 28px;
  }
`;
