import { CreateMovieDto } from './dto/create-movie.dto';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MoviesService {
    private moviesRepository;
    constructor(moviesRepository: Repository<Movie>);
    create(createMovieDto: CreateMovieDto): Promise<CreateMovieDto & Movie>;
    findAll(): Promise<Movie[]>;
    findOneById(id: number): Promise<Movie>;
    findOneByTitle(title: string): Promise<Movie>;
    findOneByTitleOrGenre(name: string): Promise<Movie[]>;
    updateById(id: number, updateGenreDto: UpdateMovieDto): Promise<Movie & UpdateMovieDto>;
    updateByTitle(title: string, updateGenreDto: UpdateMovieDto): Promise<Movie & UpdateMovieDto>;
    update(movie: Movie, updateGenreDto: UpdateMovieDto): Promise<Movie & UpdateMovieDto>;
    removeById(id: number): Promise<import("typeorm").DeleteResult>;
    removeByTitle(title: string): Promise<import("typeorm").DeleteResult>;
}
