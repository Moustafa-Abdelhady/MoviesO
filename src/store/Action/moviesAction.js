import axiosInstance from "../../axiosConfig/axiosInctance";

export const SET_MOVIES='SET_MOVIES'

export default function moviesAction(page){

    return (dispatch)=>{
      return  axiosInstance
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=d6518ef44ca55b46bef1e27ac29f3975&page=${page}`
          // `/popular?&page=${page}`
        )
        .then((res) => {
         
        //    setMoviesCard(res.data.results);
        dispatch({type:SET_MOVIES,payload:res.data.results})
         
        })
        .catch((err) => {
          console.log(err);
        });
    }

}