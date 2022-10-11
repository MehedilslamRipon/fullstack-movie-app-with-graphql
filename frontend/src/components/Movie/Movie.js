// dependencies
import React from 'react';

const Movie = (props) => {
   const { allMovies, singleMovie, loadingAllMovies, errorAllMovies } =
      props.data;

   console.log(singleMovie?.movieByName?.type);

   return (
      <React.Fragment>
         {loadingAllMovies && <h1>Loading...</h1>}

         {errorAllMovies && <h1>Something went wrong!</h1>}

         {!singleMovie?.movieByName?.name && allMovies?.movies.map((movie) => (
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
                     <h5>Movie Type: {movie.type}</h5>
                     <h5> Release: {movie.year} </h5>
                  </div>
               </div>
            </div>
         ))}

         {singleMovie?.movieByName?.name && (
            <div className="grid-item">
               <div className="card">
                  <img
                     className="responsive_img"
                     src={singleMovie?.movieByName?.photo}
                     alt="card"
                  />
                  <div className="container">
                     <h4>
                        <b>{singleMovie?.movieByName?.name} </b>
                     </h4>
                     <h4>Movie Type: {singleMovie?.movieByName?.type}</h4>
                     <h5> Release: {singleMovie?.movieByName?.year} </h5>
                  </div>
               </div>
            </div>
         )}
      </React.Fragment>
   );
};

export default Movie;
