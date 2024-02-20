import { useInfiniteQuery } from 'react-query';
import { get } from '../utils/httpClient';
import { Movie, MoviesResponse } from '../types/interfaces';

export function useMovies(search: string) {
  const result = useInfiniteQuery(
    ['movies', search],
    ({ pageParam = 1 }) => {
      const searchUrl = search
        ? `/search/movie?query=${search}&page=${pageParam}`
        : `/discover/movie?page=${pageParam}`;
      return get(searchUrl);
    },
    {
      getNextPageParam: (lastPage: MoviesResponse) => {
        if (lastPage.page === lastPage.total_pages) return false;
        return lastPage.page + 1;
      },
    }
  );

  const movies =
    result.data?.pages.reduce(
      (prevMovies: Movie[], page: MoviesResponse) => prevMovies.concat(page.results),
      []
    ) ?? [];

  return { ...result, movies };
}
