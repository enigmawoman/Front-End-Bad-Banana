// import background from '../images/bad-banana-banner.jpeg';
// style={{ backgroundImage: `url(${background})
import React, { useState } from "react";
import {
    Input,
    Button,
} from "@material-tailwind/react";
import {
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Header = ({searchedMovies}) => {

    // const [inputValue, setInputValue] = useState('');

    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    }

    const handleSearchClick = async (event) => {
        event.preventDefault();
        if (!searchInput) {
            return false;
          }
      
          try {
            const response = await fetch(`
            https://api.themoviedb.org/3/search/movie?api_key=8338ff4dca8c5dfd0d759e7c144e0a5e&language=en-US&query=${searchInput}&page=1&include_adult=false`)

            if (!response.ok) {
                throw new Error("something went wrong!");
              }
        
              const { results } = await response.json();
        
              
        
              const movieData = results.map((movie) => ({
        
                movieId: movie.id,
                rating: movie.vote_average == null ? 0 : movie.vote_average,
                voteCount: movie.vote_count = null ? 0 : movie.vote_count,
                description: movie.overview || 'no description available',
                title: movie.title || 'no title available',
                image:(movie.poster_path == null ? `https://www.homecaredirect.co.uk/wp-content/uploads/2013/10/Awaiting-Image1.jpg`  : `https://image.tmdb.org/t/p/original/${movie.poster_path }`) ,
              }));
              console.log(movieData)
        
              searchedMovies(movieData);
              setSearchInput("");
            } catch (err) {
              console.error(err);
            }
          };
    

    return (
        // create the main hero section
        <section className="relative bg-grey-100"   style={{ }} >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20" > 

                    <div className="mx-auto text-center pb-12 md:pb-10 sm:pb-2 sm:px-2 pt-10 bg-amber-200 text-black items-center rounded-md font-bold" >
                        <h1 className="h1">
                            SEARCH A MOVIE
                        </h1>
                        <div className='lg:flex max-w-3xl mx-auto mt-6 gap-1'>
                            <Input size="md" className='mr-2' label="Search for a movie" onChange={handleInputChange} value={searchInput}/>
                            <Button  variant="gradient" onClick={handleSearchClick} color="brown" className="flex items-center gap-2">
                                Search <MagnifyingGlassIcon strokeWidth={2} className="h-4 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;