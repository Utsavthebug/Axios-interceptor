import { createContext, useEffect, useReducer } from "react";
import authReducer from "../reducers/authReducer";

const initialState= localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")):{}
//console.log(initialState)

export const AuthContext = createContext(initialState)

export const AuthProvider = ({children})=>{
    const [state,dispatch] = useReducer(authReducer,initialState)
    useEffect(()=>{
        localStorage.setItem("auth",JSON.stringify(state))
    },[state])

    return <AuthContext.Provider value={{dispatch,state}}>
        {children}
    </AuthContext.Provider>

}