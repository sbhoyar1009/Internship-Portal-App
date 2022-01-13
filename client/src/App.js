import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Student from "./Pages/Student";
import ForgotPassword from "./Pages/ForgotPassword";
import "./App.css";

export default function App() {
  return (
    <div className = "App">
    <Router>
        <div class="p-3" >
          <nav>
          </nav>
        </div>
        <div>

        <Routes>
          <Route path="/" element={<Login/>}>
          </Route>
          <Route path="/signup" element={<SignUp/>}>
          </Route>
          <Route path="/student" element={<Student/>}>
          </Route>
          <Route path="/forgot-password" element={<ForgotPassword/>}>
          </Route>
        </Routes>
      </div>
    </Router>
    </div>
  );
}