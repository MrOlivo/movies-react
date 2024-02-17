import { Link } from 'react-router-dom';
import { getMovieImage } from '../utils/getMovieImage';
import styles from './MovieCard.module.css';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  year: number;
}

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const imageUrl = getMovieImage(movie.poster_path);
  return (
    <li className={styles.movieCard}>
      <Link to={'/movies-react/movie/' + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
