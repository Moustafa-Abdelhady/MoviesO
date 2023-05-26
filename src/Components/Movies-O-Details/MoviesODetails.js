import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../axiosConfig/axiosInctance";




const MoviesODetails = () => {
  const { id } = useParams();
  const [Movies, setMoviesCard] = useState({});

  const navigate=useNavigate();
  const handleGoBack=()=>{
    navigate("/MoviesO")
  }

  useEffect(() => {
    // axiosInstance.get(`https://api.themoviedb.org/3/movie/315162?api_key=d6518ef44ca55b46bef1e27ac29f3975`).then((res)=>{
    axiosInstance
      .get(
  `https://api.themoviedb.org/3/movie/${id}?api_key=d6518ef44ca55b46bef1e27ac29f3975`
      )
      .then((res) => {
        console.log(res);
        setMoviesCard(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(id);
  return (
    <div className="bg-dark text-white p-3 ">
      <h3>Movies-O Details</h3>

      <div className=" d-flex justify-content-center border-auto text-white w-100 bg-dark flex-column align-items-center mt-3">
        <div className="w-100 d-flex justify-content-center align-items-center">
          <img
            src={`https://image.tmdb.org/t/p/w500/${Movies.backdrop_path}`} className='w-75'
          />
        </div>
        <div
          id="card-box" className="w-75"
        >
          <h2 className="d-flex justify-content-center align-items-center mt-2">
            {Movies.original_title}
          </h2>
          <hr />
          <h4 className="d-flex justify-content-center align-items-center mt-2">
            {Movies.overview}
          </h4>
          {/* <div className="" id="card-bag">
            <h4 className="">{Movies.tagline}</h4>
            <h4 className="">{Movies.statues}</h4>
            <h4 className="">{Movies.release_data}</h4>
            <hr />
          </div> */}
        </div>
      </div>
            <div className="text-center">
              <button className="btn btn-success  px-5 py-2 mt-4 fs-3 fw-4" onClick={()=>{handleGoBack()}}>Back To Movies</button>
              </div>

      {/* <div>Details :{id}</div>
      <div>
        <h3>{Movies.title}</h3>
        <img src={Movies.image} />
      </div> */}
    </div>
  );
};

export default MoviesODetails;
