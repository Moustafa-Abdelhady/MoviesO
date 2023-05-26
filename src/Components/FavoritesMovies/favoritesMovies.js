

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  RemoveFromFavoriteStar } from '../../store/Action/favoriteAction';


const FavoritesMovies = () => {

        const [favMovies,setFavMovies]=useState([])

        const counter=useSelector(state=>state.favoriteCounter)

        const myFavorite=useSelector((state)=>state.favorites)
        console.log(myFavorite);
        const dispatch=useDispatch()

        const handleRemoveFromFavoriteStar=(items)=>{
            // let index=myFavorite.findIndex((data)=>data.id = items.id)
            // console.log(index);
            // myFavorite.splice(index , 1)
            dispatch(RemoveFromFavoriteStar(items.id))
        }

                const navigate=useNavigate();
        const handleGoBack=()=>{
            navigate("/MoviesO")
        }

    return (
        <div className='bg-dark text-white'>
           <div className='p-3 d-flex justify-content-start align-items-center'>
             <i class="fa-solid fa-circle-left fa-3x text-success" onClick={()=>{handleGoBack()}}></i>
             <span>back to Movies</span>
           </div>
            <div className="text-center">
            { counter ? (
                  <h4 className='px-2'>Your Favorite Movies ^_^</h4>
                ):(
                  <h4>You dosen't have Favorite Movies yet</h4>
                )}
              </div>
            <div>
            {/* <h3 className="text-black">Favorites : {myFavorite.length}</h3> */}
      <div className=" d-flex justify-content-around  text-center w-100 pt-2 bg-dark flex-wrap   overflow-hidden">
        {myFavorite.map((items) => {
        
        // const myFav=myFavorite.findIndex((data)=>data.id === items.id)
            // console.log(myFav);
          return (
            <>
            
              <div
                className="d-flex justify-content-around movie-container dd  card my-2  mx-2 text-white bg-dark border border-white"
                id="card-box"
              >
                <div className="overflow-hidden " id="card-bag" key={items.id}>
               
                  <div className="w-100">
               
                    
                    <i class="fa-solid fa-trash fa-2x starIcon text-warning text-center    position-absolute py-3 rounded-4" key={items.id} onClick={()=>handleRemoveFromFavoriteStar(items)}  ></i>
                    
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
                    
                   <h4 className="d-flex justify-content-center align-items-center mt-2">
                       {items.release_date}
                  </h4>
                    {/* <button className="btn btn-success   ">
                      <NavLink
                        to={`/MoviesO/${items.id}`}
                        style={{ color: "white", textDecoration: "none" }}
                        key={items.id}
                      >
                        Details
                      </NavLink>
                    </button> */}
                   
                    {/* <i class="bi bi-star fs-2 d-flex justify-content-md-end" onClick={() => handleToFavoriteStar(items)}></i> */}
                    {/* <i class="bi bi-star fs-2 d-flex justify-content-md-end" onClick={() => handleRemoveFromFavoriteStar(items)}></i> */}
          
                  </div>
                </div>

                <div className="d-flex justify-content-around bg-success align-items-center fs-6 fw-2 mt-2">
                  <hr />
                  <span>popularity: {items.popularity}</span>
                  <span>vote count: {items.vote_count}</span>
                </div>
               
              </div>
            
            </>
          );
        })}
        
         {/* <div className="  p-5 text-white d-flex justify-content-center align-items-center  ">
      <button className="btn btn-success px-4 mx-2 fs-5 fw-4 " disabled={page==1} onClick={handlePrevPage}>
        prev
      </button>
      <span className="bg-white text-dark px-3 fs-3 fw-2">{page}</span>
      <button className="btn btn-success px-4 mx-2 fs-5 fw-4" onClick={handleNextPage}>
      Next
      </button>
    </div> */}
       
      </div>
     
    </div>
   
           
        </div>
    );
}

export default FavoritesMovies;
