import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenresController {
    private readonly genresService;
    constructor(genresService: GenresService);
    create(createGenreDto: CreateGenreDto): Promise<CreateGenreDto & import("./entities/genre.entity").Genre>;
    findAll(): Promise<import("./entities/genre.entity").Genre[]>;
    findOneById(id: string): Promise<import("./entities/genre.entity").Genre>;
    findOneByName(name: string): Promise<import("./entities/genre.entity").Genre>;
    updateById(id: string, updateGenreDto: UpdateGenreDto): Promise<import("./entities/genre.entity").Genre & UpdateGenreDto>;
    updateByName(name: string, updateGenreDto: UpdateGenreDto): Promise<import("./entities/genre.entity").Genre & UpdateGenreDto>;
    removeById(id: string): Promise<import("typeorm").DeleteResult>;
    removeByName(name: string): Promise<import("typeorm").DeleteResult>;
}
