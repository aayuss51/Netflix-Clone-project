import { Movie } from '../types';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Stranger Things',
    overview: 'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.',
    posterPath: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdropPath: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
    releaseDate: '2016',
    voteAverage: 8.7,
    genre: ['Sci-Fi', 'Horror', 'Drama'],
    duration: '51m',
    maturityRating: 'TV-14',
    isNew: false,
    isTrending: true
  },
  {
    id: '2',
    title: 'The Crown',
    overview: 'This drama follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the twentieth century.',
    posterPath: 'https://images.pexels.com/photos/7991432/pexels-photo-7991432.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdropPath: 'https://images.pexels.com/photos/7991432/pexels-photo-7991432.jpeg?auto=compress&cs=tinysrgb&w=1200',
    releaseDate: '2016',
    voteAverage: 8.6,
    genre: ['Drama', 'Biography', 'History'],
    duration: '58m',
    maturityRating: 'TV-MA',
    isNew: false,
    isTrending: false
  },
  {
    id: '3',
    title: 'Dark',
    overview: 'A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.',
    posterPath: 'https://images.pexels.com/photos/7991291/pexels-photo-7991291.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdropPath: 'https://images.pexels.com/photos/7991291/pexels-photo-7991291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    releaseDate: '2017',
    voteAverage: 8.8,
    genre: ['Sci-Fi', 'Thriller', 'Drama'],
    duration: '60m',
    maturityRating: 'TV-MA',
    isNew: true,
    isTrending: true
  },
  {
    id: '4',
    title: 'Money Heist',
    overview: 'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',
    posterPath: 'https://images.pexels.com/photos/8111217/pexels-photo-8111217.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdropPath: 'https://images.pexels.com/photos/8111217/pexels-photo-8111217.jpeg?auto=compress&cs=tinysrgb&w=1200',
    releaseDate: '2017',
    voteAverage: 8.3,
    genre: ['Crime', 'Drama', 'Thriller'],
    duration: '70m',
    maturityRating: 'TV-MA',
    isNew: false,
    isTrending: true
  },
  {
    id: '5',
    title: 'Bridgerton',
    overview: 'Wealth, lust, and betrayal set in the backdrop of Regency era England, seen through the eyes of the powerful Bridgerton family.',
    posterPath: 'https://images.pexels.com/photos/8111439/pexels-photo-8111439.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdropPath: 'https://images.pexels.com/photos/8111439/pexels-photo-8111439.jpeg?auto=compress&cs=tinysrgb&w=1200',
    releaseDate: '2020',
    voteAverage: 7.3,
    genre: ['Romance', 'Drama', 'Period'],
    duration: '60m',
    maturityRating: 'TV-MA',
    isNew: true,
    isTrending: false
  },
  {
    id: '6',
    title: 'The Witcher',
    overview: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
    posterPath: 'https://images.pexels.com/photos/8111728/pexels-photo-8111728.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdropPath: 'https://images.pexels.com/photos/8111728/pexels-photo-8111728.jpeg?auto=compress&cs=tinysrgb&w=1200',
    releaseDate: '2019',
    voteAverage: 8.2,
    genre: ['Fantasy', 'Adventure', 'Drama'],
    duration: '60m',
    maturityRating: 'TV-MA',
    isNew: false,
    isTrending: true
  },
  {
    id: '7',
    title: 'Ozark',
    overview: 'A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.',
    posterPath: 'https://images.pexels.com/photos/7991738/pexels-photo-7991738.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdropPath: 'https://images.pexels.com/photos/7991738/pexels-photo-7991738.jpeg?auto=compress&cs=tinysrgb&w=1200',
    releaseDate: '2017',
    voteAverage: 8.4,
    genre: ['Crime', 'Drama', 'Thriller'],
    duration: '60m',
    maturityRating: 'TV-MA',
    isNew: false,
    isTrending: false
  },
  {
    id: '8',
    title: 'Queen\'s Gambit',
    overview: 'In the 1950s, a young girl develops an extraordinary talent for chess while battling personal demons and societal expectations.',
    posterPath: 'https://images.pexels.com/photos/8111896/pexels-photo-8111896.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdropPath: 'https://images.pexels.com/photos/8111896/pexels-photo-8111896.jpeg?auto=compress&cs=tinysrgb&w=1200',
    releaseDate: '2020',
    voteAverage: 8.5,
    genre: ['Drama', 'Coming-of-age'],
    duration: '60m',
    maturityRating: 'TV-MA',
    isNew: true,
    isTrending: true
  }
];

export const featuredMovie = movies[0];

export const movieCategories = {
  trending: movies.filter(movie => movie.isTrending),
  newReleases: movies.filter(movie => movie.isNew),
  dramas: movies.filter(movie => movie.genre.includes('Drama')),
  sciFi: movies.filter(movie => movie.genre.includes('Sci-Fi')),
  crime: movies.filter(movie => movie.genre.includes('Crime'))
};