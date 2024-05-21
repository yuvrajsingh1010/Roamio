import React from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import Features from './components/Features';
import Topics from './components/Topics';
import Security from './components/Security';
import Testimonials from './components/Testimonials';
import Insights from './components/Insights';
import Footer from './components/Footer';
import Recentposts from './components/Recentposts';
import Engagingcontent from './components/Engagingcontent';
import Collectstories from './components/Collectstories';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Recentposts />
      <Features />
      <Topics />
      <Engagingcontent />
      <Security />
      <Testimonials />
      <Collectstories />
      <Insights />
      <Footer />
    </div>
  );
};

export default App;
