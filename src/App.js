
import './App.css';
import Header from './components/common/heading/Header';

// import LoginSignup from './components/LoginSignup/LoginSignup';
/*import { BrowserRouter, Routes, Route, Router } from "react-router-dom";*/


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';

function App() {
  return (
<>
<Router>

<Header/>

<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/courses' element={<CourseHome/>}/>
<Route path='/team' element={<Team/>}/>

{/* <Route path='/' element= {<LoginSignup/>} /> */}

</Routes>      
</Router>

</>
  
  );
}

export default App;
