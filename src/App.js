import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { NavBar } from './Components/NavBar';
import { CreatePost } from './Pages/CreatePost';
import { useState } from 'react';

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  
  return (
    <div className="App">
      <Router>
        <NavBar isAuth = {isAuth} setIsAuth = {setIsAuth}/>
        <Routes>
          <Route path='/' element={<Home isAuth = {isAuth}/>}/>
          <Route path='/login' element={<Login setIsAuth = {setIsAuth}/>}/>
          <Route path='/createpost' element={<CreatePost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
