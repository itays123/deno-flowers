this project was boostraped, bundled and structured by me. <br />
github user: itays123.

# Deno Flowers

## Backend Architecture

This backend is a fully object-oriented backend, meaning you can change the database with just one line of code defining the service type in the `utils/flowerController.ts`.

In order to create a new database service, create a new TypeScript class and implement the `flowerDao` interface, located in `utils/models/flowerDao.ts`.<br />
You can use any database you want, as long as all methods in the interfaces are returning the right information.<br />
After your service is ready, replace it with the current service defined in `utils/flowerController.ts`. The controller will automatically fetch the information usiong your service, without having to change more than one line of code.

## Frontend Architecture

### Pages
- `/` - The home page
- `/about` - The about page
- `/shop` - The main shopping page
- `/shop/:id` - The item page

### Core components
- The `FlowerContextProvider` is responsible for fetching shop items from the server.
- The `FlowerList` component is responsible for displaying the flowers is a responsive structure, as a list of the `Flower` component.
- The `FlowerRoute` component is the individual route for each flower.

## Available scripts

### Bundling

To bundle the app, run `deno bundle client.tsx > public/app.js`

### Running

To run the app, run deno run `--allow-read --allow-net --allow-write --unstable server.tsx`<br />
**Note: you must bundle the app first**

## Improvements

feel free to open issues and suggest any improvments you have in mind:)

