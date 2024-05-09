import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //HABILITANDO EL CORS PARA PERMITIR PETICIONES FUERA DEL SERVICIO O DOMINIO DEL PROYECTO
  app.enableCors();

  app.useGlobalPipes( 
    new ValidationPipe({ 
      whitelist: true, 
      forbidNonWhitelisted: true, 
    }) 
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
