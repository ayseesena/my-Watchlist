import Watched from "../Compenets/Watched";

export default (state,action) => {
    switch(action.type){
        case "ADD_MOVIE_TO_WATCHLIST":
        return{
            ...state,
            watchlist: [...state.watchlist,action.payload],
        };
        //  silme işlem 2 adım tıklandığında
        case "REMOVE_MOVIE_TO_WATCHLIST":
            return{
                ...state,
                watchlist:state.watchlist.filter(
                    (movie) => movie.id !== action.payload
                ), 
            };
            // izleneceklerden silip izlenenlere ekleme işlemi
            //  tıkla id diğer id lere eşit değil ise kalsın diğerini sil
            // daha sonra tıklanan id watched gönder.   
            case "ADD_MOVIE_TO_WATCHED" :
                return{
                    ...state,
                    watchlist: state.watchlist.filter(
                        (movie) => movie.id !== action.payload.id
                    ),
                    watched:[...state.watched,action.payload]
                };
                
                case "MOVE_TO_WATCHLİST" :
                    return{
                        ...state,
                        watched:state.watched.filter(
                            (movie) => movie.id !== action.payload.id
                        ),
                        watchlist: [...state.watchlist, action.payload]
                    };

                case   "REMOVE_MOVİE_WATCHED" :
                    return {
                        ...state,
                        watched: state.watched.filter(
                            (movie) => movie.id !== action.payload
                        ),
                    }
              
            default:
        return state;
    }
};
// state başlangıç değeri gönderdiğimiz değer
// daha sonra state içinde watchlist al
//  movie 
// biz burada state ve action alıyoruz action tpye eğer eşlesirse eklem işleme gerçekleşecek
// state başlangıç değeri olmaktadır
// "ADD_MOVİ_TO_WATCHLIST" bu type fonksiyon olarak yazıcaz


// REMOVE_MOVIE_TO_WATCHLIST bu kısımda gelen ıd var olan ıd ile aynı değilse kalsın aynı ise silsin 
// işlemini yaptık
// silme ise default ile yaptık
// filter butün elementleri içinde butun elementelerin ıd bakıyor
