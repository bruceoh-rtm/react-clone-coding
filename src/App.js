import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Home } from "pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
