import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('cats')
export class Api {
  constructor(private readonly appService: AppService) {}
  @Get('/cats')
  findAll(): string {
    return 'This action returns all cats';
  }
}
