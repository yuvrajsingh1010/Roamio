import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 40px auto; /* Center horizontally and add margin-bottom */
`;

const FilterBackground = styled.div`
  display: flex;
  background-color: silver;
  border-radius: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const FilterButton = styled.button`
  background-color: silver;
  color: #333;
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
  }

  &.active {
    background-color: #fff;
    color: #333;
  }
`;

const PostsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PostCard = styled.div`
  width: 400px;
  margin: 10px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const PostCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const PostCardAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const PostCardUserInfo = styled.div`
  text-align: left;
`;

const PostCardUserName = styled.h4`
  font-size: 1.2em;
  margin: 0;
`;

const PostCardTime = styled.span`
  font-size: 0.9em;
  color: #999;
`;

const PostCardContent = styled.p`
  font-size: 1em;
  color: #333;
  margin: 10px 0;
  text-align: left;
`;

const PostCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const PostCardStats = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 0.9em;
    color: #666;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
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
  right: 615px;
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
    right: 235px;
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

const RecentPosts = () => {
  return (
    <SectionContainer>
      <SectionTitle>DISCOVER THE MOST RECENT POSTS</SectionTitle>
      <SectionSubtitle>
        Empower Ideas, Elevating Voices: Your Gateway to Insightful Blogging, Thoughtful Sharing, and
        Dynamic Podcasting with CyberGuard Security. Welcome to a World Beyond Words.
      </SectionSubtitle>
      <FilterContainer>
        <FilterBackground>
          <FilterButton className="active">Thoughts</FilterButton>
          <FilterButton>Blogs</FilterButton>
          <FilterButton>Podcast</FilterButton>
        </FilterBackground>
      </FilterContainer>
      <PostsGrid>
         <PostCard>
          <PostCardHeader>
            <PostCardAvatar src="/img/person1.png" alt="User Avatar" />
            <PostCardUserInfo>
              <PostCardUserName>Lily Oliver</PostCardUserName>
              <PostCardTime>Yesterday, 11:20 PM</PostCardTime>
            </PostCardUserInfo>
          </PostCardHeader>
          <PostCardContent>
            Kindness costs nothing, but its value is immeasurable. Spread love and positivity wherever you go.
          </PostCardContent>
          <PostCardFooter>
            <PostCardStats>
              <span>1.6K ❤</span>
              <span>95 💬</span>
              <span>23 🔄</span>
            </PostCardStats>
          </PostCardFooter>
        </PostCard>
        <PostCard>
          <PostCardHeader>
            <PostCardAvatar src="/img/person2.png" alt="User Avatar" />
            <PostCardUserInfo>
              <PostCardUserName>John Martin</PostCardUserName>
              <PostCardTime>Today, 07:36 AM</PostCardTime>
            </PostCardUserInfo>
          </PostCardHeader>
          <PostCardContent>
            Chase your passion, not perfection. Success lies in the pursuit of what sets your soul on fire.
          </PostCardContent>
          <PostCardFooter>
            <PostCardStats>
              <span>1.2K ❤</span>
              <span>75 💬</span>
              <span>54 🔄</span>
            </PostCardStats>
          </PostCardFooter>
        </PostCard>
        <PostCard>
          <PostCardHeader>
            <PostCardAvatar src="/img/person3.png" alt="User Avatar" />
            <PostCardUserInfo>
              <PostCardUserName>Lucas Ryan</PostCardUserName>
              <PostCardTime>Today, 08:46 AM</PostCardTime>
            </PostCardUserInfo>
          </PostCardHeader>
          <PostCardContent>
            Embrace change, for it is the only constant in life. Adaptability is the key to growth and resilience.
          </PostCardContent>
          <PostCardFooter>
            <PostCardStats>
              <span>2.2K ❤</span>
              <span>45 💬</span>
              <span>23 🔄</span>
            </PostCardStats>
          </PostCardFooter>
        </PostCard>
        <PostCard>
          <PostCardHeader>
            <PostCardAvatar src="/img/person4.png" alt="User Avatar" />
            <PostCardUserInfo>
              <PostCardUserName>Cally York</PostCardUserName>
              <PostCardTime>Today, 03:54 PM</PostCardTime>
            </PostCardUserInfo>
          </PostCardHeader>
          <PostCardContent>
            Believe in yourself, even when others doubt you. Your inner strength is your greatest asset.
          </PostCardContent>
          <PostCardFooter>
            <PostCardStats>
              <span>1.9K ❤</span>
              <span>53 💬</span>
              <span>25 🔄</span>
            </PostCardStats>
          </PostCardFooter>
        </PostCard>
        <PostCard>
          <PostCardHeader>
            <PostCardAvatar src="/img/person5.png" alt="User Avatar" />
            <PostCardUserInfo>
              <PostCardUserName>Mona Roy</PostCardUserName>
              <PostCardTime>Today, 03:27 PM</PostCardTime>
            </PostCardUserInfo>
          </PostCardHeader>
          <PostCardContent>
            Be the reason someone smiles today. Kindness has a ripple effect that knows no bounds.
          </PostCardContent>
          <PostCardFooter>
            <PostCardStats>
              <span>2K ❤</span>
              <span>68 💬</span>
              <span>40 🔄</span>
            </PostCardStats>
          </PostCardFooter>
        </PostCard>
        <PostCard>
          <PostCardHeader>
            <PostCardAvatar src="/img/person6.png" alt="User Avatar" />
            <PostCardUserInfo>
              <PostCardUserName>Mona James</PostCardUserName>
              <PostCardTime>2 days ago</PostCardTime>
            </PostCardUserInfo>
          </PostCardHeader>
          <PostCardContent>
            Dear future leader of the world, you are capable of more than you know. Believe in your potential and watch...
          </PostCardContent>
          <PostCardFooter>
            <PostCardStats>
              <span>2.3K ❤</span>
              <span>69 💬</span>
              <span>40 🔄</span>
            </PostCardStats>
          </PostCardFooter>
        </PostCard>
      </PostsGrid>
      <ButtonContainer>
          <GetStartedButton href="#viewmore">VIEW MORE</GetStartedButton>
          <ArrowCircle>
            <ArrowIcon />
          </ArrowCircle>
        </ButtonContainer>
    </SectionContainer>
  );
};

export default RecentPosts;
