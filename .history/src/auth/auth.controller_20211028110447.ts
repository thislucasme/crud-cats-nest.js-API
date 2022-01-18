import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('auth')
export class AuthController {

	@UseGuards(AuthGuard('local'))
	@Post('/login')
	async login(@Req() req: Request) {
		return req.user;
	}
}
