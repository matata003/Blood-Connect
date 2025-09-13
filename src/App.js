import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import OrgSignup from './Components/OrgSignup';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import OrgSignin from './Components/OrgSignin';
import AddDrive from './Components/AddDrive';
import AddAlert from './Components/AddAlert';
import SectionOne from './Components/SectionOne';
import GetDrive from './Components/GetDrive';
import Carousel from './Components/Carousel';
import Hero from './Components/Hero';
import CustomNavbar from './Components/CustomNavbar';
import Patners from './Components/Patners';
import Footer from './Components/Footer';
import About from './Components/About';
import DonateEligibilityVolunteerCards from './Components/Donate';
import Donate from './Components/Donate';
import EligibilityPage from './Components/EligibilityPage';
import Dashboard from './Components/Dashboard';

function App() {
  return (
   <Router>
       <div className="App">
        <Routes>
          <Route path='/orgsignup' element={<OrgSignup/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/signin' element = {<SignIn/>}></Route>
          <Route path='/orgsignin' element = {<OrgSignin/>}></Route>
         <Route path='/addDrive' element = {<AddDrive/>}></Route>
          <Route path='/addalert' element = {<AddAlert/>}></Route>
          <Route path='/Sone' element = {<SectionOne/>}></Route>
          <Route path='/' element = {<GetDrive/>}></Route>
          <Route path='/caro' element = {<Carousel/>}></Route>
          <Route path='/hero' element = {<Hero/>}></Route>
          <Route path='/navbar' element = {<CustomNavbar/>}></Route>
          <Route path='/patners' element = {<Patners/>}></Route>
          <Route path='/footer' element = {<Footer/>}></Route>
          <Route path='/about' element = {<About/>}></Route>
          <Route path='/donate' element = {<Donate/>}></Route>
          <Route path='/eligibility' element = {<EligibilityPage/>}></Route>
          <Route path='/dashboard' element = {<Dashboard/>}></Route>

          






                  </Routes>
    </div>
   </Router>
  );
}

export default App;
