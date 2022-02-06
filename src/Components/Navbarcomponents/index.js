import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, Imgicon, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
const Navbar = () => {
  return (
     <>
     <Nav>
        <NavbarContainer>
            <NavLogo to='/'>
              <Imgicon>
                <img src={require('../../assets/android-chrome-192x192.png')} alt='logo' width='100px'/>
                </Imgicon>
            </NavLogo>
                <MobileIcon>
                  <FaBars />
                </MobileIcon>

                  <NavMenu>
                    <NavItem>
                      <NavLinks to='home'>Home</NavLinks>
                    </NavItem>

                    <NavItem>
                      <NavLinks to='about'>About</NavLinks>
                    </NavItem>

                    <NavItem>
                      <NavLinks to='shop'>Shop</NavLinks>
                    </NavItem>

                    <NavItem>
                      <NavLinks to='contactUs'>Contact US</NavLinks>
                    </NavItem>

                  </NavMenu>          
        </NavbarContainer>
        </Nav>
     </>
  );
};

export default Navbar;
