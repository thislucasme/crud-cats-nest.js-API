import { Module } from '@nestjs/common';
import { CatsController } from 'src/cats/cats.controller';
import { CatsService } from 'src/cats/cats.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
	controllers: [CatsController],
	providers: [CatsService],
	imports: [DatabaseModule]
})
export class CatsModule {}
