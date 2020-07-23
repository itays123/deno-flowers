export default interface Flower {
  name: string;
  price: number;
  likes: number;
  _id: {
    $oid: string;
  };
  imageUrl?: string;
  desc?: string;
}
