import { Controller, UseGuards, Post, Req, Get } from '@nestjs/common';
import { Request } from 'express';
import { LocalAuthGuard } from 'src/auth/shared/local-auth.guard';


@Controller('auth')
export class AuthController {

	//@UseGuards(LocalAuthGuard)
	@Post('/login')
	async login(@Req() req: Request) {
		console.log("/login")
		return req.user;
	}

	@Get()
	async get() {
		return 'abc'
	}
}
