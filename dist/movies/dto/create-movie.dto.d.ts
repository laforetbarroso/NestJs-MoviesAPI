import { Genre } from '../../genres/entities/genre.entity';
export declare class CreateMovieDto {
    title: string;
    description: string;
    releaseDate: Date;
    genres: Genre[];
}
