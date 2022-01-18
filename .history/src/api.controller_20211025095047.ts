import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class Api {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
