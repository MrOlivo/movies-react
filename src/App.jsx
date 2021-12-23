import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import style from './App.module.css';
import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">
          <h1 className={style.title}>Movies</h1>
        </Link>
        <main>
          <Routes>
            <Route index path="/" element={<LandingPage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
