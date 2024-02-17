export function getMovieImage(path: string, width = 300, height = 450): string {
  return path
    ? `https://image.tmdb.org/t/p/w${width}${path}`
    : `http://via.placeholder.com/${width}x${height}`;
}
