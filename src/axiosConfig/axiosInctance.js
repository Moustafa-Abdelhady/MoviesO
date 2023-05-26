import axios from 'axios'

 const axiosInstance=axios.create({
    baseURL:"https://api.themoviedb.org/3/movie",
    // headers:{"Authorization":"d6518ef44ca55b46bef1e27ac29f3975"},
    params:{
        "api_key":'d6518ef44ca55b46bef1e27ac29f3975'
    }
})

export default axiosInstance 


///request interceptors
axiosInstance.interceptors.request.use((config)=>{
console.log(config);

return config
},(err)=>{

    return Promise.reject(err)

})


///response interceptor
axiosInstance.interceptors.response.use((res)=>{

    return res

},(err)=>{

    return Promise.reject(err)

})