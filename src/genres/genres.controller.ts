import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Post()
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genresService.create(createGenreDto);
  }

  @Get()
  findAll() {
    return this.genresService.findAll();
  }

  @Get('/id/:id')
  findOneById(@Param('id') id: string) {
    return this.genresService.findOneById(+id);
  }

  @Get('/name/:name')
  findOneByName(@Param('name') name: string) {
    return this.genresService.findOneByName(name);
  }

  @Patch('/id/:id')
  updateById(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.genresService.updateById(+id, updateGenreDto);
  }

  @Patch('/name/:name')
  updateByName(
    @Param('name') name: string,
    @Body() updateGenreDto: UpdateGenreDto,
  ) {
    return this.genresService.updateByName(name, updateGenreDto);
  }

  @Delete('/id/:id')
  removeById(@Param('id') id: string) {
    return this.genresService.removeById(+id);
  }

  @Delete('/name/:name')
  removeByName(@Param('name') name: string) {
    return this.genresService.removeByName(name);
  }
}
