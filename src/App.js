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
import Details from "./components/details/Details";
import CountrySelector from "./components/countryselector/CountrySelector";
import ArticlesDog from "./pages/other/ArticlesDog";
import ArticlesCat from "./pages/other/ArticlesCat";
import AdoptionForm from "./components/form/AdoptionForm";
import Register from "./components/login/Register";
import Login from "./components/login/Login";
import Admin from "./components/admin/Admin";
import AdminRegister from "./components/admin/AdminRegister";
import AdminLogin from "./components/admin/AdminLogin";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInA, setIsLoggedInA] = useState(false);

  console.log("isLoggedIn App: " + isLoggedIn);
  console.log("isLoggedInA App: " + isLoggedInA);

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("loggedIn")));
  }, []);
  console.log("isLoggedIn uE App: " + isLoggedIn);

  useEffect(() => {
    setIsLoggedInA(JSON.parse(localStorage.getItem("loggedInA")));
  }, []);
  console.log("isLoggedInA uE App: " + isLoggedInA);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/adminlogin"
          element={
            <AdminLogin
              isLoggedInA={isLoggedInA}
              setIsLoggedInA={setIsLoggedInA}
            />
          }
        />
        <Route path="/adminregister" element={<AdminRegister />} />
        <Route path="/adopt" element={<Adopt />} />

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
        <Route path="/other" element={<Other />} />
        <Route path="/Navbar:isLoggedIn" element={<Navbar />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success/:name" element={<Success />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
