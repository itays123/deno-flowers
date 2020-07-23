import React from 'https://dev.jspm.io/react';
import { TitleContext } from '../Container.tsx';
import { MainContext } from '../MainContext.tsx';
import { FlowerContext } from './FlowerContext.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      h1: any;
      div: any;
      img: any;
      h2: any;
      button: any;
    }
  }
}

const exampleDesc =
  'this flower is an example flower. \n' +
  'it is not real. \n' +
  "it doesn't have a picture.\n" +
  "this flower isn't physical but digital.\n" +
  'shopping it would be a waste of money.';

const FlowerRoute = ({ id }: { id: string }) => {
  // @ts-ignore
  const { setTitle } = React.useContext(TitleContext);
  // @ts-ignore
  const server = React.useContext(MainContext);
  // @ts-ignore
  const { getFlowerById, refresh, flowers, set } = React.useContext(
    FlowerContext
  );
  // @ts-ignore
  const [flower, setFlower] = React.useState({});
  // @ts-ignore
  React.useEffect(() => {
    setFlower(() => {
      const f = getFlowerById(id);
      if (!f) return {};
      else return f;
    });
    setTitle(() => {
      const f = getFlowerById(id);
      if (!f) return 'Loading...';
      else return f.name;
    });
  }, [flowers]);

  const handleShopReq = () => server.fetchShopFlower(id).then(() => refresh());

  const handleLikeReq = () =>
    server
      .fetchLikeFlower(id, 1)
      .then((flower: any) => set(id, 'likes', flower?.likes));

  return (
    <div className="flower-route">
      <div className="info">
        <div className="desc">
          {(flower.desc || exampleDesc)
            .split('\n')
            .map((t: string, i: number) => (
              <p key={i}>{t}</p>
            ))}
        </div>
        <div className="actions">
          <button className="btn like" onClick={handleLikeReq}>
            Like ({flower.likes} likes)
          </button>
          <button className="btn shop" onClick={handleShopReq}>
            shop ({flower.price}$)
          </button>
        </div>
      </div>
      <div className="image">
        <img src={flower.imageUrl || '/img/example_flower.png'} alt="" />
      </div>
    </div>
  );
};

export default FlowerRoute;
