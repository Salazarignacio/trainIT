import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan'

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const port = 8080;
    app.use(morgan("dev"))
    app.enableCors({
      origin: 'http://localhost:4200', 
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
      credentials: true, // 
    });
    await app.listen(port); /* cambiar numero en variables de entorno */
    console.log("server ready on port "+port);
    
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
