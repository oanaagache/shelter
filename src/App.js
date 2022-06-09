import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./Search";
import About from "./others/About";
import Donate from "./others/Donate";
import Foster from "./others/Foster";
import Adopt from "./Adopt";
import Other from "./others/Other";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";
import Card from "./Card";
import Cards from "./Cards";
import Adoption from "./Adoption";
import Success from "./Success";
import Responses from "./Responses";
import Intro from "./Intro";
import List from "./List";
import Response from "./Response";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/foster" element={<Foster />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/other" element={<Other />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/card/:id" element={<Card />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/success" element={<Success />} />
        <Route path="/responses" element={<Responses />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/list" element={<List />} />
        <Route path="/response" element={<Response />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
