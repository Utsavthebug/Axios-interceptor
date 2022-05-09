import axios from "axios";

function getAccessToken(){
    const access =  JSON.parse(localStorage.getItem("auth"))?.access
    return access
}

function getRefreshToken(){
    const refresh = JSON.parse(localStorage.getItem("auth"))?.refresh
    return refresh
}

function setAccessToken(token){
    let auth = JSON.parse(localStorage.getItem("auth"))
    auth.access = token
    localStorage.setItem("auth",JSON.stringify(auth))
}


export const instance = axios.create({
    baseURL:"http://127.0.0.1:8000/api",
    headers:{
        "Content-Type":"application/json"
    }
})

//request interceptors 
instance.interceptors.request.use((config)=>{
    const access = getAccessToken()
    console.log(access)
    if(access){
        config.headers["Authorization"] = `Bearer ${access}`
    }
    return config
},(error)=>{
    return Promise.reject(error)
})


instance.interceptors.response.use((response)=>{
    return response
},async(error)=>{
    let originalConfig = error.config

    if(error.response){
        if(error.response.status===401 && !originalConfig._retry){
            try {
                //get the refesh token
                originalConfig._retry = true 
                
                const response = await instance.post("/token/refresh/",{
                    refresh:getRefreshToken()
                })
                const {access} = response.data
               
                setAccessToken(access)

                instance.defaults.headers.common["Authorization"] = `Bearer ${access}`
                return instance(originalConfig)
            } catch (_error) {
                return Promise.reject(_error)
            }
    }
 }
    return Promise.reject(error)
 })
   