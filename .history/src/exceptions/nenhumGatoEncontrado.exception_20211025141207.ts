import { HttpException, HttpStatus } from "@nestjs/common";

export class NenhumGatoEncontradoException extends HttpException{
	constructor() {
		super('Nenhum gato foi encontrado', HttpStatus.NOT_FOUND);
	}
}