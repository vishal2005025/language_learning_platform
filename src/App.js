
import './App.css';
import LoginSignup from './components/LoginSignup/LoginSignup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Price from './components/pricing/Price';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import { ToastContainer } from 'react-toastify';
import Login from './components/LoginSignup/Login';
import Chatabot from './components/chatbot/Chatabot'


function App() {
  return (
    <>
      <Router>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path='/signup' element={<LoginSignup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<CourseHome />} />
          <Route path='/team' element={<Team />} />
          <Route path='/pricing' element={<Price />} />
          <Route path='/journal' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Chatabot' element={<Chatabot />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
