import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from './pages/Register';
import Login from './pages/Login';
import Home  from './components/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />

      </Routes>
      <Footer></Footer>

    </Router>

  );
}

export default App;
