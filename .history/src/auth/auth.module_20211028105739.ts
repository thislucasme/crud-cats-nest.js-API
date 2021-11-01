import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/auth/local.strategy';

@Module({
    imports: [CatsModule, PassportModule],
    controllers: [],
    providers: [AuthService, LocalStrategy]
})
export class AuthModule { }
