import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useMovies } from '../hooks/useMovies';
import { Empty } from './Empty';
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';
import { Spinner } from './Spinner';

MoviesGrid.propTypes = {
  search: PropTypes.string.isRequired
};

export function MoviesGrid({ search }) {
  const { movies, isLoading, hasNextPage, fetchNextPage } = useMovies(search);

  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasNextPage || isLoading}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
