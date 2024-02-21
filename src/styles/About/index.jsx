import styled from "styled-components";


export const AboutContainer = styled.div`
    width: 100%;
    padding: 60px 20px 60px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AboutWrap = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    height:400px;

`

export const AboutInfoWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E9E9E9;
    padding: 20px;
`

export const AboutInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 400px;

    @media (max-width: 600px)
    {
        max-width: 600px;
    }
`

export const AboutInfoTitle = styled.h1`
    font-weight: 600;
`

export const AboutInfoDesc = styled.p`
    font-size: 18px;
`

export const AboutBtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 60px;
`

export const AboutBtn = styled.a`
    text-decoration: none;
    padding: 15px 20px;
    background-color: black;
    color: white;
    text-align: center;
    font-weight: 600;
    font-size: 20px;
`

export const AboutImgContainer = styled.div`
    width: 100%;
    height: 100%;

    
    @media (max-width: 600px)
    {
        display: none;
    }
`

export const AboutImgWrap = styled.div`
      width: 100%;
    height: 100%;
`
export const AboutImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`