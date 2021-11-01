import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { CatsController } from 'src/cats/cats.controller';
import { CatsService } from 'src/cats/cats.service';

@Controller('auth')
export class AuthController {

	constructor(private authService: AuthService, private catsService: CatsService) { }

	@UseGuards(AuthGuard('local'))
	@Post('/login')
	async login(@Req() req: Request) {
		return this.authService.login(req.user);
	}

	@Post('/verify/user')
	async verificar(@Req() req: Request) {
		console.log(req.email);
	}
}
