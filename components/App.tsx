import React from 'https://dev.jspm.io/react';
import Navbar from './Navbar.tsx';
import Container from './Container.tsx';
import About from './About.tsx';
import PageNotFound from './PageNotFound.tsx';
import Home from './Home.tsx';
import FlowerContextProvider from './core/FlowerContext.tsx';
import Shop from './Shop.tsx';
import FlowerRoute from './core/FlowerRoute.tsx';
import MainContextProvider from './MainContext.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      h1: any;
      div: any;
    }
  }
}

export interface AppProps {
  url: string;
}

const getTitle = (url: string) => {
  switch (url) {
    case '/about':
      return 'About Deno Flowers';
    case '/shop':
      return 'Flower Shop';
    case '/':
      return 'Deno Flowers';
    default:
      return 'Loading...';
  }
};

// @ts-ignore
const App = ({ url }: { url: string }) => {
  return (
    <div className="app">
      <MainContextProvider>
        <Navbar url={url} />
        <Container title={getTitle(url)} url={url}>
          <FlowerContextProvider>
            {url === '/' && <Home />}
            {url === '/about' && <About />}
            {url === '/shop' && <Shop />}
            {url.includes('/shop') && url !== '/shop' && (
              <FlowerRoute id={url.replace('/shop/', '').replace('/', '/')} />
            )}
            {url === '404' && <PageNotFound />}
          </FlowerContextProvider>
        </Container>
      </MainContextProvider>
    </div>
  );
};

export default App;
