import React, { useState } from 'react'
import { instance } from '../api/api'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit=()=>{
        instance.post("/token/",{
            username,
            password
        }).then((response)=>{
            const {refresh,access} = response.data
            localStorage.setItem("refresh",refresh)
            localStorage.setItem("access",access)

            navigate("/todos")

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