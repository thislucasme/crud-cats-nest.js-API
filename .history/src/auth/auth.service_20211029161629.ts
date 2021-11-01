import { Injectable } from '@nestjs/common';
import { CatsService } from './../cats/cats.service';
import { response } from 'express';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { CatResponse } from 'src/cats/interfaces/cat.interface.response';
import { JwtService } from '@nestjs/jwt';
import { CreateCatDto } from 'src/cats/dto/create-cats.dto';
import { PayLoad } from 'src/cats/interfaces/payload.validate';

@Injectable()
export class AuthService {

	constructor(private catsService: CatsService, private jwtService: JwtService) { }

	async validateGato(email: string, senha: string): Promise<Partial<Cat> | null> {
		const user = await this.catsService.findOne(email);
		console.log(user);
		if (!user) {
			return null;
		}
		if (user.senha === senha) {
			const result = {
				...user,
				senha: undefined
			}
			return result;
		}
		return null;
	}

	async login(user: Partial<Cat>) {
		if (user.email !== null) {
			const payload: PayLoad = { email: user.email, idGato: user.idGato };
			return {
				access_token: this.jwtService.sign(payload)
			};
		} else {
			return null;
		}
	}


}
