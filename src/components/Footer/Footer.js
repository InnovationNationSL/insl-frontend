import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcon,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/hussleStory">Story</FooterLink>
              <FooterLink to="/hussleStory">Story</FooterLink>
              <FooterLink to="/hussleStory">Story</FooterLink>
              <FooterLink to="/hussleStory">Story</FooterLink>
              <FooterLink to="/hussleStory">Story</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/hussleStory">Story</FooterLink>
              <FooterLink to="/hussleStory">Story</FooterLink>
              <FooterLink to="/hussleStory">Story</FooterLink>
              <FooterLink to="/hussleStory">Story</FooterLink>
              <FooterLink to="/hussleStory">Story</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/hussleStory">Story</FooterLink>
              <FooterLink to="/hussleStory">Story</FooterLink>
              <FooterLink to="/hussleStory">Story</FooterLink>
              <FooterLink to="/hussleStory">Story</FooterLink>
              <FooterLink to="/hussleStory">Story</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/hussleStory">Story</FooterLink>
              <FooterLink to="/hussleStory">Story</FooterLink>
              <FooterLink to="/hussleStory">Story</FooterLink>
              <FooterLink to="/hussleStory">Story</FooterLink>
              <FooterLink to="/hussleStory">Story</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Logo</SocialLogo>
            <WebsiteRights>INSL 2022 All rights reserved</WebsiteRights>
            <SocialIcon>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcon>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
