import React, { useState } from "react";
import Modal from "react-modal";
import { DogData as item } from "./DogData";
import "./DogCard.css";

export default function DogCard1C({ articles }) {
  const [modalOpen, setModalOpen] = useState(false);

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
          <h3>{articles.title1}</h3>
          <h6>{articles.subtitle1}</h6>

          <button onClick={() => setModalOpen(true)}>Read more</button>
          <Modal isOpen={modalOpen} ariaHideApp={false}>
            <h3>{articles.title1}</h3>
            <img
              style={{
                width: 350,
                height: 350,
              }}
              src={item.img1}
              alt="Not found"
            />
            <br />
            {/* <p>{props.article.subtitle2}</p>
            <h5>{props.article.subtitle3}</h5>
            <h6>{props.article.subtitle4}</h6>
            <ol>
              <li>{props.article.li1}</li>
              <li>{props.article.li2}</li>
              <li>{props.article.li3}</li>
              <li>{props.article.li4} </li>
              <li>{props.article.li5}</li>
              <li>{props.article.li6}</li>
              <li>{props.article.li7}</li>
              <li>{props.article.li8}</li>
              <li>{props.article.li9}</li>
              <li>{props.article.li10}</li>
            </ol>
            <p>{props.article.subtitle5}</p>
            <ol>
              <li>{props.article.li11}</li>
              <li>{props.article.li12}</li>
              <li>{props.article.li13}</li>
              <li>{props.article.li14} </li>
              <li>{props.article.li15}</li>
              <li>{props.article.li16}</li>
              <li>{props.article.li17}</li>
              <li>{props.article.li18}</li>
              <li>{props.article.li19}</li>
              <li>{props.article.li20}</li>
            </ol>
            <p>{props.article.subtitle6}</p>
            <p>{props.article.subtitle7}</p>
            <ul>
              <li>{props.article.li21}</li>
              <li>{props.article.li22}</li>
              <li>{props.article.li23}</li>
              <li>{props.article.li24} </li>
              <li>{props.article.li25}</li>
            </ul>
            <h5>{props.article.subtitle8}</h5>
            <p>{props.article.subtitle9}</p>
            <p>{props.article.subtitle10}</p>
            <p>{props.article.subtitle11}</p>
            <p>{props.article.subtitle12}</p> */}
            <p>©Petfinder.com</p>
            <button onClick={() => setModalOpen(false)}>Close</button>
          </Modal>
        </div>
      </div>
    </div>
  );
}
