import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Spinner } from '../components/Spinner';
import { Genre } from '../types/interfaces';
import { getMovieImage } from '../utils/getMovieImage';
import { getMovie } from '../utils/httpClient';
import styles from './MovieDetails.module.css';

export function MovieDetails() {
  const { movieId } = useParams();

  const { data: movie, isLoading } = useQuery(['movieDetails', movieId], () =>
    getMovie('/movie/' + movieId)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (!movie) {
    return <p>Movie not found.</p>;
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
          {movie.genres && movie.genres.map((genre: Genre) => genre.name).join(', ')}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
        <p>
          <strong>Release date: </strong>
          {movie.release_date}
        </p>
        <p>
          <strong>Vote average: </strong>
          {movie.vote_average}/10 from {movie.vote_count} votes
        </p>
      </div>
    </div>
  );
}
