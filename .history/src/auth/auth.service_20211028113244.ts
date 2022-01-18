import { Injectable } from '@nestjs/common';
import { CatsService } from './../cats/cats.service';
import { response } from 'express';
import { Cat } from 'src/cats/interfaces/cat.interface';

@Injectable()
export class AuthService {

	constructor(private catsService: CatsService) { }

	async validateGato(email: string, senha: string): Promise<any> {
		const user = await this.catsService.findOne(email);
		if (user && user[0].senha === senha) {
			return user;
		}
		return null;
	}
}
