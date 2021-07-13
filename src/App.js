import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "components/SideBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
