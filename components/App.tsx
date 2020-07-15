import React from 'https://dev.jspm.io/react';

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

// @ts-ignore
const App = ({ url } = { url: window.location.pathname }) => {
  return (
    <div className="app">
      <h1>{url}</h1>
    </div>
  );
};

export default App;
