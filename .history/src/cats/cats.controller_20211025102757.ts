import { Controller, Get, Req, Post } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
	}	
	@Get('/numero')
	find(): number {
		return 33;
	}
	@Get('/request')
	requestTest(@Req() request: Request): string {
		console.log(request.body);
		return 'This is a request!';
	}
	@Post()
	create(): string{
		return 'This add somthing';
	}
}
