import { Controller, Get, Req, Post, HttpCode, Param, Body, Query, Res, HttpStatus, HttpException, Delete } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { CreateCatDto } from 'src/cats/dto/create-cats.dto';
import { CatsService } from 'src/cats/cats.service';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { NenhumGatoEncontradoException } from './../exceptions/nenhumGatoEncontrado.exception';

@Controller('cats')
export class CatsController {

	constructor(private catsService: CatsService) { }

	//CREATE
	@Post('/cat')
	async create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {

		await this.catsService.criar(createCatDto).then(() => {
			res.status(HttpStatus.CREATED)
				.json({ status: HttpStatus.CREATED, info: "Gato criado com sucesso", createCatDto })
		}).catch(error => {
			res.status(HttpStatus.BAD_REQUEST)
				.json({ info: "Erro ao salvar gato " + error, status: HttpStatus.BAD_REQUEST });
		});
	}

	//READ ALL
	@Get()
	async get() {
		const cats: Cat[] = [];

		await this.catsService.buscarAll()
			.then(result => {

				result.map(result => {
					let cat: Cat = <Cat>result;
					cats.push(cat);
				});

			}).catch(error => {
				console.log("Ocorreu um erro: " + error);
				return error;
			});
		return cats;
	}

	@Delete(':id')
	async deleteCat(@Param() params) {
		await this.catsService.delete().then(result => {
			console.log("deletado com sucesso!");
		}).catch(error => {
			console.log("Erro ao deletar esse item");
		})
		return params;
	}
	@Get(':id')
	findOne(@Param() params): string {
		console.log(params);
		return params.id;
	}
}
