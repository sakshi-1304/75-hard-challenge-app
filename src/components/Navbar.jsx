import React, { useState } from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  width: 95%;
  height: 10vh;
  margin-left: 1vw;
  margin-top: 2vh;
  border-radius: 50px;
  background-color: #3652AD;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 3vw;
    align-items: center;
    gap: 5px;
  }
`;

const Logo = styled.div`
  img {
    padding: 2vw;
    height: 10vh;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
  z-index: 2; /* Set a higher z-index value */

  a {
    color: #fff;
    text-decoration: none;
    padding: 10px;
    font-size: 1.5vw;
    margin: 0 10px;
    cursor: pointer;
  }

  a:hover {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? '-80vh' : '16vh')};
    left: 5vw;
    right: 5vw;
    text-align: center;
    a{
      font-size: 3vw;
    }
    background-color: #3652AD;
    border-radius: 10px;
    transition: top 0.3s ease-in-out;
    z-index: 1; /* Ensure the menu is above other content */
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    font-size: 5vw;
    margin-right: 5vw;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarWrapper>
      <Logo>
        <img src="assets/Logo.png" alt="Logo" />
      </Logo>
      <NavLinks isOpen={isMenuOpen}>
        <a href="#">Home</a>
        <a href="#">Tasks</a>
        <a href="#">Tracker</a>
        <a href="#">Login</a>
      </NavLinks>
      <MenuIcon onClick={toggleMenu}>☰</MenuIcon>
    </NavbarWrapper>
  );
};

export default Navbar;
