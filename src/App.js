import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Donate from "./pages/donate/Donate";
import Foster from "./pages/foster/Foster";
import Adopt from "./components/adopt/Adopt";
import Other from "./pages/other/Other";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Card from "./components/card/Card";
import Success from "./components/success/Success";
import Details from "./components/details/Details";
import CountrySelector from "./components/countryselector/CountrySelector";
import ArticlesDog from "./pages/other/ArticlesDog";
import ArticlesCat from "./pages/other/ArticlesCat";
import CardO from "./old/CardO";
import AdoptO from "./old/AdoptO";

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
        <Route path="/card" element={<Card />} />
        <Route path="/card/:id" element={<Card />} />
        <Route path="/adopto" element={<AdoptO />} />
        <Route path="/cardo" element={<CardO />} />
        <Route path="/cardo/:id" element={<CardO />} />
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
