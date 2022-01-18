import { Injectable } from '@nestjs/common';
import { CatsService } from './../cats/cats.service';
import { response } from 'express';
import { Cat } from 'src/cats/interfaces/cat.interface';

@Injectable()
export class AuthService {

	constructor(private catsService: CatsService) { }

	async validateGato(email: string, senha: string): Promise<any> {
		const user = await this.catsService.findOne(email);

		console.log(user[0].senha === senha);

		if (user && user[0].senha === senha) {
			const { nome, email } = user;
			return user;
		}
		return null;
	}
}
