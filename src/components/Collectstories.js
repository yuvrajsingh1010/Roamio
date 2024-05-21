import React from 'react';
import styled from 'styled-components';


const FeaturesContainer = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: #18171E; /* Adjust based on image */
`;

const FeatureTitle = styled.h2`
font-size: 6em; /* Adjusted font size to match the image */
color: #F4DDA9;
margin: 20px 0 10px;
font-weight: 700; /* Added font-weight to match boldness */
line-height: 1.2; /* Adjusted line-height for better readability */
@media (max-width: 768px) {
  font-size: 4em; /* Adjusted font size to match the image */
  margin: 20px 0 10px;
  font-weight: 700; /* Added font-weight to match boldness */
  line-height: 1.2;
}
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
  background-color: #F4DDA9;
  color: #000;
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
  right: 608px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  color: #F4DDA9;
  border-radius: 50%;
  border: 2px solid #F4DDA9;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  @media (max-width: 768px) {
    right:230px;
  }
`;

const ArrowIcon = styled.span`
  font-size: 1.5em;
  color: #F4DDA9;
  transform: rotate(0deg);
  &:before {
    content: '\\2192';
  }
`;
const Collectstories = () => {
  return (
    <div>
      <FeaturesContainer>
        <FeatureTitle>COLLECT STORIES & SEEK INSPIRATION!</FeatureTitle>
        <ButtonContainer>
          <GetStartedButton href="#getstarted">Sign Up Now</GetStartedButton>
          <ArrowCircle>
            <ArrowIcon />
          </ArrowCircle>
        </ButtonContainer>
      </FeaturesContainer>
    </div>
  );
};

export default Collectstories;
