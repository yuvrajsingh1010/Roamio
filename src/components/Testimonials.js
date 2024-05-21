import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: #fff;
`;

const TestimonialTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 40px;
`;

const TestimonialsGrid = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 20px;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TestimonialCard = styled.div`
  flex: 0 0 auto;
  width: 600px;
  height: 250px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: left;
  display: flex;
  align-items: center;
  scroll-snap-align: start;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 240px;
  border-radius: 10px;
  margin-right: 20px;
`;

const TestimonialCardContent = styled.div`
  flex: 1;
`;

const TestimonialCardTitle = styled.h3`
  font-size: 1.5em;
  margin: 10px 0;
`;

const TestimonialCardRating = styled.div`
  font-size: 1.2em;
  color: #f39c12;
`;

const TestimonialCardDescription = styled.p`
  font-size: 1em;
  color: #666;
  margin: 10px 0;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
  color: #666;
`;

const Stat = styled.div`
  text-align: center;
  font-size: 2em;
  font-style: bold;
  background-color: #fff;
  padding: 10px;
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
  right: 610px;
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
    right:230px;
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

const None = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <TestimonialTitle>WHAT OUR USERS SAY ABOUT US</TestimonialTitle>
      <SectionSubtitle>Thoughts is ruling in the Digital World and our users has something to say about the same. Do check their individual stories of transformation and get inspired today</SectionSubtitle>
      <TestimonialsGrid>
        <TestimonialCard>
          <ProfileImage src="/img/person8.png" alt="Albert Kyle" />
          <TestimonialCardContent>
            <TestimonialCardTitle>Albert Kyle</TestimonialCardTitle>
            <TestimonialCardRating>4.0 ★★★★☆</TestimonialCardRating>
            <TestimonialCardDescription>
              Thoughts is a platform that gives voice to the voiceless in a metaphorical sense. I’ve been here for 1 and a half years and I’ve successfully changed the lives of many through my thoughts about life as a whole.
            </TestimonialCardDescription>
            <Stats>
              <Stat>
                <div>36K</div>
                <div>Thoughts</div>
              </Stat>
              <Stat>
                <div>189</div>
                <div>Blogs</div>
              </Stat>
              <Stat>
                <div>122</div>
                <div>Podcasts</div>
              </Stat>
            </Stats>
          </TestimonialCardContent>
        </TestimonialCard>
        <None>
        <TestimonialCard>
          <ProfileImage src="/img/person9.png" alt="Gia Marcoom" />
        <TestimonialCardContent>
          <TestimonialCardTitle>Gia Marcoom</TestimonialCardTitle>
          <TestimonialCardRating>4.0 ★★★★☆</TestimonialCardRating>
          <TestimonialCardDescription>
            I’ve been using Thoughts to capture my journey and share it with others. It’s tremendously wonderful to see how my ideas connect with people from all areas of life. Thank you, Thoughts, for encouraging connection and understanding!
          </TestimonialCardDescription>
          <Stats>
            <Stat>
              <div>22K</div>
              <div>Thoughts</div>
            </Stat>
            <Stat>
              <div>89</div>
              <div>Blogs</div>
            </Stat>
            <Stat>
              <div>161</div>
              <div>Podcasts</div>
            </Stat>
          </Stats>
          </TestimonialCardContent>
        </TestimonialCard>
        </None>
        <None>
        <TestimonialCard>
          <ProfileImage src="/img/person10.png" alt="Silvy Keto" />
          <TestimonialCardContent>
          <TestimonialCardTitle>Silvy Keto</TestimonialCardTitle>
          <TestimonialCardRating>4.0 ★★★★☆</TestimonialCardRating>
          <TestimonialCardDescription>
            Thoughts has been a transformative platform for me. Sharing my experiences and ideas has never been easier, and the community is incredibly supportive.
          </TestimonialCardDescription>
          <Stats>
            <Stat>
              <div>18K</div>
              <div>Thoughts</div>
            </Stat>
            <Stat>
              <div>67</div>
              <div>Blogs</div>
            </Stat>
            <Stat>
              <div>98</div>
              <div>Podcasts</div>
            </Stat>
          </Stats>
          </TestimonialCardContent>
        </TestimonialCard>
        </None>
      </TestimonialsGrid>
      <ButtonContainer>
          <GetStartedButton href="#allreview">ALL REVIEW</GetStartedButton>
          <ArrowCircle>
            <ArrowIcon />
          </ArrowCircle>
        </ButtonContainer>
    </TestimonialsContainer>
  );
};

export default Testimonials;