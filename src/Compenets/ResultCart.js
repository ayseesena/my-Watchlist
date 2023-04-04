import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const ResultCart = ({movie}) => {
  const  {watchlist, watched, addMovieToWatchlist, addMovieToWatched} = useContext(GlobalContext);
  
  const storedMovieWatched =watched.find((o)=> o.id === movie.id);
  const storedMovie = watchlist.find((o)=> o.id === movie.id);  //tıklandıktan sonra disable etmeye çalıştık

  return (
   <div className='result-card'>
        <div className='poster-wrapper'>
          {movie.poster_path ? (
             <img 
             src= {`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
             alt={` ${movie.poster_path}`} />
          ): (
            <div className='filler-poster'> </div>
          
           
          )}

        </div>
        <div className='info'>
            <div className='header'>
                <h3 className='title'> {movie.title} </h3>
                <h4 className='release-date'>{movie.release_date ? movie.release_date.substring(0,4) : "-"}</h4>
                {/* h4 de tarihi yazdırdık javascript substring özelliğikullanıldı 4 karekteri aldık */}
                <h4 className='release-date'>IMDB: {movie.vote_average === 0 ? "-" : movie.vote_average.toFixed(1)}</h4>
            </div>
            <div className='controls'>
                <button 
                className='btn' 
                disabled= {storedMovie}
                onClick={() =>  addMovieToWatchlist(movie)}>
                İzlenecek <br></br> filmler
                </button>

               <button 
               className='btn' 
                disabled= {storedMovieWatched}
                onClick={() =>  addMovieToWatched(movie)}>
                  izlenen <br></br> filmler</button>
            </div>

            
        </div>
   </div>
  );
};

export default ResultCart