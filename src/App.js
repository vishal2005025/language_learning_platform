
import './App.css';
import Header from './components/common/heading/Header';
import LoginSignup from './components/LoginSignup/LoginSignup';
import { useState, useEffect } from 'react';
import axios from 'axios';
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
import Price from './components/pricing/Price';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Solution from './components/solution/Solution';


function App() {
  const [students, setStudents]=useState([])
  useEffect(()=>{
    async function getAllStudent(){
      try{
        const students = await axios.get("http://127.0.0.1:8000/students/login/")
        console.log(students.data)
        setStudents(students.data)
      } catch(error){

      }
    }
    getAllStudent()
  },[])
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginSignup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<CourseHome />} />
          <Route path='/team' element={<Team />} />
          <Route path='/pricing' element={<Price />} />
          <Route path='/journal' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/solution' element={<Solution />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
