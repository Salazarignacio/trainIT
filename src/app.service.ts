import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! I am trying to build a CRUD';
  }
  getNacho(): string {
    return 'Hello my name is Nacho'
  }
}
