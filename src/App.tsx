import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import MovieModal from './components/MovieModal';
import AuthModal from './components/AuthModal';
import SearchBar from './components/SearchBar';
import { movies, featuredMovie, movieCategories } from './data/movies';
import { Movie, User, AuthState } from './types';

function App() {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    loading: false
  });
  
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Load auth state from localStorage on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('netflix-auth');
    if (savedAuth) {
      try {
        const authData = JSON.parse(savedAuth);
        setAuthState({
          isAuthenticated: true,
          user: authData.user,
          loading: false
        });
      } catch (error) {
        console.error('Error loading auth state:', error);
      }
    }
  }, []);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setShowMovieModal(true);
  };

  const handleAuth = (email: string, password: string, name?: string) => {
    // Simulate authentication
    const user: User = {
      id: '1',
      email,
      name: name || email.split('@')[0],
      profileImage: '',
      watchlist: [],
      recentlyWatched: []
    };

    const newAuthState = {
      isAuthenticated: true,
      user,
      loading: false
    };

    setAuthState(newAuthState);
    localStorage.setItem('netflix-auth', JSON.stringify({ user }));
    setShowAuthModal(false);
  };

  const handleAuthClick = () => {
    if (authState.isAuthenticated) {
      // Sign out
      setAuthState({
        isAuthenticated: false,
        user: null,
        loading: false
      });
      localStorage.removeItem('netflix-auth');
    } else {
      // Show sign in modal
      setShowAuthModal(true);
    }
  };

  const handlePlay = (movie: Movie) => {
    console.log('Playing movie:', movie.title);
    // In a real app, this would navigate to the video player
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header 
        onSearchToggle={() => setShowSearch(true)}
        onAuthClick={handleAuthClick}
        isAuthenticated={authState.isAuthenticated}
        userName={authState.user?.name}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero 
          movie={featuredMovie}
          onPlayClick={handlePlay}
          onInfoClick={handleMovieClick}
        />

        {/* Movie Rows */}
        <div className="relative z-10 -mt-32 pb-20">
          <MovieRow 
            title="Trending Now"
            movies={movieCategories.trending}
            isLarge={true}
            onMovieClick={handleMovieClick}
          />
          
          <MovieRow 
            title="New Releases"
            movies={movieCategories.newReleases}
            onMovieClick={handleMovieClick}
          />
          
          <MovieRow 
            title="Popular Dramas"
            movies={movieCategories.dramas}
            onMovieClick={handleMovieClick}
          />
          
          <MovieRow 
            title="Sci-Fi & Fantasy"
            movies={movieCategories.sciFi}
            onMovieClick={handleMovieClick}
          />
          
          <MovieRow 
            title="Crime Shows"
            movies={movieCategories.crime}
            onMovieClick={handleMovieClick}
          />

          {authState.isAuthenticated && (
            <MovieRow 
              title={`${authState.user?.name}'s List`}
              movies={movies.slice(0, 4)}
              onMovieClick={handleMovieClick}
            />
          )}
        </div>
      </main>

      {/* Modals */}
      <MovieModal 
        movie={selectedMovie}
        isOpen={showMovieModal}
        onClose={() => {
          setShowMovieModal(false);
          setSelectedMovie(null);
        }}
      />

      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onAuth={handleAuth}
      />

      <SearchBar 
        isOpen={showSearch}
        onClose={() => setShowSearch(false)}
        movies={movies}
        onMovieClick={handleMovieClick}
      />
    </div>
  );
}

export default App;