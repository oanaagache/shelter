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
import Details from "./components/details/Details";
import CountrySelector from "./components/countryselector/CountrySelector";
import ArticlesDog from "./pages/articles/dog/ArticlesDog";
import ArticlesCat from "./pages/articles/cat/ArticlesCat";
import AdoptionForm from "./components/form/AdoptionForm";
import Register from "./components/login/Register";
import Login from "./components/login/Login";
//import Users from "./users/Users";
import Users2 from "./users/Users2";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        <Route path="/articlesdog" element={<ArticlesDog />} />
        <Route path="/articlescat" element={<ArticlesCat />} />
        <Route path="/card/" element={<Card />} />
        <Route path="/card/:id" element={<Card isLoggedIn={isLoggedIn} />} />
        <Route path="/card/:name" element={<Card />} />
        <Route path="/countryselector" element={<CountrySelector />} />
        <Route path="/details" element={<Details />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/foster" element={<Foster />} />
        <Route
          path="/login"
          element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/Navbar:isLoggedIn" element={<Navbar />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success/:name" element={<Success />} />
        //
        {/* <Route path="/users" element={<Users />} /> */}
        <Route path="/users2" element={<Users2 />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
