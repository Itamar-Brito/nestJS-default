import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
//Create a docker-composer for mysql with network exposing port 3306
  @Get()
  getHello(): string {
    return String(process.env.NODE_ENV);
  }
}