import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { DatabaseService } from 'src/database/database.service';
import { CreateCatDto } from './dto/create-cats.dto';

@Injectable()
export class CatsService {
	constructor(private databaseService: DatabaseService) {
	}
	private readonly cats: Cat[] = [];

	create(cat: Cat) {
		this.cats.push(cat);
	}
	findAll(): Cat[] {
		this.databaseService.bd().select().table("cat")
			.then(result => {
				return result;
			}).catch(error => {
				console.log("erro ao buscar cats error: " + error);
			});
		return this.cats;
	}
	async buscarAll() {
		const result = await this.databaseService.bd().select().table('cat');
		console.log("result " + result);
		return result;
	}
	async criar(createCatDto: CreateCatDto) {
		return await this.databaseService.bd('cat').insert(createCatDto);
	}

}
