import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { MoviesGrid } from "../src/components/MoviesGrid";

describe('MoviesGrid', () => {

  const queryClient = new QueryClient()

  const mockMovies = [
    {
      id: 447404,
      title: 'Pokémon Detective Pikachu',
      poster_path: '/uhWvnFgg3BNlcUz0Re1HfQqIcCD.jpg',
      year: 2019,
    },
    {
      id: 436931,
      title: 'Pokémon the Movie: I Choose You!',
      poster_path: '/cmpOaiRtjnhLNF2iPslMXCOcVJ.jpg',
      year: 2017,
    },
  ];

  test('renders without crashing', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MoviesGrid search="test" />
      </QueryClientProvider>
    );
  });

  test('displays the movie cards', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <MoviesGrid search="pokemon" />
        </Router>
      </QueryClientProvider>
    );

    await waitFor(() => {
      mockMovies.forEach(movie => {
        const titleRgx = new RegExp(movie.title)
        expect(screen.getByText(titleRgx)).toBeDefined();
      });
    })
  });

  test('displays the spinner when loading', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MoviesGrid search="test" />
      </QueryClientProvider>
    );

    expect(screen.getByTestId('spinner')).toBeDefined();
  });

  test('displays the empty message when no movies are found', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <MoviesGrid search="displays the empty message when no movies are found" />
        </Router>
      </QueryClientProvider>
    );

    const resultsRgx = new RegExp('No Results')
    await waitFor(() => {
      expect(screen.getByText(resultsRgx)).toBeDefined();
    })
  });
});