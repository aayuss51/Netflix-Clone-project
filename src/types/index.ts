export interface Movie {
  id: string;
  title: string;
  overview: string;
  posterPath: string;
  backdropPath: string;
  releaseDate: string;
  voteAverage: number;
  genre: string[];
  duration: string;
  maturityRating: string;
  trailerUrl?: string;
  isNew?: boolean;
  isTrending?: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  profileImage: string;
  watchlist: string[];
  recentlyWatched: string[];
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
}

export interface MovieRowProps {
  title: string;
  movies: Movie[];
  isLarge?: boolean;
}

export interface MovieCardProps {
  movie: Movie;
  isLarge?: boolean;
  onClick: (movie: Movie) => void;
}