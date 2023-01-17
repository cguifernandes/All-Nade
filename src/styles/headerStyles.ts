import styled from 'styled-components';

export const Container = styled.header`
    background-color: var(--dark);
    height: 80px;
    display: flex;
    align-items: center;
`;

export const Logo = styled.div`
    padding-left: 2%;

    p {
        text-align: center;
        color: #fff;
    }

    @media (max-width: 768px) {
        width: 25%;
    }
`;

export const HeadNav = styled.div`
    position: absolute;
    right: 7%;
    cursor: pointer;
    transition: 0.4s all;
    display: none;
    visibility: hidden;

    div {
        width: 20px;
        height: 2px;
        background: #fff;
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

export const Ul = styled.ul`
    display: flex;
    margin: 0 auto;
    list-style: none;
    justify-content: right;
    align-items: center;

    a {
        text-decoration: none;
        transition: 0.4s all;
        color: #fff;
        font-size: 18px;
    }

    .li a:after {
        display:block;
        content: '';
        border-bottom: solid 2px #fff;
        margin-right: 2px;
        transform: scaleX(0);
        transition: transform 320ms ease-in-out;
    }

    .li:hover a:after {
        transform: scaleX(1);
    }

    .li {
        margin: 0px 30px;
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
        z-index: 999;
        
        li {
            width: 0;
            opacity: 0;
            margin: 0;
        }

        &.active {
            width: 210px;
        }
    }
`;

export const Button = styled.div`
    width: 15%;

    button {
        outline: none;
        border: none;
        background-color: transparent;
        color: #fff;
        font-family: 'Inter', sans-serif;
        margin: 0px 10px;
        border: 1px solid #fff;
        padding: 10px;
        transition: 0.4s all;
        cursor: pointer;
    }

    .login:hover {
        box-shadow: inset 0 -3.95em 0 0 var(--blue);
        border: 1px solid var(--blue);
    }

    .login:focus {
        background-color: var(--blue);
    }

    .cadastrar:hover {
        box-shadow: inset 0 -3.95em 0 0 #fff;
        color: #000;
    }

    @media (max-width: 1220px) {
        width: 25%;
    }

    @media (max-width: 768px) {
        width: 70%;
    }
`;