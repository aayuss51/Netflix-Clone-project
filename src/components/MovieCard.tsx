import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { MovieCardProps } from '../types';

const MovieCard: React.FC<MovieCardProps> = ({ movie, isLarge = false, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className={`relative cursor-pointer transition-all duration-300 transform ${
        isHovered ? 'scale-110 z-20' : 'scale-100'
      } ${isLarge ? 'w-80' : 'w-64'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(movie)}
    >
      {/* Movie Poster */}
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <img 
          src={movie.posterPath}
          alt={movie.title}
          className={`w-full ${isLarge ? 'h-96' : 'h-80'} object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className={`absolute inset-0 bg-gray-800 animate-pulse ${isLarge ? 'h-96' : 'h-80'}`} />
        )}

        {/* New/Trending badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {movie.isNew && (
            <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
              NEW
            </span>
          )}
          {movie.isTrending && (
            <span className="bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded">
              TRENDING
            </span>
          )}
        </div>

        {/* Hover overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        )}
      </div>

      {/* Hover content */}
      {isHovered && (
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-bold text-lg mb-2 leading-tight">{movie.title}</h3>
          
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Play size={16} fill="currentColor" />
              </button>
              <button className="border-2 border-white text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors">
                <Plus size={16} />
              </button>
              <button className="border-2 border-white text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors">
                <ThumbsUp size={16} />
              </button>
            </div>
            <button className="border-2 border-white text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors">
              <ChevronDown size={16} />
            </button>
          </div>

          <div className="flex items-center space-x-2 text-sm mb-1">
            <span className="text-green-400 font-bold">
              {Math.round(movie.voteAverage * 10)}% Match
            </span>
            <span className="border border-gray-400 px-1 text-xs">
              {movie.maturityRating}
            </span>
            <span>{movie.duration}</span>
          </div>

          <div className="flex flex-wrap gap-1 text-xs text-gray-300">
            {movie.genre.slice(0, 3).map((genre, index) => (
              <span key={index}>
                {genre}{index < Math.min(movie.genre.length, 3) - 1 ? ' • ' : ''}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;