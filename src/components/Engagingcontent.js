import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  background-color: #f4e7d3;
`;

const SectionContainer = styled.section`
  flex: 1;
  padding: 50px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 1em;
    margin: 20px 0 10px;
  }
`;

const Title = styled.h1`
  font-size: 5.5em;
  color: #333;
  margin: 20px 0 10px;
  font-weight: 700;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 1.5em;
    font-weight: 1000;
    line-height: 1.2;
    margin: 20px 0 10px;
  }
`;

const Thoughts = styled.p`
  color: #333;
  font-size: 1.5em;
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #333;
  background-color: #f4e7d3;/* Match the background color */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const ArrowIcon = styled.span`
  font-size: 1.5em;
  color: #333;
  transform: rotate(0deg);
  &:before {
    content: '\\2192';
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    height: 280px;
    max-width: 400px;
  }
`;

const EngagingContent = () => {
  return (
    <MainContainer>
      <SectionContainer>
        <Title>IMMERSE IN ENGAGING CONTENT</Title>
        <Thoughts>
          Dive into the ocean of content from thought-provoking ideas,
          in-depth, and insightful podcasts.
        </Thoughts>
        <ButtonContainer>
          <GetStartedButton href="#getstarted">EXPLORE NOW</GetStartedButton>
          <ArrowCircle>
            <ArrowIcon />
          </ArrowCircle>
        </ButtonContainer>
      </SectionContainer>
      <SectionContainer>
        <ImageContainer>
          <Image src="/img/picture2.png" alt="Engaging content" />
        </ImageContainer>
      </SectionContainer>
    </MainContainer>
  );
};

export default EngagingContent;
