import React from 'https://dev.jspm.io/react';
import FlowerList from './core/FlowerList.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}

const Shop = () => {
  return (
    <div className="shop">
      <FlowerList />
    </div>
  );
};

export default Shop;
