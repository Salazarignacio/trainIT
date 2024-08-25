import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {/* el controller necesita consumir un servicio (injectable) */
  constructor(private readonly appService: AppService) {}

  @Get() /* ruta tipo get */
  getHello(): string { /* ejecuta la implementacion del servicio appService */
    return this.appService.getHello();
  }

}
