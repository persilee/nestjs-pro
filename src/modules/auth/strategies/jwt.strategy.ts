import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, VerifyCallback } from 'passport-jwt';
import { JwtPayload } from '../auth.interface';
import { UserService } from '../../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'B0B21D96-2723-4AB1-BF39-4980257A9A0B'
    })
  }

  async validate(payload: JwtPayload) {
    console.log('payload: ', payload)
    const { name } = payload
    const entity = await this.userService.findByName(name)

    if (!entity) {
      throw new UnauthorizedException('没找到用户！')
    }

    return entity
  }
}
