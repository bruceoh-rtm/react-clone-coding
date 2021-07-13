import React from "react";
import { SidebarContainer, Icon, ClosetIcon, SidebarLink, SidebarRoute, SidebarWrapper, SideBtnWrap, SidebarMenu } from "./SideBarElements";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <ClosetIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="discover">Discover</SidebarLink>
          <SidebarLink to="service">Service</SidebarLink>
          <SidebarLink to="signup">Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;