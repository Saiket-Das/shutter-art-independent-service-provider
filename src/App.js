import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication/Login/Login';
import Signup from './Components/Authentication/Sign Up/Signup';
import Home from './Components/Pages/Home/Home';
import Services from './Components/Pages/Services/Services';
import Shop from './Components/Pages/Shop/Shop';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="app">
      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

      </Routes>
    </div >
  );
}

export default App;
