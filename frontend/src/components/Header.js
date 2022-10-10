// dependencies

const Header = () => {
   return (
      <div className="top-nav">
         <a href="/" className="logo">
            Movies
         </a>
         <div className="search-container">
            <form action="">
               <input
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
