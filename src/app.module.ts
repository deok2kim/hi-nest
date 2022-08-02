import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

// 데코레이터는 클래스에 함수 기능을 추가할 수 있다.
// app.modeule 은 루트모듈
@Module({
  imports: [],
  controllers: [MoviesController], // url 을 가져오고 함수를 실행, express 의 라우터 역할
  providers: [MoviesService], // 서비스로직, 구조와 아키텍쳐, 컨트롤러와 비지니스 로직 분리
})
export class AppModule {}
