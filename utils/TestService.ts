import FlowerDao from './models/FlowerDao.ts';
import Flower from './models/Flower.ts';

const exampleFlowers: Flower[] = [
  {
    _id: { $oid: '1' },
    name: 'rose',
    price: 10,
    likes: 0,
    desc:
      'Roses are native primarily to the temperate regions of the Northern Hemisphere. Many roses are cultivated for their beautiful flowers,\n which range in colour from white through various tones of yellow and pink to dark crimson and maroon',
    imageUrl: '/img/rose.png',
  },
  {
    _id: { $oid: '2' },
    name: 'tulip',
    price: 15,
    likes: 0,
    desc:
      'Tulip flowers occur in a wide range of colours except true blue—from purest white through all shades of yellow and red to brown and deepest purple to almost black. Almost 4,000 horticultural varieties have been developed.',
    imageUrl: '/img/tulip.png',
  },
  {
    _id: { $oid: '3' },
    name: 'poppy',
    price: 6,
    likes: 0,
    desc:
      'Poppies have lobed or dissected leaves, milky sap, often nodding buds on solitary stalks, and four- to six-petaled flowers with numerous stamens surrounding the ovary. The two sepals usually drop off as the petals unfold.',
    imageUrl: '/img/example_flower.png',
  },
  {
    _id: { $oid: '4' },
    name: 'cactus',
    price: 8,
    likes: 0,
    desc:
      'Cactuses are succulent perennial plants.\nA Cactus generally have thick herbaceous or woody chlorophyll-containing stems.',
    imageUrl: '/img/cactus.png',
  },
  {
    _id: { $oid: '5' },
    name: 'dahlia',
    price: 10,
    likes: 0,
    desc:
      'Dahlias are tuberous perennials, and most have simple leaves that are segmented and toothed or cut. The compound flowers may be white, yellow, red, or purple in colour.',
    imageUrl: '/img/dahlia.png',
  },
  {
    _id: { $oid: '6' },
    name: 'jasmine',
    price: 12,
    likes: 0,
    desc:
      'jasmines have climbing branches without tendrils. The white, yellow, or rarely pink flowers are tubular with a flaring, lobed, pinwheel-like form.',
    imageUrl: '/img/jasmine.png',
  },
];

export default class TestService implements FlowerDao {
  private flowers: Flower[];

  constructor() {
    this.flowers = exampleFlowers;
  }

  async getFlowers() {
    return this.flowers;
  }

  async getFlowerById(id: string) {
    const flower = this.flowers.filter(flower => flower._id.$oid === id)[0];
    return flower;
  }

  async shopFlower(id: string) {
    const flower = await this.getFlowerById(id);
    return flower;
  }

  async likeFlower(id: string, value: 1 | -1) {
    const flower = await this.getFlowerById(id);
    if (flower && (value === 1 || value === -1)) {
      let index = this.flowers.indexOf(flower);
      flower.likes += value;
      this.flowers[index] = flower;
    }
    return flower;
  }
}
