import { Injectable } from '@nestjs/common';
import { CatsService } from './../cats/cats.service';
import { response } from 'express';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { CatResponse } from 'src/cats/interfaces/cat.interface.response';
import { JwtService } from '@nestjs/jwt';
import { CreateCatDto } from 'src/cats/dto/create-cats.dto';

@Injectable()
export class AuthService {

	constructor(private catsService: CatsService, private jwtService: JwtService) { }

	async validateGato(email: string, senha: string): Promise<Partial<CreateCatDto> | null> {
		const user = await this.catsService.findOne(email);
		if (!user) {
			return null;
		}
		if (user.senha === senha) {
			const result = {
				nome: user.nome,
				email: user.email,
				id: user.idGato,
			}
			return result;
		}
		return null;
	}

	async login(user: any) {
		const payload = { email: user.nome, idGato: user.id };
		return {
			access_token: this.jwtService.sign(payload)
		};
	}


}
