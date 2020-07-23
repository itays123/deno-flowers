import React from 'https://dev.jspm.io/react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      p: any;
      h1: any;
      a: any;
    }
  }
}

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <p>sorry, this page is not available:(</p>
      <a href="/">back to safety</a>
    </div>
  );
};

export default PageNotFound;
