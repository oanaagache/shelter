import React, { useState, useEffect } from "react";
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
import Responses from "./components/responses/Responses";
import Details from "./components/details/Details";
import CountrySelector from "./components/countryselector/CountrySelector";
import List from "./components/list/List";
import ArticlesDog from "./pages/other/ArticlesDog";
import ArticlesCat from "./pages/other/ArticlesCat";
import AdoptionForm from "./components/form/AdoptionForm";
import Register from "./components/login/Register";
import Login from "./components/login/Login";

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

  //console.log(listResponses);
  var newArray = listResponses.filter((listResponses) => {
    return listResponses.lastName !== "Neacsu";
  });

  useEffect(() => {
    localStorage.setItem("shelter", JSON.stringify(newArray));
  }, [newArray]);

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
        <Route path="/countryselector" element={<CountrySelector />} />
        <Route path="/list" element={<List listResponses={listResponses} />} />
        <Route path="/articlesdog" element={<ArticlesDog />} />
        <Route path="/articlescat" element={<ArticlesCat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Navbar:loggedUser" element={<Navbar />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
