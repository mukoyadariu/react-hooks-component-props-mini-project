import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import data from '../data/blog';

const App = () => {
  return (
    <div className="App">
      <Header name="Your Blog Name" />
      <About />
      <ArticleList posts={data.posts} />
    </div>
  );
};

export default App;
