import React, { Component } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Layouts from './layouts'
import Layouts from "./layots";
import App from "./App";
// import Login from './login'
import Loginpag from "./loginpag";

export default class routerss extends Component {
  render() {
    return (
      <div style={{height:"50vh"}}>
        <BrowserRouter>
          <ul style={{ backgroundColor: "darkblue",height:"15%",lineHeight:"30px" }}>
            <li style={{ listStyle: "none" }}>
              <Link
                to="/Loginpag"
                style={{ marginRight: "4%", textDecoration: "none",color:"white"}}
              >
                Login
              </Link>

              <Link
                to="/header"
                style={{ marginRight: "2%", textDecoration: "none",color:"white" }}
              >
                Products
              </Link>
              <Link to="/App" style={{ textDecoration: "none" ,color:"white" }}>
                App
              </Link>
              <Link
                to="/Loginpag"
                style={{ marginLeft: "6%", textDecoration: "none",color:"white" }}
              >
                logout
              </Link>
            </li>
          </ul>
          <Routes>
            <Route path="/loginpag" element={<Loginpag />}></Route>

            <Route path="/header" element={<Layouts />}></Route>
            <Route path="/app" element={<App />}></Route>
            <Route path="/Loginpag" element={<Loginpag />}></Route>
            <Route path="*" element={"not fount"}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
