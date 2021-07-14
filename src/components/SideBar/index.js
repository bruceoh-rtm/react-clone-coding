import React from "react";
import {
  SidebarContainer,
  Icon,
  ClosetIcon,
  SidebarLink,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
  SidebarMenu,
} from "./SideBarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer
      // @ts-ignore
      isOpen={isOpen}
      onClick={toggle}
    >
      <Icon onClick={toggle}>
        <ClosetIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to="service" onClick={toggle}>Service</SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
