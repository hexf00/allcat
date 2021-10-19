import { Injectable, NestInterceptor, ExecutionContext, CallHandler, UnauthorizedException } from '@nestjs/common';
import { IncomingMessage } from 'http';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export default class Auth<T> implements NestInterceptor<T, Response<T>> {
  intercept (context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    const { headers } = context.switchToHttp().getRequest<IncomingMessage>()

    if (headers.authorization !== 'token') {
      throw new UnauthorizedException()
    } else {
      return next.handle().pipe(map((data) => {
        return {
          statusCode: 200,
          data
        }
      }));
    }

  }
}