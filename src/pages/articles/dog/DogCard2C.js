import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { DogData as item } from "./DogData";
import "./DogCard.css";

export default function DogCard2C(props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="dogCard-cont">
      <div className="dogCard-inner">
        <img
          style={{
            width: 350,
            height: 350,
          }}
          src={item.img2}
        />
      </div>

      <div className="dogCard-card-inner">
        <div className="dogCard-card-details">
          <h3>{props.article.title2}</h3>
          <h6>{props.article.subtitle13}</h6>

          <button onClick={() => setModalOpen(true)}>Read more</button>
          <Modal isOpen={modalOpen}>
            <h3>{props.article.subtitle14}</h3>
            <br />
            <img
              style={{
                width: 350,
                height: 350,
              }}
              src={item.img2}
            />
            <br />
            <p>{props.article.subtitle15}</p>
            <p>{props.article.subtitle16}</p>
            <p>{props.article.subtitle17}</p>
            <p>{props.article.subtitle18}</p>
            <h5>{props.article.subtitle19}</h5>
            <ul className="foster-li">
              <li>{props.article.li26}</li>
              <li>{props.article.li27}</li>
              <li>{props.article.li28}</li>
              <li>
                {props.article.li29}
                <Link to="/articlesdog">How to Talk to Your Dog.</Link>
              </li>
              <li>{props.article.li30}</li>
            </ul>
            <h5>{props.article.subtitle20}</h5>
            <ul className="foster-li">
              <li>{props.article.li31}</li>
            </ul>
            <h5>{props.article.subtitle21}</h5>
            <ul className="foster-li">
              <li>{props.article.li32}</li>
              <li>{props.article.li33}</li>
              <li>{props.article.li34}</li>
              <li>{props.article.li35}</li>
            </ul>

            <img
              style={{
                width: 350,
                height: 350,
              }}
              src={item.img5}
            />
            <br />
            <h5>{props.article.subtitle22}</h5>
            <p>{props.article.subtitle23}</p>
            <ol className="foster-li">
              <li>{props.article.li36}</li>
              <li>{props.article.li37}</li>
              <li>{props.article.li38}</li>
              <li>{props.article.li39}</li>
              <li>{props.article.li40}</li>
            </ol>
            <img
              style={{
                width: 350,
                height: 350,
              }}
              src={item.img6}
            />
            <br />
            <h5>{props.article.subtitle24}</h5>
            <ul className="foster-li">
              <li>{props.article.li41}</li>
              <li>{props.article.li42}</li>
              <li>{props.article.li43}</li>
              <li>{props.article.li44}</li>
              <li>{props.article.li45}</li>
              <li>{props.article.li46}</li>
              <li>{props.article.li47}</li>
              <li>{props.article.li48}</li>
              <li>{props.article.li49}</li>
              <li>{props.article.li50}</li>
            </ul>
            <p>{props.article.subtitle25}</p>
            <p>©Petfinder.com</p>
            <button onClick={() => setModalOpen(false)}>Close</button>
          </Modal>
        </div>
      </div>
    </div>
  );
}
