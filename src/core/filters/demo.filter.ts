import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class DemoFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const res = ctx.getResponse()
    const req  = ctx.getRequest()
    const status = exception.getStatus()

    res
      .status(status)
      .json({
        statusCode: status,
        path: req.url
      })
  }
}
