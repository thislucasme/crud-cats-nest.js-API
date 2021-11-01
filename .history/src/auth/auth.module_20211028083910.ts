import { Module } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service.rascunho';

@Module({
    imports: [CatsService],
    controllers: [],
    providers: [],
})
export class AuthModule { }
