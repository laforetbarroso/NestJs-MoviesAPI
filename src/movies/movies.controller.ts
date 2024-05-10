import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    return this.moviesService.paginate({
      page,
      limit,
    });
  }

  @Get('/id/:id')
  findOneById(@Param('id') id: string) {
    return this.moviesService.findOneById(+id);
  }

  @Get('/title/:title')
  findOneByTitle(@Param('title') title: string) {
    return this.moviesService.findOneByTitle(title);
  }

  @Get('/search/:name')
  findOneByTitleOrGenre(@Param('name') name: string) {
    return this.moviesService.findOneByTitleOrGenre(name);
  }

  @Patch('/id/:id')
  updateById(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.updateById(+id, updateMovieDto);
  }

  @Patch('/title/:title')
  updateByTitle(
    @Param('title') title: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    return this.moviesService.updateByTitle(title, updateMovieDto);
  }

  @Delete('/id/:id')
  removeById(@Param('id') id: string) {
    return this.moviesService.removeById(+id);
  }

  @Delete('/title/:title')
  removeByTitle(@Param('title') title: string) {
    return this.moviesService.removeByTitle(title);
  }
}
