import './App.css';
import LoginPage from './Pages/LoginPage';
import {BrowserRouter,Navigate,Route,Routes, useLocation} from "react-router-dom"
import TodoPage from './Pages/TodoPage';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LoginPage/>}/>
    <Route path='/todos' element={<RequiredAuth><TodoPage/></RequiredAuth>} />
    </Routes>
     </BrowserRouter>
  );
}

export default App;

const RequiredAuth = ({children})=>{
  let location = useLocation()
  let {state} = useContext(AuthContext)
  console.log(state)

  if(!state.isLogin){
    return <Navigate to="/" state={{from:location}} replace/>
  }
  return children
}