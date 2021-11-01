import { Injectable } from '@nestjs/common';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { DatabaseService } from 'src/database/database.service';
import { CreateCatDto } from './dto/create-cats.dto';

@Injectable()
export class CatsService {

	tableName: string = "cat";

	constructor(private databaseService: DatabaseService) {
	}
	//create
	async criar(createCatDto: CreateCatDto) {
		return await this.databaseService.bd(this.tableName).insert(createCatDto);
	}

	//read
	async buscarAll() {
		const result = await this.databaseService.bd().select().table(this.tableName);
		return result;
	}

	//update

	async update(id: number, cat: CreateCatDto) {
		return await this.databaseService.bd(this.tableName).where('idGato', '=', id)
			.update(cat);
	}

	//deletes
	async delete(id: number) {
		return await this.databaseService.bd(this.tableName).where('idGato', id).delete();
	}

	async getGato(nome: string) {
		return await this.databaseService.bd().select().where('nome', 'like', '%' + nome + '%').from(this.tableName);
	}

	async findOne(email: string): Promise<Cat | undefined> {
		return await this.databaseService.bd().select().where('email', '=', email).from(this.tableName);
	}
}
