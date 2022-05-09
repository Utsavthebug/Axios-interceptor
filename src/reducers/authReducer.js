import { LOG_IN,LOG_OUT } from "../actions/action"

const AuthReducer = (state,action) =>{
    switch(action.type){
        case LOG_IN:
            return {isLogin:true,access:action.payload.access,refresh:action.payload.refresh}
        
        case LOG_OUT:
            return {isLogin:false}

        default:
            return state
    }
}

export default AuthReducer