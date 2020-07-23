import { HttpException } from 'https://deno.land/x/abc@v1/mod.ts';

export default class FlowerNotFoundException extends HttpException {
  constructor() {
    super('Flower not found', 404);
  }
}
