import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "src/auth/shared/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

}