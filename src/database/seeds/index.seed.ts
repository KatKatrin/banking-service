import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import Account from '../../entity/Account';
import Card from '../../entity/Card';

export default class CreateAccount implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Account)().createMany(2);
   

    // await factory(Card)().createMany(2)
  }
}