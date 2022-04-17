import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication/Login/Login';
import RequiredAuth from './Components/Authentication/RequiredAuth/RequiredAuth';
import Signup from './Components/Authentication/Sign Up/Signup';
import useService from './Components/Hooks/useService/useService';
import AboutMe from './Components/Pages/About me/AboutMe';
import Blogs from './Components/Pages/Blogs/Blogs';
import CheckOut from './Components/Pages/CheckOut/CheckOut';
import Home from './Components/Pages/Home/Home';
import ServiceDetails from './Components/Pages/ServiceDetails/ServiceDetails';
import Footer from './Components/Shared/Footer/Footer';
// import Services from './Components/Pages/Services/Services';
import Header from './Components/Shared/Header/Header';
import NotFound from './Components/Shared/NotFound/NotFound';

function App() {
  const [services, setServices] = useService()
  console.log(services)
  return (
    <div className="app">
      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='home/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

        <Route path='/checkout' element={
          <RequiredAuth>
            <CheckOut></CheckOut>
          </RequiredAuth>
        }>
        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div >
  );
}

export default App;
