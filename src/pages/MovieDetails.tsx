import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { Spinner } from '../components/Spinner';
import { getMovieImage } from '../utils/getMovieImage';
import { get } from '../utils/httpClient';
import styles from './MovieDetails.module.css';

export function MovieDetails() {
  const { movieId } = useParams();

  const { data: movie, isLoading } = useQuery(['movieDetails', movieId], () =>
    get('/movie/' + movieId)
  );

  if (isLoading) {
    return <Spinner />;
  }

  const imageUrl = getMovieImage(movie.poster_path, 500, 750);
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres.map((genre: {name: string}) => genre.name).join(', ')}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
