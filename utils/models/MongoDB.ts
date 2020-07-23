import { MongoClient } from 'https://deno.land/x/mongo/mod.ts';

export default class MongoDB {
  private client: MongoClient;
  private url: string;
  private dbName: string;

  constructor(dbName: string, url: string) {
    this.dbName = dbName;
    this.url = url;
    this.client = {} as MongoClient;
  }

  connect() {
    const client = new MongoClient();
    client.connectWithUri(this.url);
    this.client = client;
  }

  get getDatabase() {
    return this.client.database(this.dbName);
  }
}
