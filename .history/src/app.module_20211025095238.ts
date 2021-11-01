import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Api } from 'src/api.controller';

@Module({
  imports: [],
  controllers: [AppController, AppController],
  providers: [AppService],
})
export class AppModule {}
