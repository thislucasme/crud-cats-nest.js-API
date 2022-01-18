import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class Api {
  @Get('/cats')
  findAll(): string {
    return 'This action returns all cats';
  }
}
