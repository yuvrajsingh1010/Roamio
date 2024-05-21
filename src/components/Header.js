import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #f4e7d3;
  height: 1600px;
  padding: 40px 20px; /* Adjusted padding to match the image */
  text-align: center;
  @media (max-width: 768px) {
    height: 1200px;
  }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  @media (max-width: 768px) {
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  margin-right: 10px;
`;

const LogoText = styled.span`
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  margin: 0 15px;
  font-size: 1.2em;
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
  
  &:hover {
    color: #666;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.a`
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 1em;
  text-decoration: none;
  border-radius: 20px;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
`;

const LoginButton = styled(Button)`
  background-color: transparent;
  color: #333;
  border: 1px solid #333;
  
  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const SignUpButton = styled(Button)`
  background-color: #333;
  color: #fff;
  border: 1px solid #333;

  &:hover {
    background-color: transparent;
    color: #333;
  }
`;

const Title = styled.h1`
  font-size: 9em; /* Adjusted font size to match the image */
  color: #333;
  margin: 20px 0 10px;
  font-weight: 700; /* Added font-weight to match boldness */
  line-height: 1.2; /* Adjusted line-height for better readability */
  background-image: url('img/download.jpeg');
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  @media (max-width: 768px) {
    font-size: 6em; /* Adjusted font size to match the image */
    color: #333;
    margin: 20px 0 10px;
    font-weight: 700; /* Added font-weight to match boldness */
    line-height: 1.2;
  }
`;

const Subtitle = styled.p`
  font-size: 2.5em; /* Adjusted font size to match the image */
  color: #aa5909;
  z-index:1;
  text-shadow: 4px 2px 2px #f4e7d3;
  margin: 0;
  font-weight: 500; 
  position: absolute;
  top: 20%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  text-align:right; 
  direction:lrt;
  font-family: 𝘚𝘢𝘯𝘴-𝘴𝘦𝘳𝘪𝘧 𝘐𝘵𝘢𝘭𝘪𝘤;
  font-weight: 700;
  font-style: normal; 
  @media (max-width: 768px) {
    font-size: 20px;
    font-weight: 700; /* Added font-weight to match boldness */
    line-height: 1.2;
    
  }
`;
const Thoughts = styled.p`
  color: #333;
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
  right: 600px;
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
  @media (max-width: 768px) {
    right: 220px;
  }
`;

const ArrowIcon = styled.span`
  font-size: 1.5em;
  color: #333;
  transform: rotate(0deg);
  &:before {
    content: '\\2192';
  }
`;

const Picture = styled.img`
  margin-top: 100px;
  border-radius: 50px;
  @media (max-width: 768px) {
    width: 700px;
  }
`;
const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f4e7d3;
  padding: 20px;
  border-radius: 20px;
`;

const StatBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #fdebd3;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CheckCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #333;
  margin-right: 15px;
  font-size: 20px;
  color: #333;
`;

const StatText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StatNumber = styled.span`
  font-size: 2em;
  font-weight: bold;
  color: #333;
`;

const StatLabel = styled.span`
  font-size: 1.2em;
  color: #666;
`;
const Header = () => {
  return (
    <HeaderContainer>
      <NavBar>
        <LeftContainer>
          <Logo src="/img/logo.png" alt="Thought Logo" />
          <LogoText>Thought</LogoText>
        </LeftContainer>
        <RightContainer>
          <NavLink href="#thoughts" aria-label="Thoughts">Thoughts</NavLink>
          <NavLink href="#blog" aria-label="Blog">Blog</NavLink>
          <NavLink href="#podcasts" aria-label="Podcasts">Podcasts</NavLink>
          <NavLink href="#pricing" aria-label="Pricing">Pricing</NavLink>
          <NavLink href="#contactus" aria-label="Contact Us">Contact Us</NavLink>
          <LoginButton href="#login" aria-label="Login">Login</LoginButton>
          <SignUpButton href="#signup" aria-label="Sign Up">Sign Up</SignUpButton>
        </RightContainer>
      </NavBar>
      <Title>WHERE EVERY THOUGHT IS HEARD.</Title>
      <Subtitle>𝘚𝘩𝘢𝘳𝘦 𝘠𝘰𝘶𝘳 𝘐𝘯𝘥𝘦𝘱𝘦𝘯𝘥𝘦𝘯𝘵 𝘛𝘩𝘰𝘶𝘨𝘩𝘵𝘴!!</Subtitle>
      <Logo src="/img/worldwide.png" alt="Thought Logo" />
      <Thoughts>Introducing Thoughts-Where every voice and every thoought can be shared 
        effortlessly via tweets or in a form of engaging blogs.</Thoughts>
        <ButtonContainer>
          <GetStartedButton href="#getstarted">GET STARTED</GetStartedButton>
          <ArrowCircle>
            <ArrowIcon />
          </ArrowCircle>
        </ButtonContainer>
      <Picture src="/img/picture.png" alt="Thought Logo" />
      <StatsContainer>
        <StatBox>
          <CheckCircle>&#10003;</CheckCircle>
          <StatText>
            <StatNumber>30K</StatNumber>
            <StatLabel>Daily Thoughts</StatLabel>
          </StatText>
        </StatBox>
        <StatBox>
          <CheckCircle>&#10003;</CheckCircle>
          <StatText>
            <StatNumber>25K</StatNumber>
            <StatLabel>Daily Blogs</StatLabel>
          </StatText>
        </StatBox>
        <StatBox>
          <CheckCircle>&#10003;</CheckCircle>
          <StatText>
            <StatNumber>22K</StatNumber>
            <StatLabel>Daily Podcasts</StatLabel>
          </StatText>
        </StatBox>
      </StatsContainer>
    </HeaderContainer>
  );
};

export default Header;
