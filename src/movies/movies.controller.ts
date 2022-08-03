import { UpdateMovieDto } from './dto/update-movie.dto';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/Movie.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';

@Controller('movies')
@ApiTags('무비')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  @ApiOperation({
    summary: '무비 전체 조회',
    description: '무비 전체 조회한다.',
  })
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  @ApiOperation({
    summary: '무비 검색',
    description: '무비를 검색한다.',
  })
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie with a year ${searchingYear}`;
  }

  @Get('/:id')
  @ApiOperation({
    summary: '무비 조회',
    description: '무비를 조회한다.',
  })
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  @ApiOperation({
    summary: '무비 생성',
    description: '무비를 생성한다.',
  })
  @ApiCreatedResponse({ description: '무비를 생성한다.', type: CreateMovieDto })
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  @ApiOperation({
    summary: '무비 삭제',
    description: '무비를 삭제한다.',
  })
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  @ApiOperation({
    summary: '수정',
    description: '무비를 수정한다.',
  })
  update(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}
