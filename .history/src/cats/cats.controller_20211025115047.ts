import { Controller, Get, Req, Post, HttpCode, Param, Body, Query, Res, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { CreateCatDto } from 'src/cats/dto/create-cats.dto';
import { CatsService } from 'src/cats/cats.service';
import { Cat } from 'src/cats/interfaces/cat.interface';

@Controller('cats')
export class CatsController {
 // @Get()
 // findAll(): string {
//    return 'This action returns all cats';
	//}	
	constructor(private catsService: CatsService){}

	@Get()
	async findAll(): Promise<Cat[]> {
		return this.catsService.findAll();
	}
	@Get('/numero')
	find(): number {
		return 33;
	}
	@Get('/query')
	queryTeste(@Query() query: any) {
		console.log(query)
		return query;
	}
	@Get('/request')
	requestTest(@Req() request: Request): string {
		console.log(request.body);
		return 'This is a request!';
	}
	@Post('/outroPost')
	createSecond(@Res() res: Response) {
		res.status(HttpStatus.CREATED).send();
		}
	@Post()
	create(@Body() createCatDto: CreateCatDto){
		this.catsService.create(createCatDto);
	}
	@Get(':id')
	findOne(@Param() params): string {
		console.log(params);
		return params.id;
	}
}
