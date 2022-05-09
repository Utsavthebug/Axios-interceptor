import React, { useContext, useState } from 'react'
import { instance } from '../api/apiv2'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import { LOG_IN } from '../actions/action'

const LoginPage = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const {dispatch,state} = useContext(AuthContext)
    const navigate = useNavigate()
    // console.log(dispatch)

    let location = useLocation()

    let from = location.state?.from?.pathname || "/todos"

    console.log(from)

    const handleSubmit=()=>{
        instance.post("/token/",{
            username,
            password
        }).then((response)=>{
            const {refresh,access} = response.data
   
            dispatch({type:LOG_IN,payload:{refresh,access}})

            navigate(from,{replace:true})

        }).catch((error)=>console.log(error))
        setUsername("")
        setPassword("")
    }

  return (
    <div>
<label>Username</label>
<input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Enter username' />

<label>Password</label>
<input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter Password'/>

<button type='submit' onClick={handleSubmit}>Login</button>
</div>
  )
}

export default LoginPage