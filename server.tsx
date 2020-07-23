import React from 'https://dev.jspm.io/react';
import { Application, Context } from 'https://deno.land/x/abc@v1/mod.ts';
import reactMiddleware from './ssr.tsx';
import App from './components/App.tsx';
import {
  shopFlower,
  likeFlower,
  fetchFlowerById,
  fetchAllFlowers,
} from './utils/flowerController.ts';

const app = new Application();

// backend routes

app
  .get('/flowers', fetchAllFlowers)
  .get('/flowers/:id', fetchFlowerById)
  .put('/flowers/:id', likeFlower)
  .post('/shop/:flowerId', shopFlower);

// frontend routes

app
  .use(reactMiddleware)
  .static('/', 'public')
  .get('/', () => {
    return <App url="/" />;
  })
  .get('/about', () => {
    return <App url="/about" />;
  })
  .get('/shop', () => {
    return <App url="/shop" />;
  })
  .get('/shop/:flowerId', (c: Context) => {
    return <App url={c.url.pathname} />;
  })
  .start({ port: 8080 });

console.log(`server listening on http://localhost:8080`);
