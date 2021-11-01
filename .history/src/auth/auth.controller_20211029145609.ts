import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, UseGuards, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { CatsController } from 'src/cats/cats.controller';
import { CatsService } from 'src/cats/cats.service';
import { UserLogin } from 'src/cats/dto/cat.user.login';
import { CreateCatDto } from 'src/cats/dto/create-cats.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LoginDto } from './../cats/dto/login.dto';

@Controller('auth')
export class AuthController {

	constructor(private authService: AuthService, private catsService: CatsService) { }

	@Post('/login')
	async login(@Body() body: LoginDto) {
		const user = await this.authService.validateGato(body.email, body.senha);
		const token = await this.authService.login(user);
		return token;

	}

	@UseGuards(JwtAuthGuard)
	@Post('/user')
	async currentUser(@Req() req: Request): Promise<CreateCatDto> {
		const user = req.user;
		console.log(typeof (user));
		return null;
	}
}
