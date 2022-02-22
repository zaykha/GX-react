import React from 'react';


import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './Sidebarelement';

const Sidebar = ({togglesidebar, isOpen}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={togglesidebar}>
    <Icon onClick={togglesidebar}>
        <CloseIcon/>
    </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='/' onClick={togglesidebar}>
                    Home
                </SidebarLink>

                <SidebarLink to='/About' onClick={togglesidebar}>
                    About
                </SidebarLink>

                <SidebarLink to='/productspage' onClick={togglesidebar}>
                    Shop
                </SidebarLink>

                <SidebarLink to='/contactUs' onClick={togglesidebar}>
                    ContactUs
                </SidebarLink>

                <SidebarLink to='/cart' onClick={togglesidebar}>
                    Cart
                </SidebarLink>
            </SidebarMenu>

            
        </SidebarWrapper>

    </SidebarContainer>

    );
};

export default Sidebar;
