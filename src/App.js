import "./App.css";
import Landingpage from "./components/Landingpage";
import Categories from "./components/Categories";
import Contact from "./components/Contacts";
import Architecture from "./components/Architecture";
import Food from "./components/Food";
import Portrait from "./components/Portrait";

import React from "react";
import InstagramFeed from './components/InstagramFeed';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {


  return (
    <Router>
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landingpage />
                <Categories />
                <Contact />
                <div className="content">
                  <InstagramFeed/>
                </div>
              </>
            }
          />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/food" element={<Food />} />
          <Route path="/portrait" element={<Portrait />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
