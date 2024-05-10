import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Movie } from '../../movies/entities/movie.entity';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { unique: true })
  name: string;

  @ManyToMany(() => Movie, (movie) => movie.genres, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  movies: Movie[];
}
