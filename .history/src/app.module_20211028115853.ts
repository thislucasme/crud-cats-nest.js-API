import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthModule]
})
export class AppModule { }
