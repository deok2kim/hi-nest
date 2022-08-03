import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './utils/swagger';

// 스웨거 사용하기 : npm install --save @nestjs/swagger swagger-ui-express

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 유효성 검사를 위한 파이프 생성, 미들웨어 같은 것
  // npm install class-validator class-transformer
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 없는 값 무시
      forbidNonWhitelisted: true, // 없는 값이라고 알려줌
      transform: true, // 값을 실제 타입으로 e.g) url 의 id 를 number 로
      // dto 에 넘버라고 정했기 때문
    }),
  );
  // options
  // whitelist: true => 아무 데코레이터도 없는 어떠한 프로퍼티의 오브젝트를 거른다

  // 스웨거 초기화
  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
