import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MoviCard from './MoviCard';

const Watchlist = () => {
  const {watchlist} = useContext(GlobalContext);
  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>
İzlenecekler Filmler
          </h1>
          <div className='count-pill'>
            {watchlist.length} {watchlist.length > 1 ? "Movies" : "Movie"} 
          </div>
        </div>
        {watchlist.length > 0 ? (
          <div className='movie-grid'>
            {watchlist.map ((movie) => (
              <MoviCard movie ={movie} key={movie.id} type= "watchlist" />
            ))}
          </div>
        ): (
          <h2 className='no-movies'> Listenizde Film yok..</h2>
        )
      }
      </div>
    
    </div>
  );
};  

export default Watchlist