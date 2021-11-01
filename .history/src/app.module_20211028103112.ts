import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { DatabaseModule } from './database/database.module';
import { AppController } from 'src/app.controller';

@Module({
  imports: [
    CatsModule, DatabaseModule],
})
export class AppModule { }
