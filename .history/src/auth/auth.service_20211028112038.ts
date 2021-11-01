import { Injectable } from '@nestjs/common';
import { CatsService } from './../cats/cats.service';
import { response } from 'express';
import { Cat } from 'src/cats/interfaces/cat.interface';

@Injectable()
export class AuthService {

	constructor(private catsService: CatsService) { }

	async validateGato(email: string, senha: string): Promise<any> {
		const user = await this.catsService.findOne(email);
		console.log(user)
		console.log('user.senha:' + user.senha, 'senha:' + senha);
		console.log(user.senha === senha);


		if (user && user.senha === senha) {
			const { senha, ...result } = user;
			return result;
		}
		return null;
	}
}
