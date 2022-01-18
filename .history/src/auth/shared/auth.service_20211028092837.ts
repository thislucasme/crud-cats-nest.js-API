import { Injectable } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
@Injectable()
export class AuthService {
	constructor(
		private catsService: CatsService
	) { }

	async validadeCat(catEmail: string, catSenha: string) {
		const cat = await this.catsService.getByEmail(catEmail).then(response => {
			if (!response) {
				return null;
			}
			if (response && response[0].senha === catSenha) {
				const { idGato, nome, email } = response[0];
				return { idGato, nome, email }
			}
		}).catch(error => {
			return null;
		})
		console.log(cat);
	}
}
