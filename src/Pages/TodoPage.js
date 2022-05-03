import React, { useEffect, useState } from 'react'
import { instance } from '../api/api'

const TodoPage = () => {
    const [todos,setTodos] = useState([])

    useEffect(()=>{
        instance.get("/getTodos").then((data)=>console.log(data)).catch((error)=>console.log(error))
    },[])

  return (
    <div>TodoPage</div>
  )
}

export default TodoPage