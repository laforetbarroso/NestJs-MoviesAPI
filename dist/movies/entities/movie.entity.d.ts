import { Genre } from '../../genres/entities/genre.entity';
export declare class Movie {
    id: number;
    title: string;
    description: string;
    releaseDate: Date;
    genres: Genre[];
}
