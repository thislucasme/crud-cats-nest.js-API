import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, UseGuards, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { CatsController } from 'src/cats/cats.controller';
import { CatsService } from 'src/cats/cats.service';
import { UserLogin } from 'src/cats/dto/cat.user.login';
import { CreateCatDto } from 'src/cats/dto/create-cats.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {

	constructor(private authService: AuthService, private catsService: CatsService) { }

	@UseGuards(AuthGuard('local'))
	@Post('/login')
	async login(@Req() req: Request) {
		console.log(req.user)
		return this.authService.login(req.user);
	}

	@UseGuards(JwtAuthGuard)
	@Post('/user')
	async currentUser(@Req() req: Request): Promise<CreateCatDto> {
		const user = req.user;
		//const result = await this.catsService.findCatById(user.idGato);
		console.log("===============")
		console.log(user);
		console.log("===============")
		return null;
	}
}
