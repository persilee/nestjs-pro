import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class DemoRolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // console.log('handler: ', context.getHandler())
    // console.log('class: ', context.getClass())

    const roles = this.reflector.get<string[]>('roles', context.getHandler())
    if (!roles) {
      return true
    }

    const req  = context.switchToHttp().getRequest()
    const { user } = req
    const hasRole = () => user.roles.some(role => roles.includes(role))
    
    return user && user.roles && hasRole()
  }
}
