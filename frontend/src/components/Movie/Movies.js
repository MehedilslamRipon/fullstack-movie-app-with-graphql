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

// query($abc:String!){
//    movieByName(name:$abc) {
//      id
//      name
//        photo
//      type
//      year
//    }
//  }

const Movies = () => {
   const { search } = useContext(searchContext);

   console.log('hello from Movies', search);

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
