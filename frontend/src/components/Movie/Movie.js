// dependencies
import React from 'react';

const Movie = ({ data, loading, error }) => {
   return (
      <React.Fragment>
         {loading && <h1>Loading...</h1>}

         {error && <h1>Something went wrong!</h1>}

         {data?.movies.map((movie) => (
            <div key={movie.id} className="grid-item">
               <div className="card">
                  <img
                     className="responsive_img"
                     src={movie.photo}
                     alt="card"
                  />
                  <div className="container">
                     <h4>
                        <b>{movie.name} </b>
                     </h4>
                     <h4>Movie Type: {movie.type}</h4>
                     <h5> Release: {movie.year} </h5>
                  </div>
               </div>
            </div>
         ))}
      </React.Fragment>
   );
};

export default Movie;
