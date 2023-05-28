
import './App.css';
import Register from './component/Register';
import Login from './component/Login';
import PrivetRoute from './component/PrivetRoute';
import {Routes,Route} from 'react-router-dom'
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Booking from './component/Page/Booking';
import CarList from './component/Page/CarList';
import CarDetails from './component/Page/CarDetails';
import AboutUs from './component/Page/AboutUs';
import Home from './component/Page/Home';
function App() {
  return (
    <div className="App">
      
      <Header/>
      
      
      <Routes> 
      <Route path={'/Home'} element={<Home/>}  />

      <Route path={'/AboutUs'} element={<AboutUs/>}  />
      <Route path={'/CarList'} element={<CarList/>}  />
      <Route path={'/CarDetails'} element={ <CarDetails/>}  />
      <Route path={'/Booking'} element={ <Booking/> }  />

        
        <Route path={'/'} element={<Register/>}  />
        <Route path={'/login'} element={<Login/>}  />
        <Route path={'/app/private'} element={<PrivetRoute/>}  />
        
      </Routes>
   
    
    
    
    </div>
  );
}

export default App;
