import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.section`
  padding: 50px 20px;
  background-color: #18171E;
  color: #F4DDA9;
  @media (max-width: 768px) {
    height: 1500px;
  }
`;

const FeatureTitle = styled.h2`
  font-size: 9em;
  margin-bottom: 50px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 3em;
  }
`;

const FeaturesWrapper = styled.div`
  display: flex;
  margin-left: 140px;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftMenu = styled.div`
  flex: 1;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const MenuItem = styled.div`
  font-size: 1.2em;
  margin: 20px 0;
  display: flex;
  color:white;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &:hover .arrow {
    color: #fff;
  }
`;

const MenuItemActive = styled(MenuItem)`
  color: black;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
`;

const RightContent = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const WhiteContainer = styled.div`
  background-color: white;
  padding: 20px;
  height: 300px;
  margin-right: 150px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    height:800px
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  height: auto;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const FeatureImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 1.5em;
  line-height: 1.5;
  color: #333;
  flex: 1;
  margin-right: 80px;
`;


const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
  margin-top: 20px;
  margin-right: 50px;
  position: relative;
`;

const GetStartedButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 10px 30px;
  background-color: #333;
  color: #fff;
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: none;
  border-radius: 30px;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: #444;
  }

  @media (max-width: 768px) {
    margin-right: 10px;
  }
`;

const ArrowCircle = styled.div`
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const ArrowIcon = styled.span`
  font-size: 1.5em;
  color: #333;
  display: inline-block;
  margin-left: 10px;
  transform: rotate(0deg);
  &:before {
    content: '\\2192';
  }
`;


const Features = () => {
  return (
    <FeaturesContainer>
      <FeatureTitle>FEATURES WITH MORE WONDERS</FeatureTitle>
      <FeaturesWrapper>
        <LeftMenu>
          <MenuItem>THOUGHTS SHARING <ArrowIcon className="arrow" /></MenuItem>
          <MenuItemActive>PERSONALISED BLOG <ArrowIcon className="arrow" /></MenuItemActive>
          <MenuItem>PODCAST LISTENING <ArrowIcon className="arrow" /></MenuItem>
          <MenuItem>LISTEN WITH AUDIO <ArrowIcon className="arrow" /></MenuItem>
          <MenuItem>CYBERGUARD SECURITY <ArrowIcon className="arrow" /></MenuItem>
        </LeftMenu>
        <RightContent>
          <WhiteContainer>
            <ImageContainer>
              <FeatureImage src="/img/person7.png" alt="Feature" />
            </ImageContainer>
            <div>
              <FeatureDescription>
                Explore a rich collection of thought-provoking blogs or share your own insights. Our user-friendly platform allows seamless reading and effortless uploading to foster a vibrant community of ideas.
              </FeatureDescription>
              <ButtonContainer>
                <GetStartedButton href="#trynow">TRY NOW</GetStartedButton>
                <ArrowCircle>
                  <ArrowIcon />
                  </ArrowCircle>
              </ButtonContainer>
            </div>
          </WhiteContainer>
        </RightContent>
      </FeaturesWrapper>
    </FeaturesContainer>
  );
};

export default Features;
