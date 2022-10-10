// dependencies
import { gql, useQuery } from '@apollo/client';
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

const Movies = () => {
   const { data, loading, error } = useQuery(ALL_MOVIES);

   return (
      <div className="movies">
         <div className="grid-container">
            <Movie data={data} loading={loading} error={error} />
         </div>
      </div>
   );
};

export default Movies;
