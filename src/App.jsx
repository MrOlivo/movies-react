import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import style from './App.module.css';
import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';

export function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Link to="/">
            <h1 className={style.title}>Movies</h1>
          </Link>
        </header>
        <main>
          <Routes>
            <Route index path="/" element={<LandingPage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
