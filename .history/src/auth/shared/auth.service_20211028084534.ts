import { Injectable } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
@Injectable()
export class AuthService {
	constructor(
		private catsService: CatsService
	) { }

	async validadeCat(catEmail: string, catSenha: string) {
		const cat = await this.catsService.getByEmail(catEmail);
	}
}
