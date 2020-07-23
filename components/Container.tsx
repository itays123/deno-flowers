import React from 'https://dev.jspm.io/react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      h1: any;
      div: any;
      main: any;
      footer: any;
    }
  }
}

export interface ContainerProps {
  children?: any;
  title: string;
  url: string;
}

//@ts-ignore
export const TitleContext = React.createContext();

const Container = ({ children, title, url }: ContainerProps) => {
  // @ts-ignore
  const [displayTitle, setTitle] = React.useState(title);

  return (
    <div className="container">
      <div className="margin"></div>
      <main className={url.replace('/', '')}>
        <div className="brand">
          <h1>{displayTitle}</h1>
        </div>
        <TitleContext.Provider value={{ setTitle }}>
          {children}
        </TitleContext.Provider>
        <footer>Copywrite Itay Schechner 2020</footer>
      </main>
      <div className="margin"></div>
    </div>
  );
};

export default Container;
