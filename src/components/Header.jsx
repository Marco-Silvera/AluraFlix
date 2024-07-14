import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderContainer>
            <NavButton to="/">Inicio</NavButton>
            <NavButton to="/NuevoVideoPage">Nuevo Video</NavButton>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
`;

const NavButton = styled(Link)`
  text-decoration: none;
  color: #333;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #eee;
  }
`;

export default Header;
