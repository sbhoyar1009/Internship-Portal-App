import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Student from "./Student";
import ForgotPassword from "./ForgotPassword";
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