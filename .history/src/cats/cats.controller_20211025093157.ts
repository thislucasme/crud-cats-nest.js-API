import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('cats')
export class CatsController {
	@Get('/cats')
	findAll(): string {
		return 'This must be better';
	}
}
