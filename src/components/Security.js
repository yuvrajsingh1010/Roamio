import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  background-color: #DADBDD;
`;

const SectionContainer = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
  @media (max-width: 768px) {
    flex: 100%;
  }
`;

const SecurityTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 10px; /* Adjust margin to decrease space */
  background-image: url('img/download.jpeg');
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

const Cyber = styled.h1`
  font-size: 100px;
  margin-top: 10px; /* Adjust margin to decrease space */
  margin-bottom: 10px; /* Adjust margin to decrease space */
  background-image: url('img/download.jpeg');
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

const SecurityDescription = styled.p`
  font-size: 1.2em;
  margin-right: 300px;
  margin-left: 300px;
  @media (max-width: 768px) {
    font-size: 1em;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex: 100%;
    margin-top: 20px; /* Adds space between the sections on smaller screens */
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;


const Security = () => {
  return (
    <MainContainer>
      <SectionContainer>
        <SecurityTitle>POWERFUL SECURITY BY</SecurityTitle>
        <Cyber>CYBERGUARD</Cyber>
        <SecurityDescription>Empower Ideas, Elevating Voices: Your gateway to Insightful Blogging. Thoughtful Sharing, and Dynamic Podcasting with <b>CyberGuard</b> security welcome to a world beyond words.</SecurityDescription>
      </SectionContainer>
      <ImageContainer>
        <Image src="img/picture3.png" alt="Engaging content" />
      </ImageContainer>
    </MainContainer>
  );
};

export default Security;
