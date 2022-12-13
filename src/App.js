
import './App.css';
import React from 'react';
import Header from "./Header"
import Articles from "./Articles"
import Login from "./Login"
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Articles />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer-class">
      <small>2022 All rights reserved</small>
    </footer>
  );
}

function About() {
  return (
    <div >
      <h1>This is about</h1>
    </div>
  );
}

export default App;
