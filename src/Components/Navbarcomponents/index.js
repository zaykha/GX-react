import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, Imgicon, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
const Navbar = ({togglesidebar}) => {
  return (
     <>
     <Nav>
        <NavbarContainer>
            <NavLogo to='/'>
              <Imgicon>
                <img src={require('../../assets/android-chrome-192x192.png')} alt='logo' width='90px' />
                </Imgicon>
            </NavLogo>
                <MobileIcon onClick={togglesidebar}>
                  <FaBars />
                </MobileIcon>

                  <NavMenu>
                    <NavItem>
                      <NavLinks to='/'>Home</NavLinks>
                    </NavItem>

                    <NavItem>
                      <NavLinks to='/About'>About</NavLinks>
                    </NavItem>

                    <NavItem>
                      <NavLinks to='/productspage'>Shop</NavLinks>
                    </NavItem>

                    {/* <NavItem>
                      <NavLinks to='/contactUs'>Contact US</NavLinks>
                    </NavItem> */}

                    <NavItem>
                      <NavLinks to='/cart'>Cart</NavLinks>
                    </NavItem>

                  </NavMenu>          
        </NavbarContainer>
        </Nav>
     </>
  );
};

export default Navbar;
