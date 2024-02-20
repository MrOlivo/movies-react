import { Movie, MoviesResponse } from "../types/interfaces";

const API = 'https://api.themoviedb.org/3';
const TOKEN = import.meta.env.VITE_API_TOKEN;

const HEADERS = {
  Authorization:
    `Bearer ${TOKEN}`,
  'Content-Type': 'application/json;charset=utf-8',
}

export async function get(path: string): Promise<MoviesResponse> {
  const response = await fetch(API + path, {
    headers: { ...HEADERS }
  })

  return response.json();
}


export async function getMovie(path: string): Promise<Movie> {
  const response = await fetch(API + path, {
    headers: { ...HEADERS }
  })

  return response.json();
}