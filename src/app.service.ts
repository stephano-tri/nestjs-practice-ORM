import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getDefault() {
    return {
      result: ['no', 'body', 'cannot', 'free', 'from', 'death'],
      statusCode: 200,
    };
  }
}
