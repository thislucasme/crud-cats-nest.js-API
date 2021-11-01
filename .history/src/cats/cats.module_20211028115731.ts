import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { CatsController } from 'src/cats/cats.controller';
import { CatsService } from 'src/cats/cats.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
	controllers: [CatsController],
	providers: [CatsService],
	imports: [DatabaseModule, forwardRef(() => { AuthModule })],
	exports: [CatsService]
})
export class CatsModule { }
