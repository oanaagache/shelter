import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Donate from "./pages/donate/Donate";
import Foster from "./pages/foster/Foster";
import Adopt from "./components/adopt/Adopt";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Card from "./components/card/Card";
import Success from "./components/success/Success";
import CountrySelector from "./components/countryselector/CountrySelector";
import Articles from "./pages/articles/Articles";
import ArticlesDog from "./pages/articles/dog/ArticlesDog";
import ArticlesCat from "./pages/articles/cat/ArticlesCat";
import AdoptionForm from "./components/adoptionform/AdoptionForm";
import Edit from "./components/list/edit/Edit";
import List from "./components/list/list/List";
//import AddArticles from "./components/form/AddArticles";
import Register from "./components/register/Register";
import Login from "./components/login/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("loggedIn")));
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
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
        <Route path="/articlesdog" element={<ArticlesDog />} />
        <Route path="/articlescat" element={<ArticlesCat />} />
        <Route path="/card/" element={<Card />} />
        <Route path="/card/:id" element={<Card isLoggedIn={isLoggedIn} />} />
        <Route path="/card/:name" element={<Card />} />
        <Route path="/countryselector" element={<CountrySelector />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/foster" element={<Foster />} />

        <Route
          path="/Navbar"
          element={<Navbar isLoggedIn={isLoggedIn} isAdmin={isAdmin} />}
        />
        <Route
          path="/login"
          element={
            <Login
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              isAdmin={isAdmin}
              setAdmin={setAdmin}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/success/:name" element={<Success />} />
        <Route path="/success/:email" element={<Success />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/list" element={<List />} />
        {/* <Route path="/addarticles" element={<AddArticles />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
