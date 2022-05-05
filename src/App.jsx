import { useState } from 'react';
import logo from './logo.svg'; 
import './App.css'
import {Footer} from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { LandingPage } from './components/landingPage';


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <LandingPage/>
     <Footer></Footer>
    </div>
  );
}

export default App;
