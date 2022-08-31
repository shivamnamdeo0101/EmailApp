import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./loginform";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup/" element={<Signup />} />
        <Route exact path="/dashboard/" element={<Dashboard />} />
        <Route exact path="/google_login/" element={<LoginForm />} />
        
      </Routes>
    </Router>
  );
};

export default App;
