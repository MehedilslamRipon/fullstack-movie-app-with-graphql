// dependencies
import { useContext } from 'react';
import { searchContext } from '../context/searchContext';

const Header = () => {
   const { setSearch, handleSubmit } = useContext(searchContext);

   return (
      <div className="top-nav">
         <a href="/" className="logo">
            Movies
         </a>
         <div className="search-container">
            <form onSubmit={handleSubmit}>
               <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  name="search"
                  placeholder="Search Movie"
                  id="search"
                  required
               />
               <button type="submit">Search</button>
            </form>
         </div>
      </div>
   );
};

export default Header;
