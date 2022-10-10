// dependencies
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { ALL_MOVIES } from './Movie/Movies';

const ADD_MOVIE = gql`
   mutation AddMovie(
      $id: Int!
      $name: String!
      $photo: String!
      $type: String!
      $year: String!
   ) {
      addMovie(id: $id, name: $name, photo: $photo, type: $type, year: $year) {
         id
         name
         photo
         type
         year
      }
   }
`;

const AddNewMovie = () => {
   const [formData, setFormData] = useState({
      id: null,
      name: '',
      photo: '',
      type: '',
      year: '',
   });

   const [addMovie, { data, loading, error }] = useMutation(ADD_MOVIE, {
      refetchQueries: [ALL_MOVIES],
   });

   const handleChange = (e) => {
      e.preventDefault();
      setFormData({
         ...formData,
         id: Math.floor(Math.random() * 101),
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      addMovie({
         variables: formData,
      });
   };

   return (
      <div className="form-wrapper">
         <form onSubmit={handleSubmit} className="form-inline">
            <label htmlFor="name"> Movie Name: </label>
            <input
               onChange={handleChange}
               placeholder="Movie Name"
               type="text"
               name="name"
               required
            />

            <label htmlFor="thumbnail"> Thumbnail: </label>
            <input
               onChange={handleChange}
               placeholder="Movie Thumbnail"
               type="text"
               name="photo"
               required
            />

            <label htmlFor="type"> Movie Type: </label>
            <input
               onChange={handleChange}
               placeholder="Movie Type"
               type="text"
               name="type"
               required
            />

            <label htmlFor="movieType"> Release Year: </label>
            <input
               onChange={handleChange}
               placeholder="year"
               type="number"
               name="year"
               required
            />

            <button type="submit">Submit</button>
         </form>
      </div>
   );
};

export default AddNewMovie;
