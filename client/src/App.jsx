import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/navigation/NavBar";
import Login from "./components/session/Login";
import SignUp from "./components/session/SignUp";
import Home from "./components/static/Home";

const App = () => {
  const [family, setFamily] = useState(null)

  useEffect(() => {
    fetch("/api/family")
      .then((r) => {
        if (r.ok) {
          r.json().then((family) => setFamily(family));
        }
      });
  }, []);

  console.log(family)
  return (
    <Router>
      <NavBar family={ family } setFamily={ setFamily }/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="signup" element={ <SignUp setFamily={ setFamily } /> } />
        <Route path="login" element={ <Login setFamily={ setFamily } /> } />
      </Routes>
    </Router>
  );
}

export default App;
