import React, {useState} from 'react'
import { CartIconWrap, Cross, Hamburger, LogoImg, LogoWrap, NavBar, NavLinks, NavLinksContainer, NavLinksWrap, NavbarWrap, ResponsiveNav } from '../../styles/Nav'
import LogoImage from '../../assets/Logo.png'
import { MdShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";


const Nav = () => {
    
    const [nav, setNav] = useState(false)
    nav?document.body.style.overflow="hidden":document.body.style.overflow="auto";

  return (
    <NavbarWrap>
        <NavBar>
            <LogoWrap>
                <LogoImg src = {LogoImage} />
            </LogoWrap>
            <NavLinksContainer>
            <NavLinksWrap>
                <NavLinks  onClick={() => setNav(false)} href = "#">CATEGORIES</NavLinks>
                <NavLinks   onClick={() => setNav(false)} href = "#">PRODUCT PAGE</NavLinks>  
            </NavLinksWrap>
                <Hamburger onClick={() => setNav(!nav)}>
                    <GiHamburgerMenu />
                </Hamburger>
                <CartIconWrap>
                    <MdShoppingCart />
                </CartIconWrap>
            </NavLinksContainer>
            {nav && (<ResponsiveNav>
                <Cross onClick={() => setNav(!nav)}>
                    <RxCross2 />
                </Cross>
                <NavLinks  onClick={() => setNav(false)} href = "#">CATEGORIES</NavLinks>
                <NavLinks  onClick={() => setNav(false)} href = "#">PRODUCT PAGE</NavLinks>  
            </ResponsiveNav>)}
        </NavBar>
    </NavbarWrap>
  )
}

export default Nav