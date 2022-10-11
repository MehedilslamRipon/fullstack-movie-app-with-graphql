// dependencies
import { createContext, useState } from 'react';

export const searchContext = createContext();

const SearchContextProvider = (props) => {
   const [search, setSearch] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('submitted');
   };

   return (
      <searchContext.Provider value={{ search, setSearch, handleSubmit }}>
         {props.children}
      </searchContext.Provider>
   );
};

export default SearchContextProvider;
