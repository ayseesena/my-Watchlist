import { text } from '@fortawesome/fontawesome-svg-core'
import React, {  useState } from 'react'
import { GlobalContext, GlobalProvider } from '../context/GlobalState';
import ResultCart from './ResultCart';


const Add = () => {
    
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    
    function onChange (e) {
        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b1e2005d5d342b51111ffb063d735a57&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then((res)=> res.json())
        .then((data)=> setResults(data.results));

    }
    // fetch veri alıp vermemizi sağlıyor asekron şeklinde
    // apı üzerinden yazlan yazyı aratacağımız için fonksiyon yazıcaz
  return (
    <div className='add-page'>
        <div className='container'> 
            <div className='add-content'>
                <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg"/>
                <div className='titles'>
                    <h1>Hoş Geldiniz</h1>
                    <h2>Sayısız Film, Dizi ve Şovlar Keşfedilmeyi bekliyor. Şimdi Listeni Oluştur.</h2>
                    
                </div>
                
                <div className='input-wrapper'>
                    <input 
                    type={text} 
                    value={query}
                    onChange={onChange} 
                    placeholder="film, dizi, kişi ara...">
                      
                    </input>

                    
                {/* usestate içinde veriyi onchange sayesinde tutuyoruz */}
                </div>
                {
                 results.length > 0 && (
                    <ul className='results'>
                        {results.map ((movie)=>(
                     <li key={movie.id}>
                        <ResultCart movie={movie} /> </li>
                ))}
                    </ul>
                 )
                }
                {/* film isimlerini döndürdüğümüz kısım */}
            </div>
        </div>
    </div>
  )
}


export default Add

//  ? eğer doğru ise bunu göster değil ise : yoksa bunu göster