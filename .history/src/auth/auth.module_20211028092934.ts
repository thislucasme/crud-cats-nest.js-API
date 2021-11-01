import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { AuthService } from 'src/auth/shared/auth.service';
import { LocalStrategy } from 'src/auth/shared/local.strategy';
import { CatsModule } from 'src/cats/cats.module';

@Module({
    imports: [CatsModule],
    controllers: [
        AuthController,],
    providers: [AuthService, LocalStrategy],
})
export class AuthModule { }
