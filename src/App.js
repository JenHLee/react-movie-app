import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
        <Navigation />{/* everything have to inside of the BrowersRouter*/}
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;