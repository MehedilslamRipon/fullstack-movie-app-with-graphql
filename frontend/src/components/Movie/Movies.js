// dependencies
import { gql, useQuery } from '@apollo/client';
import { useContext } from 'react';
import { searchContext } from '../../context/searchContext';
import Movie from './Movie';

export const ALL_MOVIES = gql`
   query {
      movies {
         id
         name
         photo
         type
         year
      }
   }
`;

const MOVIE_BY_NAME = gql`
   query ($movieName: String!) {
      movieByName(name: $movieName) {
         id
         name
         photo
         type
         year
      }
   }
`;

const Movies = () => {
   const { search } = useContext(searchContext);

   console.log(search);

   const {
      data: allMovies,
      loading: loadingAllMovies,
      error: errorAllMovies,
   } = useQuery(ALL_MOVIES);

   const {
      data: singleMovie,
      loading: loadingSingleMovie,
      error: errorSingleMovie,
   } = useQuery(MOVIE_BY_NAME, { variables: { movieName: search } });

   console.log(singleMovie);

   return (
      <div className="movies">
         <div className="grid-container">
            <Movie
               data={{
                  allMovies,
                  loadingAllMovies,
                  errorAllMovies,
                  singleMovie,
                  loadingSingleMovie,
                  errorSingleMovie,
               }}
            />
         </div>
      </div>
   );
};

export default Movies;
