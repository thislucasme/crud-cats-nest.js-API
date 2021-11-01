import { HttpException, HttpStatus } from "@nestjs/common";

export class ForbiddenException extends HttpException{
	constructor() {
		super('Nenhum gato foi encontrado', HttpStatus.NOT_FOUND);
	}
}