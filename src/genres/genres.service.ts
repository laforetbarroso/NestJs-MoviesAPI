import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenresService {
  constructor(
    @InjectRepository(Genre)
    private genreRepository: Repository<Genre>,
  ) {}
  async create(createGenreDto: CreateGenreDto) {
    return await this.genreRepository.save(createGenreDto);
  }

  async findAll() {
    return await this.genreRepository.find();
  }

  async findOneById(id: number) {
    return await this.genreRepository.findOne({ where: { id } });
  }

  async findOneByName(name: string) {
    return await this.genreRepository.findOne({ where: { name } });
  }

  async updateById(id: number, updateGenreDto: UpdateGenreDto) {
    const toUpdate = await this.genreRepository.findOne({ where: { id } });
    return await this.update(toUpdate, updateGenreDto);
  }

  async updateByName(name: string, updateGenreDto: UpdateGenreDto) {
    const toUpdate = await this.genreRepository.findOne({ where: { name } });
    return await this.update(toUpdate, updateGenreDto);
  }

  async update(genre: Genre, updateGenreDto: UpdateGenreDto) {
    const updated = Object.assign(genre, updateGenreDto);

    return await this.genreRepository.save(updated);
  }

  async removeById(id: number) {
    return await this.genreRepository.delete(id);
  }

  async removeByName(name: string) {
    return await this.genreRepository.delete(name);
  }
}
