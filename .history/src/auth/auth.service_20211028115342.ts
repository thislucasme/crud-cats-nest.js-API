import { Injectable } from '@nestjs/common';
import { CatsService } from './../cats/cats.service';
import { response } from 'express';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { CatResponse } from 'src/cats/interfaces/cat.interface.response';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

	constructor(private catsService: CatsService, private jwtService: JwtService) { }

	async validateGato(email: string, senha: string): Promise<any> {
		const user = await this.catsService.findOne(email);
		if (user && user[0].senha === senha) {
			const result = {
				nome: user[0].nome,
				email: user[0].email,
				id: user[0].idGato
			}
			return result;
		}
		return null;
	}

	async login(user: any) {
		const payload = { username: user.username, sub: user.userId };
		return {
			access_token: this.jwtService.sign(payload),
		};
	}

}
