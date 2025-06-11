import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Eventify/Navbar";
import Home from "./Eventify/Home";
import Login from "./Eventify/Login";
import Signup from "./Eventify/Signup";
import AboutUs from "./Eventify/AboutUs";
import Services from "./Eventify/Services";
import ImageGallery from "./Eventify/ImageGallery";
import EventList from "./Eventify/EventList";
import EventDetails from "./Eventify/EventDetails";
import Weddings from "./Eventify/Weddings";
import Birthday from "./Eventify/Birthday";
import PrivateEvent from "./Eventify/PrivateEvent";
import Graduation from "./Eventify/Graduation";
import Festivals from "./Eventify/Festivals";
import Contact from "./Eventify/Contact";
import Blog from "./Eventify/Blog";
import ScrollToTop from "./Eventify/ScrollToTop";
import Footer from "./Eventify/Footer";



function App(){ return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/login' element = {<Login/>}/>
    <Route path='/signup' element = {<Signup/>}/>
    <Route path='/aboutUs' element = {<AboutUs/>}/>
     <Route path='/services' element = {<Services/>}/>
    <Route path='/imageGallery' element = {<ImageGallery/>}/>
    <Route path='/eventList' element = {<EventList/>}/>
     <Route path='/eventDetails' element = {<EventDetails/>}/>
    <Route path='/weddings' element = {<Weddings/>}/>
    <Route path='/birthday' element = {<Birthday/>}/>
    <Route path='/privateevent' element = {<PrivateEvent/>}/>
    <Route path='/graduation' element = {<Graduation/>}/>
    <Route path='/festivals' element = {<Festivals/>}/>
     <Route path='/blog' element = {<Blog/>}/>
    <Route path='/contact' element = {<Contact/>}/>
  
   
  </Routes>
   <ScrollToTop />
 <Footer/>
  </BrowserRouter>
  )
}


export default App;
