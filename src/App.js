import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/nav/Navbar";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Adopt from "./pages/adopt/Adopt";
import CountrySelector from "./components/countryselector/CountrySelector";
import Card from "./components/card/Card";
import AdoptionForm from "./pages/adoptionform/AdoptionForm";
import Success from "./pages/success/Success";
import Donate from "./pages/donate/Donate";
import Foster from "./pages/foster/Foster";
import Articles from "./pages/art/articles/Articles";
import DogArticles from "./pages/art/dog/dogarticles/DogArticles";

import ArticlesCat from "./pages/art/cat/ArticlesCat";

import AddArticles from "./pages/add/AddArticles";

import Edit from "./pages/edit/Edit";
import List from "./pages/list/List";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Footer from "./layouts/footer/Footer";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("loggedIn")));
    //console.log(isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    setAdmin(JSON.parse(localStorage.getItem("Admin is loggedIn")));
    //console.log(isAdmin);
  }, [isAdmin]);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/adoptionform" element={<AdoptionForm />} />
        <Route
          path="/adoptionform/:name"
          element={<AdoptionForm isLoggedIn={isLoggedIn} />}
        />
        <Route path="/articles" element={<Articles />} />
        <Route path="/dogArticles" element={<DogArticles />} />
        <Route path="/articlescat" element={<ArticlesCat />} />
        <Route path="/card/" element={<Card />} />
        <Route path="/card/:id" element={<Card isLoggedIn={isLoggedIn} />} />
        <Route path="/card/:name" element={<Card />} />
        <Route path="/countryselector" element={<CountrySelector />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/foster" element={<Foster />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} setAdmin={setAdmin} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/success/:name" element={<Success />} />
        <Route path="/success/:email" element={<Success />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/list" element={<List />} />
        <Route path="/addArticles" element={<AddArticles />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
