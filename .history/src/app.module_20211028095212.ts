import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { DatabaseModule } from './database/database.module';
import { AppController } from 'src/app.controller';

@Module({
  imports: [
    AuthModule, CatsModule, DatabaseModule],
  controllers: [AppController]
})
export class AppModule { }
