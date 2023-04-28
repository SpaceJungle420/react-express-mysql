import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import GetAll from "./pages/GetAll";
import Get from "./pages/Get";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Delete from "./pages/Delete";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Products:</h1>
        <div className="links">
          <Link to="/">Get All</Link>
          <Link to="/Get">Get</Link>
          <Link to="/Create">Create</Link>
          <Link to="/Update">Update</Link>
          <Link to="/Delete">Delete</Link>
        </div>
        <Routes>
          <Route path="/" Component={GetAll} />
          <Route path="/Get" Component={Get} />
          <Route path="/Create" Component={Create} />
          <Route path="/Update" Component={Update} />
          <Route path="/Delete" Component={Delete} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
