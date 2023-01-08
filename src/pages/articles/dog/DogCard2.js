import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { DogData as item } from "./DogData";

function DogCard2() {
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
            src={item.img2}
            alt="Not found"
          />

          <div className="card-inner">
            <div className="card-details">
              <h3>{item.title2}</h3>
              <h6>{item.subtitle13}</h6>

              <button onClick={() => setModalOpen(true)}>Read more</button>
              <Modal isOpen={modalOpen}>
                <h3>{item.subtitle14}</h3>
                <br />
                <img
                  style={{
                    width: 350,
                    height: 350,
                  }}
                  src={item.img2}
                />
                <br />
                <p>{item.subtitle15}</p>
                <p>{item.subtitle16}</p>
                <p>{item.subtitle17}</p>
                <p>{item.subtitle18}</p>
                <h5>{item.subtitle19}</h5>
                <ul className="foster-li">
                  <li>{item.li28}</li>
                  <li>{item.li29}</li>
                  <li>{item.li30}</li>
                  <li>
                    {item.li31}
                    <Link to="/articlesdog">How to Talk to Your Dog.</Link>
                  </li>
                  <li>{item.li32}</li>
                </ul>
                <h5>{item.subtitle20}</h5>
                <ul className="foster-li">
                  <li>{item.li33}</li>
                </ul>
                <h5>{item.subtitle21}</h5>
                <ul className="foster-li">
                  <li>{item.li34}</li>
                  <li>{item.li35}</li>
                  <li>{item.li36}</li>
                  <li>{item.li37}</li>
                </ul>

                <img
                  style={{
                    width: 350,
                    height: 350,
                  }}
                  src={item.img5}
                />
                <br />
                <h5>{item.subtitle22}</h5>
                <p>{item.subtitle23}</p>
                <ol className="foster-li">
                  <li>{item.li38}</li>
                  <li>{item.li39}</li>
                  <li>{item.li40}</li>
                  <li>{item.li41}</li>
                  <li>{item.li42}</li>
                </ol>
                <img
                  style={{
                    width: 350,
                    height: 350,
                  }}
                  src={item.img6}
                />
                <br />
                <h5>{item.subtitle24}</h5>
                <ul className="foster-li">
                  <li>{item.li43}</li>
                  <li>{item.li44}</li>
                  <li>{item.li45}</li>
                  <li>{item.li46}</li>
                  <li>{item.li47}</li>
                  <li>{item.li48}</li>
                  <li>{item.li49}</li>
                  <li>{item.li50}</li>
                  <li>{item.li51}</li>
                  <li>{item.li52}</li>
                </ul>
                <p>{item.subtitle25}</p>
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

export default DogCard2;
