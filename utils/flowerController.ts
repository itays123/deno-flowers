import { Context } from 'https://deno.land/x/abc@v1/mod.ts';
import MongoService from './MongoService.ts';
import FlowerDao from './models/FlowerDao.ts';
import TestService from './TestService.ts';
import FlowerNotFoundException from './errors/FlowerNotFoundException.ts';

let service: FlowerDao;
service = new TestService();
// service = new MongoService(); // not working as of July 23, 2020

const fetchAllFlowers = async (c: Context) => {
  let flowers = await service.getFlowers();
  return c.json(flowers);
};

const fetchFlowerById = async (c: Context) => {
  let flower = await service.getFlowerById(c.params.id);
  if (flower) return c.json(flower);
  else throw new FlowerNotFoundException();
};

const likeFlower = async (c: Context) => {
  let body: { value: 1 | -1 } = await c.body();
  let flower = await service.likeFlower(c.params.id, body.value);
  if (flower) return c.json(flower);
  else throw new FlowerNotFoundException();
};

const shopFlower = async (c: Context) => {
  let flower = await service.shopFlower(c.params.flowerId);
  if (flower) return flower;
  else throw new FlowerNotFoundException();
};

export { fetchAllFlowers, fetchFlowerById, likeFlower, shopFlower };
