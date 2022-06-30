import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksR,
  NavBtn,
  NavBtnLink,
  Img,
} from "./NavbarElements";
import logosrc from "../logo.svg";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <Img src={logosrc} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksR to="/hustleStory">Hustle Story</NavLinksR>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/register">JOIN INSL COMMUNITY</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
