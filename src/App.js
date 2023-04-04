
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import "./lib/fontawesome/css/all.min.css"
import Header from './Compenets/Header';
import Watched from './Compenets/Watched';
import Watchlist from './Compenets/Watchlist';
import Add from './Compenets/Add';
import { GlobalProvider } from './context/GlobalState';


function App( ) {
  return (
    
   <GlobalProvider>
        <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Watchlist/>}/>
          <Route path='/Watched' element={<Watched/>}/>
          <Route path='/Add' element={<Add/>}/>
        </Routes>
      </Router>   
   </GlobalProvider>
   
    
      
  );
}

export default App;

// header router kısmına koyma sebebimiz bütün sayfalarda görülmasini sağlamak.
// routes içine oluşacak sayfaları bu kısma yazıyoruz.
// route ise sayfa içeriniğini yani ismine felan yazıyoruz. path "/" anasayfa anlamına geliyor