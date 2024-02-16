import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getMovieImage } from '../utils/getMovieImage';
import styles from './MovieCard.module.css';

// Your MovieCard component code...

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export function MovieCard({ movie }) {
  const imageUrl = getMovieImage(movie.poster_path);
  return (
    <li className={styles.movieCard}>
      <Link to={'/movies/' + movie.id}>
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
