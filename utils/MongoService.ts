import FlowerDao from './models/FlowerDao.ts';
import { Collection } from 'https://deno.land/x/mongo/mod.ts';
import MongoDB from './models/MongoDB.ts';
import Flower from './models/Flower.ts';
import 'https://deno.land/x/dotenv/load.ts';

/*
 as of July 22, 2020 the connect() method of this class makes the deno runtime to crash
*/

export default class MongoService implements FlowerDao {
  private flowers: Collection<Flower>;

  constructor() {
    const dbname: string = Deno.env.get('DB_NAME')!;
    const dblink: string = Deno.env.get('DB_HOST_URL')!;
    const mongoDB = new MongoDB(dbname, dblink);
    mongoDB.connect();
    this.flowers = mongoDB.getDatabase.collection('flowers');
  }

  async getFlowers() {
    const flowers: Flower[] = await this.flowers.find();
    return flowers;
  }

  async getFlowerById(id: string) {
    const flower: Flower | null = await this.flowers.findOne({
      _id: { $oid: id },
    });
    return flower;
  }

  async shopFlower(id: string) {
    const flower = await this.getFlowerById(id);
    return flower;
  }

  async likeFlower(id: string, value: 1 | -1) {
    const flower = await this.getFlowerById(id);
    if (flower) {
      flower.likes += value;
      await this.flowers.updateOne({ _id: { $oid: id } }, flower);
    }
    return flower;
  }
}
