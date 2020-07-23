import React from 'https://dev.jspm.io/react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      h1: any;
      div: any;
      img: any;
      p: any;
      a: any;
    }
  }
}

export interface FlowerProps {
  name: string;
  price: number;
  likes: number;
  _id: {
    $oid: string;
  };
  imageUrl?: string;
  key?: any;
}

const Flower = (flower: FlowerProps) => (
  <div className="flower">
    <img alt="" src={flower.imageUrl || '/img/example_flower.png'} />
    <h1>{flower.name}</h1>
    <p>{flower.likes} likes</p>
    <p>{flower.price}$</p>
    <a href={`/shop/${flower._id.$oid}`}>learn more</a>
  </div>
);

export default Flower;
