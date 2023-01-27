import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--dark);
  height: 80px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const Menu = styled.div`
  position: absolute;
  right: 30px;
  cursor: pointer;
  transition: 0.4s all;
  display: none;
  visibility: hidden;
  padding: 10px;
  border-radius: 50%;

  &:hover {
    background-color: var(--dark-grey);
  }

  div {
    width: 20px;
    height: 2px;
    background: var(--grey);
    margin: 5px;
    transition: all 0.2s ease;
  }

  &.active .line-1 {
    transform: rotate(-45deg) translate(-5px, 5px);
  }
  &.active .line-2 {
    opacity: 0;
  }
  &.active .line-3 {
    transform: rotate(45deg) translate(-5px, -5px);
  }

  @media (max-width: 768px) {
    visibility: visible;
    display: inline;
  }
`;

export const Logo = styled.div `  
  margin-right: 20px;

  h2 {
    color: var(--grey);
    letter-spacing: 4px;
    text-align: center; 
  }
  
  @media (max-width: 768px) {
    h2 {
      display: none; 
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  margin: 0 auto;
  list-style: none;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    transition: 0.4s all;
    color: var(--grey);
    font-size: 18px;
  }

  .li a:after {
    display: block;
    content: "";
    border-bottom: solid 2px var(--grey);
    margin-right: 2px;
    transform: scaleX(0);
    transition: transform 320ms ease-in-out;
  }

  .li:hover a:after {
    transform: scaleX(1);
  }

  h2 {
    color: var(--grey);
    letter-spacing: 4px;
    text-align: center; 
    display: none;
  }

  .li {
    margin: 0px 20px;
    font-weight: 500;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    right: 0;
    width: 0px;
    height: 92vh;
    flex-direction: column;
    background-color: var(--dark);
    justify-content: space-around;
    transition: all 0.4s ease-in;
    z-index: 991;

    h2 {
      display: inline;
      opacity: 0;
      margin: 0;
      font-size: 18px;
    }

    li {
      width: 0;
      opacity: 0;
      margin: 0;
    }

    &.active {
      width: 250px;
    }
  }
`;

export const Button = styled.div`
  width: auto;
  margin-left: 20px;

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
    box-shadow: inset 0 -3.95em 0 0 var(--blue);
    border: 1px solid var(--blue);
  }
`;

export const Account = styled.div `
  width: auto;
  margin-left: 20px;
`;

export const UserAccount = styled.div `
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  align-items: center;
  border-radius: 5px;
  transition: 0.4s all ease;
  cursor: pointer;
  border: 1px solid var(--grey);
  &:hover {
    background-color: var(--blue);
    border-color: var(--blue);
  }
  p {
    color: var(--grey);
    pointer-events: none;
  }
  .account {
    font-size: 22px;
    color: var(--grey);
    margin-left: 10px;
  }

  .loading {
    background-color: #ebebeb;
  }

`;

export const List = styled.div `
  position: absolute;
  width: auto;
  height: auto;
  left: 20px;
  top: 76px;
  border-radius: 5px;
  background-color: var(--dark);
  border: 1px solid var(--grey);
  overflow: hidden;
  z-index: 999;

  .line {
    width: 100%;
    height: 1px;
    background-color: var(--grey);
  }

`;

export const Email = styled.div `
  p {
    color: var(--grey);
    text-align: center;
    padding: 10px;
  }
`;

export const Caret = styled.div `
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

export const Text = styled.div `
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
