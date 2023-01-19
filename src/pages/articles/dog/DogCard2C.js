import React, { useState } from "react";
import Modal from "react-modal";
import { DogData as item } from "./DogData";
import "./DogCard.css";

export default function DogCard2C(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
          <h3>{props.article.title1}</h3>
          <h6>{props.article.title2}</h6>

          <button onClick={openModal}>Read more</button>
          <Modal isOpen={modalIsOpen} ariaHideApp={false}>
            <h3>{props.article.title3}</h3>
            <br />
            <img
              style={{
                width: 350,
                height: 350,
              }}
              src={item.img2}
            />
            <br />
            <p>{props.article.title4}</p>
            <p>{props.article.title5}</p>
            <p>{props.article.title6}</p>
            <p>{props.article.title7}</p>
            <h5>{props.article.title8}</h5>
            <ul className="foster-li">
              <li>{props.article.title9}</li>
              <li>{props.article.title10}</li>
              <li>{props.article.title11}</li>
              <li>
                {props.article.title12}
                <Link to="/articlesdog">How to Talk to Your Dog.</Link>
              </li>
              <li>{props.article.title13}</li>
            </ul>
            <h5>{props.article.title14}</h5>
            <ul className="foster-li">
              <li>{props.article.title15}</li>
            </ul>
            <h5>{props.article.title16}</h5>
            <ul className="foster-li">
              <li>{props.article.title17}</li>
              <li>{props.article.title18}</li>
              <li>{props.article.title19}</li>
              <li>{props.article.title20}</li>
            </ul>

            <img
              style={{
                width: 350,
                height: 350,
              }}
              src={item.img5}
            />
            <br />
            <h5>{props.article.title21}</h5>
            <p>{props.article.title22}</p>
            <ol className="foster-li">
              <li>{props.article.title23}</li>
              <li>{props.article.title24}</li>
              <li>{props.article.title25}</li>
              <li>{props.article.title26}</li>
              <li>{props.article.title27}</li>
            </ol>
            <img
              style={{
                width: 350,
                height: 350,
              }}
              src={item.img6}
            />
            <br />
            <h5>{props.article.title28}</h5>
            <ul className="foster-li">
              <li>{props.article.title29}</li>
              <li>{props.article.title30}</li>
              <li>{props.article.title31}</li>
              <li>{props.article.title32}</li>
              <li>{props.article.title33}</li>
              <li>{props.article.title34}</li>
              <li>{props.article.title35}</li>
              <li>{props.article.title36}</li>
              <li>{props.article.title37}</li>
              <li>{props.article.title38}</li>
            </ul>
            <p>{props.article.subtitle25}</p>
            <p>©Petfinder.com</p>
            <button onClick={closeModal}>Close</button>
          </Modal>
        </div>
      </div>
    </div>
  );
}
