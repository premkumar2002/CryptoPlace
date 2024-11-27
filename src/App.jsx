import React from "react";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import Footer from "./components/Footer";
import Features from './components/Features';
import Pricing from './components/Pricing';
import Blog from './components/Blog';

const App = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#0b004e] via-[#1d152f] to-[#002834]">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coin/:id' element={<Coin/>} />
        <Route path='/Features' element={<Features/>} />
        <Route path='/Pricing' element={<Pricing/>} />
        <Route path='/Blog' element={<Blog/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
