
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CleanUserInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next
            .handle()
            .pipe(
                map(data => {
                    if (Array.isArray(data)) {
                        return data.map(user => {
                            return {
                                ...user,
                                password: undefined
                            }
                        })
                    } else {
                        return {
                            ...data,
                            password: undefined
                        }
                    }
                })
            );
    }
}