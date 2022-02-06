import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    background: rgba(0,0,0,0);
    height: 80px;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-item: center;
    font-size: 1rem;
    position: sticky;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    // border: 1px solid red;
`;

export const NavLogo= styled(LinkR)`
    color:  #fbae1a;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const Imgicon= styled.div`
    position: relative;
    left: 0px;
    // background: white;
    &:hover{
        color:#fff;
    }
    // border: 1px solid red;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-item: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;

`
export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-item: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    
    &:hover{
        color: #fbae1a;
    }

    &.active{
        border-bottom: 3px solid #fbae1a;
    }
`