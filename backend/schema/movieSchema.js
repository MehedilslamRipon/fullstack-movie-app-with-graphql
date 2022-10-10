var { buildSchema } = require('graphql');

// schema
const movieSchema = buildSchema(`
      type Query {
         movies: [Movie]
         movieByName (name: String!): Movie
      }

      type Mutation {
         addMovie(id: Int name: String! photo: String! type: String! year: String!): Movie
      }

      type Movie {
         id: Int,
         name: String,
         photo: String,
         type: String,
         year: String
      }
   `);

module.exports = movieSchema;
