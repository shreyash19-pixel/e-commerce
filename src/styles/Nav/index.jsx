import styled from "styled-components";


export const NavbarWrap = styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #efefef;
    box-shadow: 0 10px 20px 0 rgba(133, 133, 133, 0.1);
    position: fixed;
    top:0px;
    left: 0px;
    z-index: 99;
`

export const NavBar = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoWrap = styled.div`
    
`

export const LogoImg = styled.img`
    width: 100%;
    max-width: 90px;

    @media (max-width: 450px)
    {
        max-width: 70px;
    }
`

export const NavLinksContainer = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`

export const NavLinksWrap = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;

    @media (max-width: 600px)
    {
        display: none;
    }
`

export const NavLinks = styled.a`
    text-decoration: none;
    color: black;
    font-weight: 400;
    font-size: 18px;
`
export const CartIconWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 27px;
    cursor: pointer;

    @media (max-width: 450px)
    {
        font-size: 20px;
    }
`

export const Hamburger = styled.div`
    display: none;

    @media (max-width: 600px)
    {
        display: flex;
        font-size: 25px;
        cursor: pointer;
    }

    @media (max-width: 450px)
    {
        font-size: 20px;
    }
`

export const Cross = styled.div`
    display: none;

    @media (max-width: 1200px)
    {
        display: flex;
        font-size: 30px;
        cursor: pointer;
        position: absolute;
        z-index: 4;
        right: 20px;
        top: 40px;
    }
`

export const ResponsiveNav = styled.div`
    display: none;

    @media (max-width: 600px)
    {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 40px;
        background-color: white;
        position: absolute;
        top: 0;
        left:0px;
        animation : left .4s ease-out;
        font-size: 22px;
        z-index: 99999;

        @keyframes left {
        from {
            transform: translate(-100%);
        }
        to {
            transform: translate(0);
        }
        }
    }
`

