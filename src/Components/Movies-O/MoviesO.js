import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./MoviesO.css";
// import MoviesODetails from "../Movies-O-Details/MoviesODetails";
import { Link, NavLink } from "react-router-dom";
import axiosInstance from "../../axiosConfig/axiosInctance";
import { useDispatch, useSelector } from "react-redux";
import { actionFavorites, RemoveFromFavoriteStar } from "../../store/Action/favoriteAction";
import moviesAction from "../../store/Action/moviesAction";




const MoviesO = () => {
  const [Movies, setMoviesCard] = useState([]);
  const [page, setMoviespage] = useState(1);
  const dispatch =useDispatch()
  //  const language= useSelector(state=>state.lang)
  //   console.log(language);


        ///import useSelector to get state from store 
    const myFavorite=useSelector(state=>state.favorites)
      console.log(myFavorite);

      const counter=useSelector(state=>state.favoriteCounter)
      console.log(counter);
        /// import useDispatch to change state from store

        const MoviesO=useSelector(state=>state.moviesThunk)
        console.log(MoviesO);

        useEffect(() => {
                  ////use redux thunk
            // dispatch(moviesAction())

          // async function getMovies(){
          // axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d6518ef44ca55b46bef1e27ac29f3975`).then((res)=>{
           ////////////////
          axiosInstance
            .get(
              // `https://api.themoviedb.org/3/movie/popular?api_key=d6518ef44ca55b46bef1e27ac29f3975&page=${page}`
              `/popular?&page=${page}`
            )
            .then((res) => {
             
               setMoviesCard(res.data.results);
             
            })
            .catch((err) => {
              console.log(err);
            });
          
          ////////////////////////////////
          // getMovies();
        }, [page]);
      

        ////testing
    // const isFav=()=>{
    //   dispatch(actionFavorites(myFavorite === true ? false : true))
    // }
    //     console.log(myFavorite);


      const handleToFavoriteStar=(items) => {
        
        
          dispatch(actionFavorites(items))
          console.log(items);
      }

      const handleRemoveFromFavoriteStar=(items) => {
        dispatch(RemoveFromFavoriteStar(items.id))
        console.log(items.id);
        // console.log(items);
      }



  const handlePrevPage = () => {
    setMoviespage(prePage=>prePage - 1);
  };

const handleNextPage=()=>{
  setMoviespage(nxtPage => nxtPage + 1)
}



 

   
  return (
    <>
      <div>
      
        <div className=" d-flex justify-content-around  text-center w-100 pt-2 bg-dark flex-wrap   overflow-hidden">
          {/* <h3 className="text-white">{counter}</h3> */}
          {Movies.map((items) => {
              
            //  {myFavorite ? (myFavorite.some((isFav)=>isFav.id === items.id)):(console.log('loooad'))}
            
            //  const myFav=myFavorite;

              const myFav=myFavorite.some((isFav)=>isFav.id === items.id)
              console.log(myFav);
          
          
            return (
              <>
              
                <div
                  className="d-flex justify-content-around movie-container dd  card my-2  mx-2 text-white bg-dark border border-white"
                  id="card-box"
                >
                  <div className="overflow-hidden " id="card-bag">
                 
                    <div className="w-100" key={items.id}>
                  
                      
                      { myFav ? (

                            <i class="fa-solid fa-star fa-2x starIcon text-warning  text-center position-absolute py-3 rounded-4" onClick={()=>handleRemoveFromFavoriteStar(items)} ></i>
                              ) : (
                             <i class="fa-solid fa-star fa-2x starIcon  text-light-emphasis opacity-75 position-absolute py-3 rounded-4" onClick={() => handleToFavoriteStar(items)}></i>
                              )}

                      {/* <i class="fa-solid fa-star fa-2x starIcon text-warning text-center    position-absolute py-3 rounded-4" onClick={()=> handleToFavoriteStar(items)}  ></i> */}
                      
                      <span className="vote d-flex justify-content-center align-items-center">{items.vote_average}</span>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                        alt={items.title}
                        className="imag w-100 "
                      />
                    </div>
                    <hr />
                    <div className="  ">
                      <h4
                        className="d-flex justify-content-center align-items-center w-100  "
                        key={items.id}
                      >
                        {items.original_title}
                      </h4>
                      
                    </div>
                    <hr />
                    <div className=" ">
                    
                      <button className="btn btn-success   ">
                        <NavLink
                          to={`/MoviesO/${items.id}`}
                          style={{ color: "white", textDecoration: "none" }}
                          key={items.id}
                        >
                          Details
                        </NavLink>
                      </button>
                     
                 
            
                    </div>
                  </div>

                  <div key={items.id} className="d-flex justify-content-around bg-success align-items-center fs-6 fw-2 mt-2">
                    <hr />
                    <span>popularity: {items.popularity}</span>
                    <span>vote count: {items.vote_count}</span>
                  </div>
                </div>
              </>
            );
          })}
           <div className="  p-5 text-white d-flex justify-content-center align-items-center  ">
        <button className="btn btn-success px-4 mx-2 fs-5 fw-4 " disabled={page==1} onClick={handlePrevPage}>
          prev
        </button>
        <span className="bg-white text-dark px-3 fs-3 fw-2">{page}</span>
        <button className="btn btn-success px-4 mx-2 fs-5 fw-4" onClick={handleNextPage}>
        Next
        </button>
      </div>
        
        </div>
       
      </div>

 
     
    </>
  );
};

export default MoviesO;
