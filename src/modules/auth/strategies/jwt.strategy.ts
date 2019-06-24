import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, VerifyCallback } from 'passport-jwt';
import { JwtPayload } from '../auth.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'B0B21D96-2723-4AB1-BF39-4980257A9A0B'
    })
  }

  async validate(payload: JwtPayload, done: VerifyCallback) {
    console.log('payload: ', payload)
  }
}
