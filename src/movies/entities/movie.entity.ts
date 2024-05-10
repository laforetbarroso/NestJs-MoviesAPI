import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genre } from '../../genres/entities/genre.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @Column('date')
  releaseDate: Date;

  @ManyToMany(() => Genre, (genre) => genre.movies, { cascade: true })
  @JoinTable()
  genres: Genre[];
}
