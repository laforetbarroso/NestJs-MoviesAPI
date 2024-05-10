import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    create(createMovieDto: CreateMovieDto): Promise<CreateMovieDto & import("./entities/movie.entity").Movie>;
    findAll(): Promise<import("./entities/movie.entity").Movie[]>;
    findOneById(id: string): Promise<import("./entities/movie.entity").Movie>;
    findOneByTitle(title: string): Promise<import("./entities/movie.entity").Movie>;
    findOneByTitleOrGenre(name: string): Promise<import("./entities/movie.entity").Movie[]>;
    updateById(id: string, updateMovieDto: UpdateMovieDto): Promise<import("./entities/movie.entity").Movie & UpdateMovieDto>;
    updateByTitle(title: string, updateMovieDto: UpdateMovieDto): Promise<import("./entities/movie.entity").Movie & UpdateMovieDto>;
    removeById(id: string): Promise<import("typeorm").DeleteResult>;
    removeByTitle(title: string): Promise<import("typeorm").DeleteResult>;
}
