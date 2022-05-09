import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LOG_OUT } from '../actions/action'
import { instance } from '../api/apiv2'
import { AuthContext } from '../Context/AuthContext'

const TodoPage = () => {
    const [todos,setTodos] = useState([])
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=>{
        instance.get("/getTodos").then((response)=>console.log(response.data)).catch((error)=>console.log(error))
    },[])

    const Logout = ()=>{
      dispatch({type:LOG_OUT})
      navigate("/")
    }

  return (
    <>
    <div>TodoPage</div>
    <button onClick={Logout} type='submit'>Logout</button>
    </>
  )
}

export default TodoPage