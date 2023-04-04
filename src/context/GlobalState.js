import React, { createContext, useEffect, useReducer, useState } from 'react'
import AppReducer from './AppReducer';

// create context yapımı
export const GlobalContext = createContext();
//  initialState BAŞLANGIÇ DEĞERİ OLUYOR
// burada film izlenecek ve izlenenlere ekleme yapmaya çalışıyorum
const initialState ={
    watchlist: localStorage.getItem("watchlist")
     ?JSON.parse(localStorage.getItem("watchlist")) 
     :  [],
    //  localstorange içinde varsa onu göster yoksa boş arry göster diyoruz
    watched: localStorage.getItem("watched")
    ?JSON.parse(localStorage.getItem("watched")) 
    :  [],
};
// bunlar watchlist: []watched: [], başlangıç değerleri taşımakta

// provider context yapımı

export const GlobalProvider = (props) => {
   
   
    const[state,dispatch] = useReducer(AppReducer, initialState);

    useEffect (()=>{
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
        localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state]);
//    bu ikisi sayfa yenilenmesinde sonrada da ekran da kalması için 
    



    // localStorage içine watchlist eklenenlerin kalmasını sağlıyoruz . localStorage kaydettim

    const addMovieToWatchlist = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie});
    }
    // payload: gönderdiğimiz değer

    // silme işlemi 1 adım

    const removeMovieFromWatchlist = (id) =>{
        dispatch({type: "REMOVE_MOVIE_TO_WATCHLIST", payload:id});
    };
    
    const addMovieToWatched = (movie)=> {
        dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie})

    }
    const moveToWatchlist = (movie) => {
        dispatch({type:"MOVE_TO_WATCHLİST" , payload:movie});
    }

    const removeMovieFromWatched = (id)=> {
        dispatch({type:"REMOVE_MOVİE_WATCHED" , payload: id})
    }
    return(
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            watched: state.watched,
            // state içindeki watchlist aktarımını yapıyoruz
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            addMovieToWatched ,
            moveToWatchlist,
            removeMovieFromWatched,
           
        }}>
            {props.children}
            
        </GlobalContext.Provider>
    );
    }
