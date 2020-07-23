import React from 'https://dev.jspm.io/react';
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';
import { Context, HandlerFunc } from 'https://deno.land/x/abc@v1/mod.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

const template = (ssr: string) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/app.css" />
    <title>Deno Flowers</title>
  </head>
  <body>
    <div id="root">
      ${ssr}
    </div>
    <script src="/app.js"></script>
  </body>
</html>
`;

export default (next: HandlerFunc) => (c: Context) => {
  let e = next(c);
  //@ts-ignore
  if (React.isValidElement(e)) {
    //@ts-ignore
    let ssr = ReactDOMServer.renderToString(e);
    e = template(ssr);
  }

  return e;
};

export const serveReactApp = (el: any) => {
  //@ts-ignore
  if (React.isValidElement(el)) {
    //@ts-ignore
    let ssr = ReactDOMServer.renderToString(el);
    return template(ssr);
  }

  return template('');
};
