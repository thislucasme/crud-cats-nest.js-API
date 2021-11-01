import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateCatDto } from './dto/create-cats.dto';

@Injectable()
export class CatsService {
	constructor(private databaseService: DatabaseService) {
	}
	//create
	async criar(createCatDto: CreateCatDto) {
		return await this.databaseService.bd('cat').insert(createCatDto);
	}

	//read
	async buscarAll() {
		const result = await this.databaseService.bd().select().table('cat');
		return result;
	}

	//update

	async update(id: number, cat: CreateCatDto) {
		return await this.databaseService.bd('cat').where('idGato', '=', id)
			.update(cat);
	}

	//deletes
	async delete(id: number) {
		return await this.databaseService.bd('cat').where('idGato', id).delete();
	}

	async getGato(nome: string) {
		return await this.databaseService.bd().select().where('nome', 'like', '%' + nome + '%').from('cat');
	}
}
