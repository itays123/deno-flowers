import React from 'https://dev.jspm.io/react';
import FlowerList from './core/FlowerList.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      h2: any;
    }
  }
}

const Home = () => {
  return (
    <div className="home">
      <FlowerList limit={3} />
      <a href="/shop">Go To Shop</a>
    </div>
  );
};

export default Home;
