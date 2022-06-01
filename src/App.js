import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./Search";
import About from "./About";
import Donate from "./Donate";
import Foster from "./Foster";
import Adopt from "./Adopt";
import Other from "./Other";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";
import Card from "./Card";
import Cards from "./Cards";

import Adoption from "./Adoption";

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
        <Route path="/card" element={<Card />} />

        <Route path="/adoption" element={<Adoption />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
