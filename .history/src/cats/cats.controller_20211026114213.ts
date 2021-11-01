import { Controller, Get, Req, Post, HttpCode, Param, Body, Query, Res, HttpStatus, HttpException, Put, Delete, Patch } from '@nestjs/common';
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
		await this.catsService.delete(params.id).then(result => {
			console.log("deletado com sucesso!");
		}).catch(error => {
			console.log("Erro ao deletar esse item");
		})
		return params;
	}
	@Put(':id')
	async update(@Body() createCatDto: CreateCatDto, @Param() params, @Res() res: Response) {
		const result = await this.catsService.update(params.id, createCatDto)
			.then(result => {
				console.log("Atualizado")
				res.status(HttpStatus.CREATED).json(createCatDto);
			}).catch(error => {
				res.status(HttpStatus.BAD_REQUEST).json({ "msg": "Nao foi possivel atualizar o item com id:" + params.id })
				console.log("erro ao atualizar");
			});
		console.log(result);
	}
	@Get(':id')
	async findOne(@Param() params) {
		return await this.catsService.getGato(params.id)
			.then((response) => {
				console.log(response);
			}).catch((error) => {
				console.log(error);
			})
	}
}
