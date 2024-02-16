import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, expect, test } from "vitest";
import { MovieCard } from "../src/components/MovieCard";

describe('MovieCard', () => {
  const mockMovie = {
    id: 1,
    title: 'Test Movie',
    poster_path: '/test.jpg',
    year: 2022,
  };

  test('renders without crashing', () => {
    render(
      <Router>
        <MovieCard movie={mockMovie} />
      </Router>
    );
  });

  test('displays the movie title', () => {
    render(
      <Router>
        <MovieCard movie={mockMovie} />
      </Router>
    );

    expect(screen.getByText(/Test Movie/i)).toBeDefined()
  });

  test('displays the movie image', () => {
    render(
      <Router>
        <MovieCard movie={mockMovie} />
      </Router>
    );
    
    const img = screen.getByRole('img');
    expect(img).toHaveProperty('src', expect.stringContaining('/test.jpg'));
  });

  test('links to the correct movie detail page', () => {
    render(
      <Router>
        <MovieCard movie={mockMovie} />
      </Router>
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveProperty('href', expect.stringContaining('/movies-react/movie/1'));
  });
});