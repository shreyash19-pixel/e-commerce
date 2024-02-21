import React from 'react'
import { AboutBtn, AboutBtnWrap, AboutContainer, AboutImg, AboutImgContainer, AboutImgWrap, AboutInfoContainer, AboutInfoDesc, AboutInfoTitle, AboutInfoWrap, AboutWrap } from '../../styles/About'
import AboutImage from '../../assets/banner1.jpg'

const About = () => {
  return (
    <AboutContainer>
        <AboutWrap>
            <AboutInfoWrap>
                <AboutInfoContainer>
                    <AboutInfoTitle>
                         Creative harmonious living
                    </AboutInfoTitle>
                    <AboutInfoDesc>
                        RAOUF Products are all made to standard sizes so that you can mix and match them freely.
                    </AboutInfoDesc>
                    <AboutBtnWrap>
                        <AboutBtn href = "#">SHOP NOW</AboutBtn>
                    </AboutBtnWrap>
                </AboutInfoContainer>
            </AboutInfoWrap>
            <AboutImgContainer>
                <AboutImgWrap>
                    <AboutImg src = {AboutImage} />
                </AboutImgWrap>
            </AboutImgContainer>
        </AboutWrap>
    </AboutContainer>
  )
}

export default About