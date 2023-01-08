import React, { useState } from "react";
import Modal from "react-modal";
import { DogData as item } from "./DogData";

function DogCard3() {
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
            src={item.img3}
            alt="Not found"
          />

          <div className="card-inner">
            <div className="card-details">
              <h3>{item.title3}</h3>
              <h6>{item.subtitle25}</h6>

              <button onClick={() => setModalOpen(true)}>Read more</button>
              <Modal isOpen={modalOpen}>
                <h3>{item.title3}</h3>

                <img
                  style={{
                    width: 700,
                    height: 300,
                  }}
                  src={item.img7}
                />
                <br />
                <p>{item.subtitle26}</p>
                <p>{item.subtitle27}</p>
                <p>{item.subtitle28}</p>
                <h5>{item.subtitle29}</h5>
                <ul>
                  <li>{item.li53}</li>
                  <li>{item.li54}</li>
                  <li>{item.li55}</li>
                  <li>{item.li56}</li>
                  <li>{item.li57}</li>
                </ul>
                <p>{item.subtitle31}</p>
                <p>{item.subtitle32}</p>
                <p>{item.subtitle33}</p>
                <p>{item.subtitle34}</p>
                <h5>{item.subtitle35}</h5>
                <p>{item.subtitle36}</p>
                <p>{item.subtitle37}</p>
                <p>{item.subtitle38}</p>
                <p>{item.subtitle39}</p>
                <p>{item.subtitle40}</p>
                <h5>{item.subtitle41}</h5>
                <p>{item.subtitle42}</p>
                <p>{item.subtitle43}</p>
                <ul>
                  <li>{item.li58}</li>
                  <li>{item.li59}</li>
                  <li>{item.li60}</li>
                  <li>{item.li61}</li>
                  <li>{item.li62}</li>
                  <li>{item.li63}</li>
                </ul>
                <h5>{item.subtitle44}</h5>
                <p>{item.subtitle45}</p>
                <p>{item.subtitle46}</p>
                <p>{item.subtitle47}</p>
                <p>{item.subtitle48}</p>
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

export default DogCard3;
