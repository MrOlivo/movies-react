import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteQuery } from 'react-query';

import { get } from '../utils/httpClient';
import { Empty } from './Empty';
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';
import { Spinner } from './Spinner';

export function MoviesGrid({ search }) {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['movies', search],
    ({ pageParam = 1 }) => {
      const searchUrl = search
        ? `/search/movie?query=${search}&page=${pageParam}`
        : `/discover/movie?page=${pageParam}`;
      return get(searchUrl);
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.page === lastPage.total_pages) return false;
        return lastPage.page + 1;
      },
    }
  );

  const movies =
    data?.pages.reduce(
      (prevMovies, page) => prevMovies.concat(page.results),
      []
    ) ?? [];

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
