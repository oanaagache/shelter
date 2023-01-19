import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { DogData as item } from "./DogData";
import "./DogCard.css";

export default function DogCard(props) {
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
          src={item.img1}
        />
      </div>

      <div className="dogCard-card-inner">
        <div className="dogCard-card-details">
          <h3>{props.article.title1}</h3>
          <h6>{props.article.title2}</h6>

          <button onClick={openModal}>Read more</button>
          <Modal isOpen={modalIsOpen} ariaHideApp={false}>
            <h3>{props.article.title1}</h3>
            <img
              style={{
                width: 350,
                height: 350,
              }}
              src={item.img1}
              alt="Not found"
            />
            <br />
            <p>{props.article.title3}</p>
            <h5>{props.article.title4}</h5>
            <h6>{props.article.title5}</h6>
            <ol>
              <li>{props.article.title6}</li>
              <li>{props.article.title7}</li>
              <li>{props.article.title8}</li>
              <li>{props.article.title9} </li>
              <li>{props.article.title10}</li>
              <li>{props.article.title11}</li>
              <li>{props.article.title12}</li>
              <li>{props.article.title13}</li>
              <li>{props.article.title14}</li>
              <li>{props.article.title15}</li>
            </ol>
            <p>{props.article.title16}</p>
            <ol>
              <li>{props.article.title17}</li>
              <li>{props.article.title18}</li>
              <li>{props.article.title19}</li>
              <li>{props.article.title20}</li>
              <li>{props.article.title21}</li>
              <li>{props.article.title22}</li>
              <li>{props.article.title23}</li>
              <li>{props.article.title24}</li>
              <li>{props.article.title25}</li>
              <li>{props.article.title26}</li>
            </ol>
            <li>{props.article.title27}</li>
            <li>{props.article.title28}</li>
            <ul>
              <li>{props.article.title29}</li>
              <li>{props.article.title30}</li>
              <li>{props.article.title31}</li>
              <li>{props.article.title32}</li>
              <li>{props.article.title33}</li>
            </ul>
            <h5>{props.article.title34}</h5>
            <li>{props.article.title35}</li>
            <li>{props.article.title36}</li>
            <li>{props.article.title37}</li>
            <li>{props.article.title38}</li>
            <p>©Petfinder.com</p>
            <button onClick={closeModal}>Close</button>
          </Modal>
        </div>
      </div>
    </div>
  );
}
