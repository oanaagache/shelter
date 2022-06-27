import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./others/Search";
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
import AdoptionForm from "./AdoptionForm";
import Success from "./Success";
import Responses from "./Responses";
import Details from "./Details";
import List from "./List";
import CountrySelector from "./CountrySelector";
import ArticlesDog from "./others/ArticlesDog";
import ArticlesCat from "./others/ArticlesCat";

function App() {
  const [listResponses, setListResponses] = useState([]);

  //Se preia din localStorage continutul asociat cheii "shelter".
  useEffect(() => {
    setListResponses(JSON.parse(localStorage.getItem("shelter")));
  }, []);

  useEffect(() => {
    //memoreaza listResponses codificata in json
    localStorage.setItem("shelter", JSON.stringify(listResponses));
  }, [listResponses]);

  var newArray = listResponses.filter((listResponses) => {
    return listResponses.lastName !== "Benchea";
  });

  useEffect(() => {
    localStorage.setItem("shelter", JSON.stringify(newArray));
  }, [newArray]);

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
        <Route
          path="/adoptionform/:name"
          element={
            <AdoptionForm
              listResponses={listResponses}
              setListResponses={setListResponses}
            />
          }
        />
        <Route path="/success/:name" element={<Success />} />
        <Route
          path="/responses"
          element={<Responses listResponses={listResponses} />}
        />
        <Route path="/details" element={<Details />} />
        <Route path="/list" element={<List listResponses={listResponses} />} />
        <Route path="/countryselector" element={<CountrySelector />} />
        <Route path="/articlesdog" element={<ArticlesDog />} />
        <Route path="/articlescat" element={<ArticlesCat />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
