import React from 'https://dev.jspm.io/react';
import ReactDOM from 'https://dev.jspm.io/react-dom';
import App from './components/App.tsx';

window.addEventListener('DOMContentLoaded', () => {
  // @ts-ignore
  ReactDOM.hydrate(
    //@ts-ignore
    <App url={window.location.pathname} />,
    //@ts-ignore
    document.getElementById('root')
  );
});
