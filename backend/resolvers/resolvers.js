const Movie = require('../model/movieModel');

// const movies = [
//    {
//       id: 1,
//       name: 'The Shawshank Redemption',
//       type: 'action',
//       year: 1994,
//    },
//    {
//       id: 2,
//       name: 'The Godfather',
//       type: 'action',
//       year: 1972,
//    },
//    {
//       id: 3,
//       name: 'The Dark Knight',
//       type: 'thrill',
//       year: 2008,
//    },
//    {
//       id: 4,
//       name: 'The Godfather Part II',
//       type: 'action',
//       year: 1957,
//    },
//    {
//       id: 5,
//       name: '12 Angry Men',
//       type: 'action',
//       year: 1000,
//    },
//    {
//       id: 6,
//       name: 'Schindler"s List',
//       type: 'action',
//       year: 2000,
//    },
//    {
//       id: 7,
//       name: 'The Lord of the Rings',
//       type: 'action',
//       year: 1693,
//    },
//    {
//       id: 8,
//       name: 'The Return of the King',
//       type: 'action',
//       year: 8872,
//    },
//    {
//       id: 9,
//       name: 'Pulp Fiction',
//       type: 'action',
//       year: 8726,
//    },
//    {
//       id: 10,
//       name: 'The Woman King',
//       type: 'action',
//       year: 9871,
//    },
// ];

const resolvers = {
   movies: () => {
      return Movie.find({});
   },

   movieByName: ({ name }) => {
      return Movie.findOne({ name });
   },

   addMovie: ({ id, name, photo, type, year }) => {
      let movie = new Movie({
         id,
         name,
         photo,
         type,
         year,
      });

      movie.save();

      return movie;
   },
};

module.exports = resolvers;
