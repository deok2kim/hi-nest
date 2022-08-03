import { CreateMovieDto } from './create-movie.dto';
import { PartialType } from '@nestjs/mapped-types';

// npm install @nestjs/mapped-types
// 타입읋 변환시키고 사용할 수 있음
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

// 유효성 검사를 할 수 있게 해줌
