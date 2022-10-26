import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLinkR,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinkR to="/">HOME</SidebarLinkR>
          <SidebarLinkR to="/experts">OUR EXPERTS</SidebarLinkR>
          <SidebarLinkR to="/resources">RESOURCES</SidebarLinkR>
          <SidebarLinkR to="/team">TEAM</SidebarLinkR>
          <SidebarLinkR to="/provincials">PROVINCIAL COMPETITIONS</SidebarLinkR>

        </SidebarMenu>
        <SideBtnWrap>
          {/* <SidebarRoute  target="_blank"
              href="https://www.facebook.com/groups/IEEEINSLCommunity"
            >Register</SidebarRoute> */}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
