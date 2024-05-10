import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Repository } from 'typeorm';
import { Genre } from './entities/genre.entity';
export declare class GenresService {
    private genreRepository;
    constructor(genreRepository: Repository<Genre>);
    create(createGenreDto: CreateGenreDto): Promise<CreateGenreDto & Genre>;
    findAll(): Promise<Genre[]>;
    findOneById(id: number): Promise<Genre>;
    findOneByName(name: string): Promise<Genre>;
    updateById(id: number, updateGenreDto: UpdateGenreDto): Promise<Genre & UpdateGenreDto>;
    updateByName(name: string, updateGenreDto: UpdateGenreDto): Promise<Genre & UpdateGenreDto>;
    update(genre: Genre, updateGenreDto: UpdateGenreDto): Promise<Genre & UpdateGenreDto>;
    removeById(id: number): Promise<import("typeorm").DeleteResult>;
    removeByName(name: string): Promise<import("typeorm").DeleteResult>;
}
