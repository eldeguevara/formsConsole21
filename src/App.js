import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/layout/Nav";
import "bootstrap/dist/css/bootstrap.css";
import layoutPages from "./pages/layout/layoutPages";
import './assets/css/App.css'

function App() {
  return (
    <BrowserRouter>
      <Nav>
        <Routes>
          {layoutPages.map((item, index) => (
            <Route path={item.name} element={item.page} />
          ))}
        </Routes>
      </Nav>
    </BrowserRouter>
  );
}

export default App;
