import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/navigation/NavBar";
import Login from "./components/session/Login";
import SignUp from "./components/session/SignUp";
import Home from "./components/static/Home";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="signup" element={ <SignUp /> } />
        <Route path="login" element={ <Login /> } />
      </Routes>
    </Router>
  );
}

export default App;
