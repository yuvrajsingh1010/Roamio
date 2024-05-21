import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 50px 20px;
  background-color: #1a1a1a;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 7em;
  color: #F4DDA9;
  margin-bottom: 3px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  max-width: 500px;
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

const LeftBottom = styled.div`
  flex: 1;
  max-width: 500px;
  padding-left: 850px;
  @media (max-width: 768px) {
    margin-left: -400px;
    margin-top: -50px;
  }
`;

const Subtitle = styled.h2`
  font-size: 4em;
  color: #F4DDA9;
  margin-bottom: 20px;
  font-weight: 700;
`;

const InfoText = styled.p`
  font-size: 1.4em;
  line-height: 1.5;
  color: #fff;
`;

const RightSection = styled.div`
  flex: 1;
  max-width: 700px;
`;

const RightBottom = styled.div`
  flex: 1;
  max-width: 100px;
  @media (max-width: 768px) {
    margin-left: -400px;
    margin-top: -5px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin-left: -10px;
    margin-top: 20px;
  }
`;

const Input = styled.input`
  width: 235px;
  margin-bottom: 2px;
  padding: 15px;
  border: none;
  border-radius: 5px;
  background: #333;
  color: #fff;

  &:nth-child(odd) {
    margin-right: 20px;
  }

  &:focus {
    outline: 2px solid #ff7f50;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-left: 150px;

  ${Input} {
    flex: 1;
    margin-right: 10px;
  }

  ${Input}:last-child {
    margin-right: 0;
  }
`;

const Select = styled.select`
  width: 195px;
  margin-bottom: 2px;
  padding: 15px;
  border: none;
  border-radius: 5px;
  background: #333;
  color: #fff;

  &:nth-child(odd) {
    margin-right: 20px;
  }

  &:focus {
    outline: 2px solid #ff7f50;
  }
`;
const Sel = styled.select`
  width: 50px;
  margin-bottom: 2px;
 
  border: none;
  border-radius: 5px;
  background: #333;
  color: #fff;

  &:nth-child(odd) {
    margin-right: 20px;
  }

  &:focus {
    outline: 2px solid #ff7f50;
  }
`;

const TextAreaWrapper = styled.div`
  margin-bottom: 20px;
  width: 73%;
`;

const TextArea = styled.textarea`
  width: 100%;
  margin-bottom: 2px;
  margin-left: 150px;
  padding: 15px;
  border: none;
  border-radius: 5px;
  background: #333;
  color: #fff;
  resize: none;

  &:focus {
    outline: 2px solid #ff7f50;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 150px;
  width: 80%;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 4px;
`;

const CheckboxLabel = styled.label`
  color: #fff;
  font-size: 0.9em;
  width: 100%;
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  background-color: white;
  border: none;
  border-radius: 50px;
  color: black;
  font-size: 0.9em;
  cursor: pointer;
  margin-left: 0px; /* Add some space between checkbox and button */

  &:hover {
    background-color: #ff4500;
  }

  @media (max-width: 768px) {
    margin-left: 0; /* Reset margin for smaller screens */
    width: 100%;
    margin-top: 10px; /* Add some space between checkbox and button for smaller screens */
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: flex-start; /* Align all LinkGroup components to the start */
  flex-wrap: wrap;
  padding-top: 30px;
  border-top: 1px solid #444;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  & > div {
    margin-right: 40px; /* Add some space between LinkGroup components */
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    & > div {
      margin-right: 0; /* Reset margin for smaller screens */
    }
  }
`;

const FooterLink = styled.a`
  color: #C0C0C0;
  text-decoration: none;
  margin-bottom: 10px;
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  height: 50px;
  margin-right: 10px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    margin-right:2030px;
  }
`;

const LogoText = styled.span`
  font-size: 2em;
  font-weight: bold;
  color: white;
  margin-left: 10px; /* Add margin between logo and text */
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <Title>LET'S GET STARTED</Title>
        <LeftSection>
          <Subtitle>FEEL FREE TO CONTACT US</Subtitle>
          <InfoText>Reach out to us with any questions, feedback, or inquiries you may have. Our team is here to assist you every step of the way.</InfoText>
        </LeftSection>
        <RightSection>
          <ContactForm>
            <InputWrapper>
              <Input type="text" placeholder="First Name" required />
              <Input type="text" placeholder="Last Name" required />
            </InputWrapper>
            <InputWrapper>
              <Sel required>
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+61">+61</option>
              </Sel>
              <Input type="tel" placeholder="Phone Number" required />
              <Select required>
                <option value="">Select City</option>
                <option value="New York">New York</option>
                <option value="London">London</option>
                <option value="Sydney">Sydney</option>
                <option value="Mumbai">Mumbai</option>
              </Select>
            </InputWrapper>
            <TextAreaWrapper>
              <TextArea rows="4" placeholder="Write your queries" required></TextArea>
            </TextAreaWrapper>
            <CheckboxContainer>
              <Checkbox id="terms" required />
              <CheckboxLabel htmlFor="terms">By checking this box,you are agreeing to our Terms of Services</CheckboxLabel>
              <SubmitButton type="submit">Submit</SubmitButton>
            </CheckboxContainer>
          </ContactForm>
        </RightSection>
      </ContentContainer>
      <FooterBottom>
        <RightSection>
          <LinkGroup>
            <LogoContainer>
              <Logo src="/img/logo2.png" alt="Thought Logo" />
              <LogoText>Thoughts</LogoText>
            </LogoContainer>
          </LinkGroup>
        </RightSection>
        <LinkGroup>
          <InfoText>Quick Links</InfoText>
          <FooterLink href="/">Thoughts</FooterLink>
          <FooterLink href="/">Blogs</FooterLink>
          <FooterLink href="/">Podcasts</FooterLink>
          <FooterLink href="/">FAQs</FooterLink>
        </LinkGroup>
        <LinkGroup>
          <InfoText>Pricing</InfoText>
          <FooterLink href="/">Changelog</FooterLink>
          <FooterLink href="/">Docs</FooterLink>
        </LinkGroup>
        <LinkGroup>
          <InfoText>Company</InfoText>
          <FooterLink href="/">About Us</FooterLink>
          <FooterLink href="/">Contact Us</FooterLink>
        </LinkGroup>
        <LinkGroup>
          <InfoText>Customer Support</InfoText>
          <FooterLink href="/">hello@contact.com</FooterLink>
          <FooterLink href="/">+26 564 7899</FooterLink>
        </LinkGroup>
        <LinkGroup>
          <InfoText>Elsewhere</InfoText>
          <FooterLink href="/">YouTube</FooterLink>
          <FooterLink href="/">LinkedIn</FooterLink>
          <FooterLink href="/">Twitter</FooterLink>
          <FooterLink href="/">Facebook</FooterLink>
        </LinkGroup>
      </FooterBottom>
      <FooterBottom>
        <RightBottom>
          <FooterLink href="/">@thought</FooterLink>
        </RightBottom>
        <LeftBottom>
          <FooterLink href="/">Privacy Policy&nbsp;&nbsp;Sitemap</FooterLink>
        </LeftBottom>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
