import React from 'react';
import { Play, Info, Plus } from 'lucide-react';
import { Movie } from '../types';

interface HeroProps {
  movie: Movie;
  onPlayClick: (movie: Movie) => void;
  onInfoClick: (movie: Movie) => void;
}

const Hero: React.FC<HeroProps> = ({ movie, onPlayClick, onInfoClick }) => {
  return (
    <div className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={movie.backdropPath}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            {movie.title}
          </h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <span className="text-green-400 font-bold">
                {Math.round(movie.voteAverage * 10)}% Match
              </span>
            </div>
            <span className="text-white border border-gray-400 px-2 py-1 text-sm">
              {movie.maturityRating}
            </span>
            <span className="text-white">{movie.releaseDate}</span>
            <span className="text-white">{movie.duration}</span>
          </div>

          <p className="text-white text-lg mb-8 leading-relaxed max-w-xl">
            {movie.overview}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onPlayClick(movie)}
              className="flex items-center justify-center space-x-2 bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-200 transition-colors"
            >
              <Play size={20} fill="currentColor" />
              <span>Play</span>
            </button>
            
            <button 
              onClick={() => onInfoClick(movie)}
              className="flex items-center justify-center space-x-2 bg-gray-500/50 text-white px-8 py-3 rounded font-bold hover:bg-gray-500/70 transition-colors"
            >
              <Info size={20} />
              <span>More Info</span>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {movie.genre.map((genre, index) => (
              <span key={index} className="text-white/80 text-sm">
                {genre}{index < movie.genre.length - 1 ? ' • ' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default Hero;