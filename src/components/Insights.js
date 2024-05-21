import React from 'react';
import styled from 'styled-components';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

const InsightsContainer = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: #fff;
`;

const InsightsTitle = styled.h2`
  font-size: 4em;
  margin-bottom: 20px;
`;

const InsightsSubtitle = styled.p`
  font-size: 1em;
  color: #666;
  margin-bottom: 40px;
`;

const InsightsGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const InsightCard = styled.div`
  width: 390px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: left;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ProfileInfo = styled.div`
  font-size: 0.9em;
  color: #333;
`;

const ProfileName = styled.div`
  font-weight: bold;
`;

const PostType = styled.div`
  color: #999;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 15px 0;
`;

const PostDescription = styled.p`
  font-size: 1em;
  color: #666;
`;

const PostStats = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
  color: #999;
  margin-top: 10px;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
`;

const StatIcon = styled.div`
  margin-right: 5px;
`;

const Timestamp = styled.div`
  font-size: 0.8em;
  color: #999;
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
  right: 609px;
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

const Insights = () => {
  return (
    <InsightsContainer>
      <InsightsTitle>OUR LATEST INSIGHTS</InsightsTitle>
      <InsightsSubtitle>
        Stay updated and inspired with our latest insights into a variety of topics, ranging from technology trends to lifestyle tips.
      </InsightsSubtitle>
      <InsightsGrid>
        <InsightCard>
          <ProfileSection>
            <ProfileImage src="img/person17.png" alt="Litton Das" />
            <ProfileInfo>
              <ProfileName>Litton Das</ProfileName>
              <PostType>Thought</PostType>
            </ProfileInfo>
          </ProfileSection>
          <PostDescription>The journey to wellness begins with a single thought. Choose positivity and watch your health flourish.</PostDescription>
          <PostImage src="img/thing4.png" alt="Meditation" />
          <PostStats>
            <Stat>
              <StatIcon><FaHeart /></StatIcon> 1.2K
            </Stat>
            <Stat>
              <StatIcon><FaComment /></StatIcon> 75
            </Stat>
            <Stat>
              <StatIcon><FaShare /></StatIcon> 26
            </Stat>
            <Timestamp>Today, 03:22 AM</Timestamp>
          </PostStats>
        </InsightCard>
        <InsightCard>
          <ProfileSection>
            <ProfileImage src="img/person18.png" alt="Jeva Star" />
            <ProfileInfo>
              <ProfileName>Jeva Star</ProfileName>
              <PostType>Blog</PostType>
            </ProfileInfo>
          </ProfileSection>
          <PostDescription>Your body hears everything your mind says. Speak kindly to yourself and watch your health thrive.</PostDescription>
          <PostImage src="img/thing5.png" alt="Sunset" />
          <PostStats>
            <Stat>
              <StatIcon><FaHeart /></StatIcon> 1.2K
            </Stat>
            <Stat>
              <StatIcon><FaComment /></StatIcon> 75
            </Stat>
            <Stat>
              <StatIcon><FaShare /></StatIcon> 41
            </Stat>
            <Timestamp>Yesterday, 04:36 PM</Timestamp>
          </PostStats>
        </InsightCard>
        <InsightCard>
          <ProfileSection>
            <ProfileImage src="img/person19.png" alt="Cool Katoo" />
            <ProfileInfo>
              <ProfileName>Cool Katoo</ProfileName>
              <PostType>Thought</PostType>
            </ProfileInfo>
          </ProfileSection>
          <PostDescription>Every small step towards a healthier lifestyle counts. Start today and let your future self thank you.</PostDescription>
          <PostImage src="img/thing6.png" alt="Running" />
          <PostStats>
            <Stat>
              <StatIcon><FaHeart /></StatIcon> 1.2K
            </Stat>
            <Stat>
              <StatIcon><FaComment /></StatIcon> 75
            </Stat>
            <Stat>
              <StatIcon><FaShare /></StatIcon> 43
            </Stat>
            <Timestamp>Yesterday, 09:53 PM</Timestamp>
          </PostStats>
        </InsightCard>
      </InsightsGrid>
      <ButtonContainer>
          <GetStartedButton href="#viewomre">VIEW MORE</GetStartedButton>
          <ArrowCircle>
            <ArrowIcon />
          </ArrowCircle>
        </ButtonContainer>
    </InsightsContainer>
  );
};

export default Insights;
