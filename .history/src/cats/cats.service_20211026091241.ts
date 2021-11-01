import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CatsService {
	constructor(private databaseService: DatabaseService) {
	}
	private readonly cats: Cat[] = [];

	create(cat: Cat) {
		this.cats.push(cat);
	}
	findAll(): Cat[]{
		return this.cats;
	}
	criar() {
		this.databaseService.bd('cat').insert({ nome: 'a233ff' }).then(result => {
			console.log("Sucesso");
		}).catch(error => {
			console.log("ERRO");
		});
	}
	
}
