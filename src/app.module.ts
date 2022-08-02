import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

// 데코레이터는 클래스에 함수 기능을 추가할 수 있다.
// app.modeule 은 루트모듈
// 사실 앱 모듈은 앱 컨트롤러와 앱 프로바이더만 가지고 있어야 한다.
@Module({
  imports: [MoviesModule],
  controllers: [AppController], // url 을 가져오고 함수를 실행, express 의 라우터 역할
  providers: [], // 서비스로직, 구조와 아키텍쳐, 컨트롤러와 비지니스 로직 분리
})
export class AppModule {}
