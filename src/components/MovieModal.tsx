import React, { useEffect } from 'react';
import { X, Play, Plus, ThumbsUp, ThumbsDown, Volume2, VolumeX } from 'lucide-react';
import { Movie } from '../types';

interface MovieModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, isOpen, onClose }) => {
  const [isMuted, setIsMuted] = React.useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !movie) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl mx-4 bg-gray-900 rounded-lg overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Hero section */}
        <div className="relative h-96">
          <img 
            src={movie.backdropPath}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
          
          {/* Volume control */}
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>

          {/* Title and actions */}
          <div className="absolute bottom-8 left-8">
            <h1 className="text-white text-4xl font-bold mb-4">{movie.title}</h1>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded font-bold hover:bg-gray-200 transition-colors">
                <Play size={20} fill="currentColor" />
                <span>Play</span>
              </button>
              <button className="border-2 border-white text-white p-3 rounded-full hover:bg-white hover:text-black transition-colors">
                <Plus size={20} />
              </button>
              <button className="border-2 border-white text-white p-3 rounded-full hover:bg-white hover:text-black transition-colors">
                <ThumbsUp size={20} />
              </button>
              <button className="border-2 border-white text-white p-3 rounded-full hover:bg-white hover:text-black transition-colors">
                <ThumbsDown size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-green-400 font-bold text-lg">
                  {Math.round(movie.voteAverage * 10)}% Match
                </span>
                <span className="text-white">{movie.releaseDate}</span>
                <span className="text-white border border-gray-400 px-2 py-1 text-sm">
                  {movie.maturityRating}
                </span>
                <span className="text-white">{movie.duration}</span>
              </div>

              <p className="text-white text-lg leading-relaxed mb-6">
                {movie.overview}
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div>
                <span className="text-gray-400">Genres: </span>
                <span className="text-white">{movie.genre.join(', ')}</span>
              </div>
              
              <div>
                <span className="text-gray-400">Rating: </span>
                <span className="text-white">{movie.voteAverage}/10</span>
              </div>
            </div>
          </div>

          {/* Similar content section */}
          <div className="mt-12">
            <h3 className="text-white text-xl font-bold mb-4">More Like This</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-800 rounded-lg p-4">
                  <div className="aspect-video bg-gray-700 rounded mb-3" />
                  <h4 className="text-white font-medium mb-2">Similar Movie {item}</h4>
                  <p className="text-gray-400 text-sm">Brief description of the similar content...</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;