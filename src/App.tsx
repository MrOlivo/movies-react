import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';

import style from './App.module.css';
import { LandingPage } from './pages/LandingPage';
import { MovieDetails } from './pages/MovieDetails';

export function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Link to="/movies-react/">
            <h1 className={style.title}>Movies</h1>
          </Link>
        </header>
        <main>
          <Routes>
            <Route index path="/movies-react/" element={<LandingPage />} />
            <Route path="/movies-react/movie/:movieId" element={<MovieDetails />} />
            <Route path="*" element={<Navigate replace to="/movies-react/" />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
