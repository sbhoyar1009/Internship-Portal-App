import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from "./Login";
import "./App.css";
export default function App() {
  return (
    <div className = "App">
    <Router>
      {/* <div class="d-flex flex-row-reverse p-3">
        <nav>
              <Link to="/login">Login</Link> {" "}
              <Link to="/about">About</Link>{" "}
            
              <Link to="/users">Users</Link>{" "}
            
        </nav>
        </div> */}
        <div class="p-3" >
          <nav>
            {/* <strong>Hi</strong> */}
          </nav>
        </div>
        <div>

        <Routes>
          <Route path="/" element={<Login/>}>
          </Route>
        </Routes>
      </div>
    </Router>
    </div>
  );
}