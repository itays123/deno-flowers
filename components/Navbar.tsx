import React from 'https://dev.jspm.io/react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      nav: any;
      div: any;
      h1: any;
      ul: any;
      li: any;
      a: any;
    }
  }
}

interface NavbarProps {
  url: string;
}

const Navbar = ({ url }: NavbarProps) => {
  return (
    <nav className="navbar">
      <div className="brand">
        <h1>Deno Flowers</h1>
      </div>
      <ul className="links">
        <li className={url === '/' ? 'active' : ''}>
          <a href="/">Home</a>
        </li>
        <li className={url === '/about' ? 'active' : ''}>
          <a href="/about">About</a>
        </li>
        <li className={url.includes('/shop') ? 'active' : ''}>
          <a href="/shop">Shop</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
