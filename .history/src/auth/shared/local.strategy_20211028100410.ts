import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "src/auth/shared/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private authService: AuthService) {
		super({
			userNameField: 'catEmail',
			passwordField: 'catSenha'
		})
	}
	async validate(email: string, senha: string): Promise<any> {
		const user = await this.authService.validadeCat(email, senha);
		return user;
		if (user === null) {
			throw new UnauthorizedException();
		}
		return user;
	}
}