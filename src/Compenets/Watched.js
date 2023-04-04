import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MoviCard from './MoviCard';

const Watched = () => {
  const {watched} = useContext(GlobalContext);
  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>
İzlenen Filmler
          </h1>
          <div className='count-pill'>
          {watched.length} {watched.length > 1 ? "Movies" : "Movie"}

        </div>

        </div>

       
        {watched.length > 0 ? (
          <div className='movie-grid'>
            {watched.map ((movie) => (
              <MoviCard movie ={movie} key={movie.id} type= "watched" />
            ))}
          </div>
        ): ( <h2 className='no-movies'> Şuan Listenizde Film Bulunmamaktadır...</h2> )
      }
        {/*watchwd 0 dan büyükse yani bir değer varsa tru olarak çalış sol daki tru olarak çıkıyorsa sağdakini çalıştırıyor  */}
      </div>
    
    </div>
  );
};  

export default Watched