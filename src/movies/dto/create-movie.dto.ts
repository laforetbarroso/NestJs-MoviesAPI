import { Genre } from '../../genres/entities/genre.entity';
import { IsArray, IsDate, IsNotEmpty } from 'class-validator';
import { Expose, Type } from 'class-transformer';

export class CreateMovieDto {
  @IsNotEmpty()
  public title: string;

  @IsNotEmpty()
  public description: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  public releaseDate: Date;

  @Type(() => Genre)
  @Expose()
  @IsArray()
  @IsNotEmpty({ each: true })
  public genres: string[];
}
