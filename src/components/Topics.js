import React from 'react';
import styled from 'styled-components';

const TopicsContainer = styled.section`
  padding: 50px 20px;
  text-align: center;
  height: 1200px;
  @media (max-width: 768px) {
    height: 2600px;
  }
`;

const TopicTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 10px;
`;

const TopicSubtitle = styled.p`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 30px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 40px auto; /* Center horizontally and add margin-bottom */
  
`;

const TopicButtons = styled.div`
  display: flex;
  background-color: silver;
  border-radius: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const TopicButton = styled.button`
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
    background-color: #f7f7f7;
    color: #333;
  }
`;


const TopicsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const TopicCard = styled.div`
  width: 350px;
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: left;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const CardImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardAuthor = styled.span`
  font-weight: bold;
`;

const CardDate = styled.span`
  font-size: 0.9em;
  color: #666;
`;

const CardContent = styled.div`
  margin-bottom: 15px;
`;

const CardText = styled.p`
  font-size: 1em;
  color: #333;
`;

const CardImageContent = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-top: 10px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardStats = styled.div`
  display: flex;
  align-items: center;
`;

const Stat = styled.span`
  margin-right: 15px;
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 5px;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: inline-block;
  align: center;
  margin-top: 20px;
  margin-left: -150px;
  @media (max-width: 768px) {
    margin-right: 240px;
  }
`;

const GetStartedButton = styled.a`
  display: flex;
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
  z-index: 2; /* Ensure the button is above the circle */

  &:hover {
    background-color: #444;
  }
`;

const ArrowCircle = styled.div`
  position: absolute;
  right: -28px; /* Adjust as needed to center the circle */
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0; /* Ensure the circle is behind the button */
`;

const ArrowIcon = styled.span`
  display: inline-block;
  transform: rotate(0deg);
  &:before {
    content: '\\2192'; /* Unicode character for right arrow */
    font-size: 1.5em;
    color: #333;
  }
