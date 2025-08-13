import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AuthProvider, { AuthContext } from "./Context/AuthContext";
import AppNavbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProfileSetup from "./Pages/ProfileSetup";

const App = () => (
  <AuthProvider>
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
