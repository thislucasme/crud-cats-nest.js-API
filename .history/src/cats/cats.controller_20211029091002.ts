import { Controller, Get, Req, Post, HttpCode, Param, Body, Query, Res, HttpStatus, HttpException, Put, Delete, Patch, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDto } from 'src/cats/dto/create-cats.dto';
import { CatsService } from 'src/cats/cats.service';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

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
	@UseGuards(JwtAuthGuard)
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

	//Delete
	@Delete(':id')
	async deleteCat(@Param() params) {
		await this.catsService.delete(params.id).then(result => {
			console.log("deletado com sucesso!");
		}).catch(error => {
			console.log("Erro ao deletar esse item");
		})
		return params;
	}
	//Update
	@Put(':id')
	async update(@Body() createCatDto: CreateCatDto, @Param() params, @Res() res: Response) {
		try {
			await this.catsService.update(params.id, createCatDto)
			res.status(HttpStatus.CREATED).json(createCatDto);
		} catch (err) {
			res.status(HttpStatus.BAD_REQUEST).json({ "msg": "Nao foi possivel atualizar o item com id:" + params.id })
		}
	}

	@Get(':nome')
	async findOne(@Param() params): Promise<CreateCatDto> | null {
		const result = await this.catsService.getGato(params.nome);
		const gato: CreateCatDto = { nome: "JDJD" }
		console.log(result);
		return null;
	}
}
