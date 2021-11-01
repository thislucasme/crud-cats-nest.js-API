import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';

@Controller('auth')
export class AuthController {

	constructor(private authService: AuthService) { }

	@UseGuards(AuthGuard('local'))
	@Post('/login')
	async login(@Req() req: Request) {
		return this.authService.login(req.user);
	}
}
