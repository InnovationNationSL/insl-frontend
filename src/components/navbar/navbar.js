import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
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
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  function changeNav() {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  function toggleHome() {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Img src={logosrc} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {/* <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                ABOUT
              </NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks
                to="/"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                
                <Link to= "/" style={{textDecoration:"none", color:"white"}}>HOME</Link>
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="/experts"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                
                <Link to= "/experts" style={{textDecoration:"none", color:"white"}}>OUR EXPERTS</Link>
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="/resources"
                smooth={true}
                duration={500}  
                spy={true}
                exact="true"
                offset={0}
              >


            <Link to= "/articles" style={{textDecoration:"none", color:"white"}}>ARTICLES</Link>
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="/articles"
                smooth={true}
                duration={500}  
                spy={true}
                exact="true"
                offset={0}
              >
                
                <Link to= "/resources" style={{textDecoration:"none", color:"white"}}>RESOURCES</Link>
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="/team"
                smooth={true}
                duration={500}  
                spy={true}
                exact="true"
                offset={0}
              >
                
                <Link to= "/team" style={{textDecoration:"none", color:"white"}}>TEAM</Link>
              </NavLinks>
            </NavItem>


            <NavItem>
              <NavLinks
                to="/provincials"
                smooth={true}
                duration={500}  
                spy={true}
                exact="true"
                offset={0}
              >
                
                <Link to= "/provincials" style={{textDecoration:"none", color:"white"}}>PROVINCIAL COMPETITIONS</Link>
              </NavLinks>
            </NavItem>

            {/* <NavItem>
              <NavLinksR to="/contact">CONTACT</NavLinksR>
            </NavItem> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              target="_blank"
              href="https://www.facebook.com/groups/IEEEINSLCommunity"
            >
              JOIN INSL COMMUNITY
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
