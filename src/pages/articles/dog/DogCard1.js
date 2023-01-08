import React, { useState } from "react";
import Modal from "react-modal";
import { DogData as item } from "./DogData";

function DogCard1() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="adopt-container">
      <div className="adopt-header">
        <div className="adopt-content">
          <div className="adopt-inner">
            <img
              style={{
                width: 350,
                height: 350,
              }}
              src={item.img1}
            />
          </div>
        </div>
      </div>

      <div className="card-inner">
        <div className="card-details">
          <h3>{item.title1}</h3>
          <h6>{item.subtitle1}</h6>

          <button onClick={() => setModalOpen(true)}>Read more</button>
          <Modal isOpen={modalOpen}>
            <h3>{item.title1}</h3>
            <img
              style={{
                width: 350,
                height: 350,
              }}
              src={item.img1}
              alt="Not found"
            />
            <br />
            <p>{item.subtitle2}</p>
            <h5>{item.subtitle3}</h5>
            <h6>{item.subtitle4}</h6>
            <ol>
              <li>{item.li1}</li>
              <li>{item.li2}</li>
              <li>{item.li3}</li>
              <li>{item.li4} </li>
              <li>{item.li5}</li>
              <li>{item.li6}</li>
              <li>{item.li7}</li>
              <li>{item.li8}</li>
              <li>{item.li9}</li>
              <li>{item.li10}</li>
            </ol>
            <p>{item.subtitle5}</p>
            <ol>
              <li>{item.li11}</li>
              <li>{item.li12}</li>
              <li>{item.li13}</li>
              <li>{item.li14} </li>
              <li>{item.li15}</li>
              <li>{item.li16}</li>
              <li>{item.li17}</li>
              <li>{item.li18}</li>
              <li>{item.li19}</li>
              <li>{item.li20}</li>
            </ol>
            <p>{item.subtitle6}</p>
            <p>{item.subtitle7}</p>
            <ul>
              <li>{item.li21}</li>
              <li>{item.li22}</li>
              <li>{item.li23}</li>
              <li>{item.li24} </li>
              <li>{item.li25}</li>
              <li>{item.li26}</li>
              <li>{item.li27}</li>
            </ul>
            <h5>{item.subtitle8}</h5>
            <p>{item.subtitle9}</p>
            <p>{item.subtitle10}</p>
            <p>{item.subtitle11}</p>
            <p>{item.subtitle12}</p>
            <p>©Petfinder.com</p>
            <button onClick={() => setModalOpen(false)}>Close</button>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default DogCard1;
