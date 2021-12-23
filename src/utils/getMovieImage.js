export function getMovieImage(path, width = 300, height = 450) {
  return path
    ? `https://image.tmdb.org/t/p/w${width}${path}`
    : `http://via.placeholder.com/${width}x${height}`;
}
