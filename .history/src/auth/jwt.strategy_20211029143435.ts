import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { CreateCatDto } from 'src/cats/dto/create-cats.dto';
import { PayLoad } from 'src/cats/interfaces/payload.validate';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: jwtConstants.secret,
		});
	}

	async validate(payload: any) {
		//const cat: PayLoad = payload;
		const cat = { nome: "hello" }
		return cat;
	}
}