import React, { useState } from "react";
import Modal from "react-modal";

import { Link } from "react-router-dom";

function CatCard1({ item }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex flex-row flex-wrap box-content mt-4 sm:mx-1">
      <div className="max-w-full flex flex-col flex-wrap m-auto object-contain items-center box-content">
        <div className="rounded overflow-hidden bg-el shadow-lg w-80 cursor-pointer m-5 box-content">
          <img
            style={{
              width: 350,
              height: 350,
            }}
            src={item.img1}
            alt="Not found"
          />

          <div className="card-inner">
            <div className="card-details">
              <h3>{item.title1}</h3>
              <h6>{item.subtitle1}</h6>

              <button onClick={() => setModalOpen(true)}>Read more</button>
              <Modal isOpen={modalOpen}>
                <h3>{item.title2}</h3>
                <p>
                  {item.subtitle1} {item.subtitle2}
                </p>
                <p>{item.subtitle3}</p>
                <h5>{item.subtitle4}</h5>
                <ol>
                  <li>{item.li1}</li>
                  <li>
                    {item.li2}
                    <Link to="/articlescat">How to Choose A Cat Litter.</Link>
                  </li>
                  <li>
                    {item.li3}
                    <Link to="/articlescat">Cat Nutrition</Link> section.
                  </li>
                  <li>{item.li4}</li>
                  <li>
                    {item.li5}
                    <Link to="/articlescat">
                      how to cut down on kitty’s scratching, how to choose a
                      scratching post,
                    </Link>
                    and facts about
                    <Link to="/articlescat"> declawing cats.</Link>
                  </li>
                  <li>{item.li6}</li>
                  <li>{item.li7}</li>
                  <li>{item.li8}</li>
                  <li>{item.li9}</li>
                  <li>
                    {item.li10}{" "}
                    <Link to="/catArticles">Living with Cats and Dogs.</Link>{" "}
                  </li>
                </ol>
                <h5>{item.subtitle5}</h5>
                <p>{item.subtitle6}</p>
                <ol>
                  <li>{item.li11}</li>
                  <li>{item.li12}</li>
                </ol>

                <h5>{item.subtitle7}</h5>
                <p>{item.subtitle8}</p>
                <ol>
                  <li>
                    {item.li13}{" "}
                    <Link to="/catArticles">finding the right vet </Link>
                    for you and your cat.
                  </li>
                  <li>
                    {item.li14}
                    <Link to="/catArticles">
                      {" "}
                      Keeping Your Cat from Getting Bored.{" "}
                    </Link>
                  </li>
                </ol>
                <p>{item.subtitle9}</p>

                <p>©Petfinder.com</p>
                <button onClick={() => setModalOpen(false)}>Close</button>
              </Modal>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default CatCard1;
