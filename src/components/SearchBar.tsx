import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Movie } from '../types';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ isOpen, onClose, movies, onMovieClick }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.overview.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.some(genre => genre.toLowerCase().includes(query.toLowerCase()))
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query, movies]);

  const handleMovieClick = (movie: Movie) => {
    onMovieClick(movie);
    setQuery('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto pt-20 px-4">
        {/* Search Input */}
        <div className="relative mb-8">
          <div className="flex items-center bg-gray-900 border-2 border-white rounded-lg p-4">
            <Search className="text-white mr-4" size={24} />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for movies, TV shows, genres..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-white text-xl placeholder-gray-400 outline-none"
            />
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-300 transition-colors ml-4"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="space-y-4">
          {query && results.length === 0 && (
            <p className="text-gray-400 text-center text-lg">
              No results found for "{query}"
            </p>
          )}

          {results.map((movie) => (
            <div
              key={movie.id}
              onClick={() => handleMovieClick(movie)}
              className="flex items-start space-x-4 bg-gray-900/50 hover:bg-gray-800/50 p-4 rounded-lg cursor-pointer transition-colors group"
            >
              <img
                src={movie.posterPath}
                alt={movie.title}
                className="w-20 h-28 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-white text-lg font-bold mb-2 group-hover:text-red-500 transition-colors">
                  {movie.title}
                </h3>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-green-400 font-bold text-sm">
                    {Math.round(movie.voteAverage * 10)}% Match
                  </span>
                  <span className="text-white border border-gray-400 px-2 py-1 text-xs">
                    {movie.maturityRating}
                  </span>
                  <span className="text-gray-400 text-sm">{movie.releaseDate}</span>
                </div>
                <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">
                  {movie.overview}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {movie.genre.map((genre, index) => (
                    <span key={index} className="text-gray-400 text-xs">
                      {genre}{index < movie.genre.length - 1 ? ' • ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;