import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FamilyDisplay from "./components/family/FamilyDisplay";
import NavBar from "./components/navigation/NavBar";
import Login from "./components/session/Login";
import SignUp from "./components/session/SignUp";
import Home from "./components/static/Home";

const App = () => {
  const [family, setFamily] = useState(null)
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch("/api/family")
      .then((r) => {
        if (r.ok) {
          r.json().then((family) => {
            setFamily(family)
            setLoggedIn(true)
          });
        }
      });
      // fetch("/api/family")
      // .then((r) => {
      //   if (r.ok) {
      //     r.json().then((family) => {
      //       setFamily(family)
      //       setLoggedIn(true)
      //     });
      //   }
      // });
  }, []);

  const handleAddMember = (newMember) => {
    setFamily([...family.users, newMember])
  }

  console.log(family)
  return (
    <Router>
      <NavBar family={ family } user={ user } setFamily={ setFamily } setUser={ setUser } />
      { user === null ? null : <FamilyDisplay family={ family } onAddMember={ handleAddMember }/> }
      <Routes>
        <Route path="/" element={ <Home family={ family } onAddMember={ handleAddMember } /> } />
        <Route path="signup" element={ <SignUp setFamily={ setFamily } /> } />
        <Route path="login" element={ <Login setFamily={ setFamily } setUser={ setUser }/> } />
      </Routes>
    </Router>
  );
}

export default App;