`;

const Topics = () => {
  return (
    <TopicsContainer>
      <TopicTitle>EXPLORE YOUR FAVORITE TOPICS</TopicTitle>
      <TopicSubtitle>
        Explore our curated collection of thoughts and perspectives designed to empower and educate on matters of health and well-being. We hope you will love exploring thoughts of different people around the world.
      </TopicSubtitle>
      <FilterContainer>
      <TopicButtons>
        <TopicButton className="active">Health Care</TopicButton>
        <TopicButton>Technology</TopicButton>
        <TopicButton>Fashion</TopicButton>
        <TopicButton>Self Growth</TopicButton>
        <TopicButton>Business</TopicButton>
        <TopicButton>Sports</TopicButton>
      </TopicButtons>
      </FilterContainer>
      <TopicsGrid>
  <TopicCard>
    <CardHeader>
      <CardImage src="/img/person11.png" alt="Author" />
      <CardInfo>
        <CardAuthor>Martha Grace</CardAuthor>
        <CardDate>1 day ago</CardDate>
      </CardInfo>
    </CardHeader>
    <CardContent>
      <CardText>Practice stress management techniques daily 🧘‍♂️. Cultivate inner peace amidst life's challenges.</CardText>
      <CardImageContent src="/img/thing1.png" alt="Content" />
    </CardContent>
    <CardFooter>
      <CardStats>
        <Stat>❤️ 1.2K</Stat>
        <Stat>💬 75</Stat>
        <Stat>🔁 31</Stat>
      </CardStats>
    </CardFooter>
  </TopicCard>
  <TopicCard>
    <CardHeader>
      <CardImage src="/img/person12.png" alt="Author" />
      <CardInfo>
        <CardAuthor>Lija Salvent</CardAuthor>
        <CardDate>Today, 10:23 AM</CardDate>
      </CardInfo>
    </CardHeader>
    <CardContent>
      <CardText>It is critical to emphasize the holistic character of wellbeing, which includes the physical, mental, and emotional aspects of health.</CardText>
      <CardText>Your bosy is a marvelous machine taht needs regular maintenance and care to work properly</CardText>
      <CardText>Begin by putting nutrition first: nourish our body with full, nutrient-dense foods that provide critical vitamins,minerals, and antioxidants. To promote general health,eat a balanced d...</CardText>
    </CardContent>
    <CardFooter>
      <CardStats>
        <Stat>❤️ 1.2K</Stat>
        <Stat>💬 75</Stat>
        <Stat>🔁 19</Stat>
      </CardStats>
    </CardFooter>
  </TopicCard>
  <TopicCard>
    <CardHeader>
      <CardImage src="/img/person13.png" alt="Author" />
      <CardInfo>
        <CardAuthor>Mac Mace</CardAuthor>
        <CardDate>Today, 11:44 AM</CardDate>
      </CardInfo>
    </CardHeader>
    <CardContent>
      <CardText>Stay hydrated, stay healthy 💧. Water is the elixir of life; drink up and thrive!</CardText>
      <CardImageContent src="/img/thing1.png" alt="Content" />
    </CardContent>
    <CardFooter>
      <CardStats>
        <Stat>❤️ 1.2K</Stat>
        <Stat>💬 75</Stat>
        <Stat>🔁 54</Stat>
      </CardStats>
    </CardFooter>
  </TopicCard>
  <TopicCard>
    <CardHeader>
      <CardImage src="/img/person14.png" alt="Author" />
      <CardInfo>
        <CardAuthor>Andy Richardson</CardAuthor>
        <CardDate>1 day ago</CardDate>
      </CardInfo>
    </CardHeader>
    <CardContent>
      <CardText>Move your body, nourish your soul 🌱. Exercise isn’t just about physical health; it’s about mental well-being too.</CardText>
      <CardImageContent src="/img/thing2.png" alt="Content" />
    </CardContent>
    <CardFooter>
      <CardStats>
        <Stat>❤️ 1.2K</Stat>
        <Stat>💬 75</Stat>
        <Stat>🔁 44</Stat>
      </CardStats>
    </CardFooter>
  </TopicCard>
  <TopicCard>
    <CardHeader>
      <CardImage src="/img/person15.png" alt="Author" />
      <CardInfo>
        <CardAuthor>Lola Marina</CardAuthor>
        <CardDate>2 days ago</CardDate>
      </CardInfo>
    </CardHeader>
    <CardContent>
      <CardText>Prioritize regular physical activity. Exercise not only strengthens muscles and bones but also boosts mood, reduces stress, and promotes overall health.</CardText>
      <CardImageContent src="" alt="Content" />
    </CardContent>
    <CardFooter>
      <CardStats>
        <Stat>❤️ 1.2K</Stat>
        <Stat>💬 75</Stat>
        <Stat>🔁 33</Stat>
      </CardStats>
    </CardFooter>
  </TopicCard>
  <TopicCard>
    <CardHeader>
      <CardImage src="/img/person16.png" alt="Author" />
      <CardInfo>
        <CardAuthor>Geric Dunn</CardAuthor>
        <CardDate>Yesterday, 6:33 PM</CardDate>
      </CardInfo>
    </CardHeader>
    <CardContent>
      <CardText>Unforgettable moments captured in nature’s embrace 🌄.</CardText>
      <CardImageContent src="/img/thing3.png" alt="Content" />
    </CardContent>
    <CardFooter>
      <CardStats>
        <Stat>❤️ 1.7K</Stat>
        <Stat>💬 84</Stat>
        <Stat>🔁 10</Stat>
      </CardStats>
    </CardFooter>
  </TopicCard>
</TopicsGrid>
      <ButtonContainer>
          <GetStartedButton href="#exploremore">EXPLORE MORE</GetStartedButton>
          <ArrowCircle>
            <ArrowIcon />
          </ArrowCircle>
      </ButtonContainer>
    </TopicsContainer>
  );
};

export default Topics;
