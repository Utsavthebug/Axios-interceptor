import './App.css';
import LoginPage from './Pages/LoginPage';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import TodoPage from './Pages/TodoPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LoginPage/>}/>
    <Route path='/todos' element={<TodoPage/>} />
    </Routes>
     </BrowserRouter>
  );
}

export default App;
