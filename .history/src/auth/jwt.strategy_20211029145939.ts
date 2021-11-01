import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { CreateCatDto } from 'src/cats/dto/create-cats.dto';
import { PayLoad } from 'src/cats/interfaces/payload.validate';
import { CatsService } from 'src/cats/cats.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private catsService: CatsService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: jwtConstants.secret,
		});
	}

	async validate(payload: PayLoad) {
		const user = await this.catsService.findCatById(payload.idGato);
		return { ...user, senha: undefined }
	}
}