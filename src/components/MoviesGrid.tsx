import InfiniteScroll from 'react-infinite-scroll-component';
import { useMovies } from '../hooks/useMovies';
import { Empty } from './Empty';
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';
import { Spinner } from './Spinner';
import { Movie } from '../types/interfaces';

interface MoviesGridProps {
  search: string;
}

export function MoviesGrid({ search }: MoviesGridProps) {
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
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
