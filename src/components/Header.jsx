import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderEstilizado>
      <ContainerHeader>
        <Link to="/">
          <img src="./logo-alura.png" alt="Logo de AluraFlix" />
        </Link>
        <ContainerBotones>
          <Link to="/">
            <ButtonHome>Inicio</ButtonHome>
          </Link>
          <Link to="/NuevoVideoPage">
            <ButtonVideo>Nuevo Video</ButtonVideo>
          </Link>
        </ContainerBotones>
      </ContainerHeader>
    </HeaderEstilizado>

  );
};

const HeaderEstilizado = styled.header`
    display: flex;
    position: fixed;
    top: 0px;
    left: 0px;
    justify-content: center;
    background-color: black;
    border-bottom: 2px solid red;
    z-index: 1;
    width: 100%;
`

const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 125px;
    width: 1400px;
    padding: 0 50px;
    img {
        width: 170px;
        filter: invert(31%) sepia(100%) saturate(10000%) hue-rotate(0deg) brightness(100%) contrast(100%);
    }
`

const ContainerBotones = styled.div`
    display: flex;
    gap: 20px;
    button{
        padding: 10px 20px;
        font-weight: 500;
        text-transform: uppercase;
        border-radius: 15px;
        cursor: pointer;
        font-weight: 700;
    }
`

const ButtonHome = styled.button`
    color: red;
    border: 2px solid red;
    background-color: black;
    &:hover {
        background-color: red;
        color: white;
    }
`

const ButtonVideo = styled.button`
    color: white;
    border: 2px solid white;
    background-color: black;
    &:hover {
        background-color: white;
        color: #262626;
    }
`

export default Header