import { Injectable } from '@nestjs/common';
import knexfn, { Knex } from 'knex';

@Injectable()
export class DatabaseService {
 public	bd: Knex;
	constructor() {
		this.bd = knexfn({
			client: 'mysql',
			connection: {
				host : 'localhost',
   			port : 3306,
    		user : 'root',
    		password : '1234',
    		database : 'catssystem'
			}
		});
	}
}
