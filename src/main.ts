import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan'

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const port = 8080;
    app.use(morgan("dev"))
    await app.listen(port); /* cambiar numero en variables de entorno */
    console.log("server ready on port "+port);
    
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
