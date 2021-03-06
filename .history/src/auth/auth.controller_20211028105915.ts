import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, UseGuards, Request } from '@nestjs/common';

@Controller()
export class AuthController {
	@UseGuards(AuthGuard('local'))
	@Post('auth/login')
	async login(@Request() req) {
		return req.user;
	}
}
