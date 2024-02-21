import styled from "styled-components";

export const HeroContainer = styled.div`
    width: 100%;
    padding: 140px 20px 20px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
   
`

export const HeroWrap = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 480px;
    display: grid;
    grid-gap: 15px;
    grid-template-areas: "one two four" "one two four-low";
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    @media (max-width: 750px)
    {
        grid-template-areas: "one two" "four four-low";
        grid-template-columns: repeat(2,minmax(0,1fr));
        grid-template-rows: repeat(2,minmax(0,1fr));
    }
`

export const HeroImg1Container = styled.div`
    grid-area: one;
    position: relative;
    cursor: pointer;
    overflow: hidden;
`

export const HeroImgWrap = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top:0;
    left:0;
    background-color: rgba(0,0,0,.3);
    transition: all .5s;

    &:hover{
        background-color: rgba(0, 0, 0, 0.5);
    }
`

export const HeroImg = styled.img`
    width: 100%;
    height: 100%;
    object-position: 50% 50%;
    object-fit: cover;
`

export const HeroImg2Container = styled(HeroImg1Container)`
    grid-area: two;
`

export const HeroImg3Container = styled(HeroImg1Container)`
    grid-area: four;
`

export const HeroImg4Container = styled(HeroImg1Container)`
    grid-area: four-low;
`

export const Title = styled.h1`
    color: white;
    font-weight: 600;
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-size: 40px;

    @media (max-width: 600px)
    {
        font-size: 24px;
    }

    @media (max-width: 450px)
    {
        font-size: 20px;
        left: 10px;
    }
`