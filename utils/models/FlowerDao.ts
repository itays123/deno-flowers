import Flower from './Flower.ts';

export default interface FlowerDao {
  getFlowers(): Promise<Flower[]> | Promise<[]>;
  getFlowerById(id: string): Promise<Flower | null>;
  shopFlower(id: string): Promise<Flower | null>;
  likeFlower(id: string, value: 1 | -1): Promise<Flower | null>;
}
