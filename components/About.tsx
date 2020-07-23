import React from 'https://dev.jspm.io/react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      p: any;
      br: any;
      a: any;
    }
  }
}

const About = () => {
  return (
    <div className="about">
      <p>
        We are Deno Flowers.
        <br />
        Our mission is to make you and your loved ones happy with our flowers.
        <br />
        If you want to make someone you love happy, send an http POST request to
        our server, in the '/shop' route and a JSON body that details the flower
        you want to buy.
        <br />
        or just go back to <a href="home">the homepage</a> and start shopping!
      </p>
    </div>
  );
};

export default About;
