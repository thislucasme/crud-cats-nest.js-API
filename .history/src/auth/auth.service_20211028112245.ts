import { Injectable } from '@nestjs/common';
import { CatsService } from './../cats/cats.service';
import { response } from 'express';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { response } from 'express';

@Injectable()
export class AuthService {

	constructor(private catsService: CatsService) { }

	async validateGato(email: string, senha: string): Promise<any> {
		const user = await this.catsService.findOne(email).then(response => {
			console.log(response.senha)
		});
		return null;
	}
}
