import React from 'react'
import ProductCard from '../ProductCard';
import NavBar from '../NavBar';
import Footer from '../Footer';
import "../../App.css";

function SavedMovies() {

    return (


        <div className="w-full bg-white">
            <NavBar />
            <div className='mb-20'>
                <h1 className='flex justify-center font-bold '>SAVED MOVIES</h1>
            </div>
            <div className="lg:flex mt-10 justify-center sm:flex-row">
                <ProductCard />
                <ProductCard />
            </div>
            <Footer />
        </div>
    )
}

export default SavedMovies;