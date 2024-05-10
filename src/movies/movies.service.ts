import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Genre } from '../genres/entities/genre.entity';
import { paginate, IPaginationOptions } from 'nestjs-typeorm-paginate';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
    @InjectRepository(Genre)
    private genreRepository: Repository<Genre>,
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    const movie = new Movie();
    movie.title = createMovieDto.title;
    movie.description = createMovieDto.description;
    movie.releaseDate = createMovieDto.releaseDate;

    const genreEntities = await Promise.all(
      createMovieDto.genres.map(async (genreName) => {
        let genre = await this.genreRepository.findOne({
          where: { name: genreName },
        });

        if (!genre) {
          // Assumes create is a method that can take a partial entity and return a type instance.
          genre = this.genreRepository.create({
            name: genreName,
          } as unknown as Genre);
          await this.genreRepository.save(genre);
        }

        return genre;
      }),
    );

    movie.genres = genreEntities;

    await this.moviesRepository.save(movie);
    return movie;
  }

  async findAll() {
    return await this.moviesRepository.find();
  }

  async paginate(options: IPaginationOptions) {
    return await paginate<Movie>(this.moviesRepository, options);
  }

  async findOneById(id: number) {
    return await this.moviesRepository.findOne({ where: { id } });
  }

  async findOneByTitle(title: string) {
    return await this.moviesRepository.findOne({ where: { title } });
  }

  async findOneByTitleOrGenre(name: string) {
    return await this.moviesRepository.find({
      relations: ['genres'],
      where: [{ title: ILike(`%${name}%`) }, { genres: { name: name } }],
    });
  }

  async updateById(id: number, updateGenreDto: UpdateMovieDto) {
    const toUpdate = await this.moviesRepository.findOne({ where: { id } });
    return await this.update(toUpdate, updateGenreDto);
  }

  async updateByTitle(title: string, updateGenreDto: UpdateMovieDto) {
    const toUpdate = await this.moviesRepository.findOne({ where: { title } });
    return await this.update(toUpdate, updateGenreDto);
  }

  async update(movie: Movie, updateGenreDto: UpdateMovieDto) {
    const updated = Object.assign(movie, updateGenreDto);

    return await this.moviesRepository.save(updated);
  }

  async removeById(id: number) {
    return await this.moviesRepository.delete(id);
  }

  async removeByTitle(title: string) {
    console.log(title);
    return await this.moviesRepository.delete({
      title: title,
    });
  }
}
