import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secretOrPrivateKey: 'B0B21D96-2723-4AB1-BF39-4980257A9A0B',
      signOptions: {
        expiresIn: '12h'
      }
    }),
    PassportModule.register({
      defaultStrategy: 'jwt'
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
