import React from 'https://dev.jspm.io/react';
import Flower, { FlowerProps } from './Flower.tsx';
import { FlowerContext } from './FlowerContext.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      h1: any;
      div: any;
      img: any;
    }
  }
}

interface FlowerListProps {
  limit?: number;
}

const FlowerList = ({ limit }: FlowerListProps) => {
  // @ts-ignore
  const { flowers }: { flowers: FlowerProps[] } = React.useContext(
    FlowerContext
  );

  if (!limit) limit = flowers.length;
  let list = [...flowers].sort(() => Math.random() - 0.5).splice(0, limit);
  return (
    <div className="flowers">
      {list.map(flower => (
        <Flower {...flower} key={flower._id.$oid} />
      ))}
    </div>
  );
};

export default FlowerList;
