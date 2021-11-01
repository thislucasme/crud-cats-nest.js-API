import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { DatabaseModule } from './database/database.module';
import { AppController } from 'src/app.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule, CatsModule, DatabaseModule],
})
export class AppModule { }
