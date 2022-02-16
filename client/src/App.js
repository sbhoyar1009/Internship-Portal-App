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
import Details from "./Pages/Details";
import NotFound from "./NotFound";
import PostAnInternship from "./Pages/PostAnInternship";
import Admin from "./Pages/Admin";
import Edit from "./Pages/Edit";

export default function App() {
  return (
    <div className = "App">
    <Router>
        <div class="p-3" >
          
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
          <Route path={"/details/:id"} element={<Details/>}>
          </Route>
          <Route path="/post-an-internship" element={<PostAnInternship/>}>
          </Route>
          <Route path="/admin" element={<Admin/>}>
          </Route>
          <Route path="/edit-existing-internship" element={<Edit/>}>
          </Route>
          <Route path="/*" element={<NotFound/>}>
          </Route>
          </Routes>
          {/* <NotFound /> */}
        
      </div>
    </Router>
    </div>
  );
}