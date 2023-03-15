import React, { useState } from 'react'
import ProductCard from '../ProductCard';
import Header from '../Header';
import NavBar from '../NavBar';
import Footer from '../Footer';
import "../../App.css";


function SearchMovies() {

  const [searchedMovies, setSearchedMovies] = useState([]);
 // const [topMovies, setTopMovies] = useState([]);
  
  //const [searchInput, setSearchInput] = useState('');

  // useEffect(() => {
  //   fetch(`
  //   https://api.themoviedb.org/3/search/movie?api_key=8338ff4dca8c5dfd0d759e7c144e0a5e&language=en-US&query=${searchInput}&page=1&include_adult=false`)
  //   .then(response => response.json())
  //   .then(data => setSearchedMovies(data.results))
  // }, [searchInput])


  console.log(searchedMovies);

  

    return (
        <div className="w-full bg-white">
        <NavBar/>
        <Header searchedMovies={setSearchedMovies}/>
        <h2>
          {searchedMovies.length
            ? `Viewing ${searchedMovies.length} results:`
            : "Search for a movie to begin"}
        </h2>
        <div className="lg:flex mt-10 justify-center sm:flex-row">
          {searchedMovies && searchedMovies.map((searchedMovies) => 
          <ProductCard
          movieId={searchedMovies.movieId}
          title={searchedMovies.title || 'no title available'}
          rating={searchedMovies.rating == null ? 0 : searchedMovies.rating}
          voteCount={searchedMovies.voteCount = null ? 0 : searchedMovies.voteCount}
          description={searchedMovies.description || 'no description available'}
          image={searchedMovies.image}

          /> 
          )}
          
        </div>
        <Footer/>
      </div>
    )
    }
    
 export default SearchMovies;