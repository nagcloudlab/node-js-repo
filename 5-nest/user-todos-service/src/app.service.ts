import { Injectable } from '@nestjs/common';

// business logic

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
