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
		return this.authService.login(req.user);
	}

	@UseGuards(JwtAuthGuard)
	@Post('/verify/user')
	async verificar(@Body() userLogin: UserLogin): Promise<CreateCatDto> {
		const result = await this.catsService.findOne(userLogin.email);
		return result;
	}
}
