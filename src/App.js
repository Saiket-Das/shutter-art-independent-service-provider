import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication/Login/Login';
import Signup from './Components/Authentication/Sign Up/Signup';
import Blogs from './Components/Pages/Blogs/Blogs';
import Home from './Components/Pages/Home/Home';
import ServiceDetails from './Components/Pages/ServiceDetails/ServiceDetails';
// import Services from './Components/Pages/Services/Services';
import Header from './Components/Shared/Header/Header';
import NotFound from './Components/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="app">
      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
    </div >
  );
}

export default App;
