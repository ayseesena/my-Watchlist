import React, { createContext, useContext } from 'react'
import { Link } from 'react-router-dom'



 

const Header = () => {
  return (
  <header>
    <div className="container"  >
        <div className='inner-content'>
            <div className='brand'> 
            <Link to={"/"}>İzlenecekler</Link> 
            {/* link react router domdan geliyor. link içine to özelliği vermeme durumunda hata ile 
            karşılaşırız. to / dan sonda gitmek istediği sayfa bağlantısı yazılacaktır. */}
            </div>

            <ul className='nav-links'>
                <li> 
                    <Link to={"/Watched"}>İzlenenler</Link>
                    {/* watchlist dizinine yönlendirilmesini yaptık */}
                </li>
                <li>
                    <Link to={"/add"} className="btn"><i className='fas fa-plus' ></i></Link>
                </li>
                
            </ul>

        </div>
    </div>
  </header>
  );
};

export default Header;
