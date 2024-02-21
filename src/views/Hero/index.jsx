import React from 'react'
import {HeroImg4Container,HeroImg3Container,HeroImg2Container, HeroContainer, HeroImg, HeroImg1Container, HeroImgWrap, HeroWrap, Title } from '../../styles/Hero'
import HeroImg1 from '../../assets/home-img-1.jpg'
import HeroImg2 from '../../assets/home-img-2.jpg'
import HeroImg3 from '../../assets/home-img-3.jpg'
import HeroImg4 from '../../assets/home-img-4.jpg'


const Hero = () => {
  return (
    <HeroContainer>
        <HeroWrap>
          <HeroImg1Container>
            {/* add Link tag here */}
            <HeroImgWrap>
              
            </HeroImgWrap>
            <HeroImg src = {HeroImg1} />
            <Title>Live Comfortably</Title>
          </HeroImg1Container>
          <HeroImg2Container>
            {/* add Link tag here */}
            <HeroImgWrap>
                
            </HeroImgWrap>
            <HeroImg src = {HeroImg2} />
            <Title>Skincare</Title>
          </HeroImg2Container>
          <HeroImg3Container>
            {/* add Link tag here */}
            <HeroImgWrap>
                
            </HeroImgWrap>
            <HeroImg src = {HeroImg3} />
            <Title>Kitchen</Title>
          </HeroImg3Container>
          <HeroImg4Container>
            {/* add Link tag here */}
            <HeroImgWrap>
                
            </HeroImgWrap>
            <HeroImg src = {HeroImg4} />
            <Title>Electronics</Title>
          </HeroImg4Container>
        </HeroWrap>
    </HeroContainer>
  )
}

export default Hero