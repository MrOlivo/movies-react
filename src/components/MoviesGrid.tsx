import { Empty } from '@components/Empty';
import { MovieCard } from '@components/MovieCard';
import styles from '@components/MoviesGrid.module.css';
import { Spinner } from '@components/Spinner';
import { useMovies } from '@hooks/useMovies';
import { Movie } from '@types';
import InfiniteScroll from 'react-infinite-scroll-component';

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
