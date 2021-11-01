import { Controller, Get, Req, Post, HttpCode, Param, Body, Query, Res, HttpStatus, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { CreateCatDto } from 'src/cats/dto/create-cats.dto';
import { CatsService } from 'src/cats/cats.service';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { NenhumGatoEncontradoException } from './../exceptions/nenhumGatoEncontrado.exception';

@Controller('cats')
export class CatsController {

	constructor(private catsService: CatsService) { }

	@Post('/cat')
	async create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {

		const result = await this.catsService.criar(createCatDto).then(() => {
			res.status(HttpStatus.CREATED)
				.json({ status: HttpStatus.CREATED, info: "Gato criado com sucesso", createCatDto })
		}).catch(error => {
			res.status(HttpStatus.BAD_REQUEST)
				.json({ info: "Erro ao salvar gato " + error, status: HttpStatus.BAD_REQUEST });
		});
	}

	@Get()
	async get() {
		await this.catsService.buscarAll()
			.then(result => {
				console.log(result[0].nome);
			}).catch(error => {
				console.log("Ocorreu um erro: " + error);
			});
	}

	@Get('/testeget')
	async findAll(): Promise<Cat[]> {
		const result = this.catsService.findAll();
		console.log(result);
		if (result.length === 0) {
			throw new NenhumGatoEncontradoException();
		}
		return result;
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
	@Get(':id')
	findOne(@Param() params): string {
		console.log(params);
		return params.id;
	}
}
