import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SidebtnWrap
} from './SideBarElements'

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>

        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="manage" onClick={toggle}>Manage</SidebarLink>
                <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
            </SidebarMenu>

            <SidebtnWrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SidebtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar