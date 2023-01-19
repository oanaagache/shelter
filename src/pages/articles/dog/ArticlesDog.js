import React, { useEffect, useState } from "react";
import logo from "../../../images/image4.svg";
import { Link } from "react-router-dom";
import "../../../../src/index.scss";
import DogCard1 from "./old/DogCard1";
import DogCard2 from "./old/DogCard2";
import DogCard from "./DogCard";

import "./ArticlesDog.css";

const ArticlesDog = () => {
  const [articles, setArticles] = useState([]);

  //  fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3001/articles/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const articles = await response.json();
      setArticles(articles);
      console.log(articles);
    }
    getRecords();
    return;
  }, [articles.length]);

  return (
    <div className="articlesDog-cont">
      <div className="articlesDog-inner">
        <img
          style={({ height: "10px" }, { width: "10px" })}
          src={logo}
          alt="Not found"
        />
        <Link className="articlesDog-arrow" to="/">
          Back{" "}
        </Link>
      </div>
      <div className="articlesDog-title">More About Dog Adoption</div>

      <div className="articlesDog-container">
        {articles.map((article) => {
          return <DogCard key={article._id} article={article} />;
        })}
      </div>
    </div>
  );
};

export default ArticlesDog;
