import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./others/About";
import Donate from "./others/Donate";
import Foster from "./others/Foster";
import Adopt from "./Adopt";
import Other from "./others/Other";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";
import Card from "./Card";
import Success from "./Success";
import Details from "./Details";
import CountrySelector from "./CountrySelector";
import ArticlesDog from "./others/ArticlesDog";
import ArticlesCat from "./others/ArticlesCat";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/foster" element={<Foster />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/other" element={<Other />} />
        <Route path="/card/:id" element={<Card />} />
        <Route path="/success/:name" element={<Success />} />
        <Route path="/details" element={<Details />} />
        <Route path="/countryselector" element={<CountrySelector />} />
        <Route path="/articlesdog" element={<ArticlesDog />} />
        <Route path="/articlescat" element={<ArticlesCat />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
