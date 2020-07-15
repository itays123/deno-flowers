import React from 'https://dev.jspm.io/react';
import { Application } from 'https://deno.land/x/abc@v1/mod.ts';
import reactMiddleware from './middleware/ssr.tsx';
import App from './components/App.tsx';

const app = new Application();

app.use(reactMiddleware);

app
  .static('/', 'public')
  .get('/', () => {
    return <App url="/" />;
  })
  .start({ port: 8080 });

console.log(`server listening on http://localhost:8080`);
