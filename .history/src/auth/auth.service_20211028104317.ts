import { Injectable } from '@nestjs/common';
import { CatsService } from './../cats/cats.service';
import { response } from 'express';

@Injectable()
export class AuthService {

	constructor(private catsService: CatsService) { }

	async validateUser(email: string, senha: string): Promise<any> {
		const user = await this.catsService.findOne(email);
		const { ...result } = user;
		return result;
	}
}
