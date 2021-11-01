import { Controller, Get } from '@nestjs/common';
  
@Controller('cats')
export class CatsController {
    @Get()
    findAldl(): string {
        return `This action returns all cats`;
    }
}
