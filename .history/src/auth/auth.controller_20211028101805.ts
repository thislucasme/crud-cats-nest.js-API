import { Controller, UseGuards, Post, Req, Request, Get } from '@nestjs/common';
//import { Request } from 'express';
import { LocalAuthGuard } from 'src/auth/shared/local-auth.guard';


@Controller('auth')
export class AuthController {

	@UseGuards(LocalAuthGuard)
	@Post('/login')
	async login(@Request() req) {
		console.log("/login")
		return req.user;
	}

	@Get()
	async get() {
		return 'abc'
	}
}
