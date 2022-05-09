// import axios from "axios";


// function getAccessToken(){
//     return localStorage.getItem("access")
// }

// function getRefreshToken(){
//     return localStorage.getItem("refresh")
// }


// export const instance = axios.create({
//     baseURL:"http://127.0.0.1:8000/api",
//     headers:{
//         "Content-Type":"application/json"
//     }
// })

// //interceptors 
// instance.interceptors.request.use((config)=>{
//     const accessToken = getAccessToken()


//     if(accessToken){
//         config.headers["Authorization"] = `Bearer ${accessToken}` 
//     }
//     return config
// },(error)=>{
//     return Promise.reject(error)
// })


// //response interceptors 
// instance.interceptors.response.use((response)=>{
//     return response
// },async(error)=>{
//     const originalConfig = error.config


//     if(error.response){
//         if(error.response.status===401 && !originalConfig._retry){
//             originalConfig._retry = true

//         try {
//             //get the refresh token 
//             const response = await instance.post("/token/refresh/",{
//                 refresh : getRefreshToken()
//             })
//             const {access} = response.data
            
//             localStorage.setItem("access",access)
//             instance.defaults.headers.common["Authorization"] = `Bearer ${access}`
//             return instance(originalConfig)

//         } 
//         catch (_error) {
//             if (_error.response && _error.response.data) {
                
//                 return Promise.reject(_error.response.data);
//               }
       
//               return Promise.reject(_error)
//         }
//         }
//     }
//         return Promise.reject(error)
//     })

























