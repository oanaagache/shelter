import React, { useState } from "react";
import Modal from "react-modal";
import { DogData as item } from "./DogData";
import Table from "react-bootstrap/Table";

function DogCard4() {
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
              src={item.img4}
            />
          </div>
        </div>
      </div>

      <div className="card-inner">
        <div className="card-details">
          <h3>{item.title4}</h3>
          <h6>{item.subtitle49}</h6>

          <button onClick={() => setModalOpen(true)}>Read more</button>
          <Modal isOpen={modalOpen}>
            <h3>{item.title4}</h3>
            <p>{item.subtitle50}</p>
            <h3>{item.subtitle51}</h3>
            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  <td>{item.td1}</td>
                  <td>{item.td2}</td>
                </tr>
                <tr>
                  <td>{item.td3}</td>
                  <td>{item.td4}</td>
                </tr>

                <tr>
                  <td>{item.td5}</td>
                  <td>{item.td6}</td>
                </tr>

                <tr>
                  <td>{item.td7}</td>
                  <td>{item.td8}</td>
                </tr>

                <tr>
                  <td>{item.td9}</td>
                  <td>{item.td10}</td>
                </tr>

                <tr>
                  <td>{item.td11}</td>
                  <td>{item.td12}</td>
                </tr>

                <tr>
                  <td>{item.td13}</td>
                  <td>{item.td14}</td>
                </tr>

                <tr>
                  <td>{item.td15}</td>
                  <td>{item.td16}</td>
                </tr>

                <tr>
                  <td>{item.td17}</td>
                  <td>{item.td18}</td>
                </tr>

                <tr>
                  <td>{item.td19}</td>
                  <td>{item.td20}</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>

            <h5>{item.subtitle52}</h5>
            <ol>
              <li>{item.li64}</li>
              <p>{item.subtitle53}</p>
              <li>{item.li65}</li>
              <ul>
                <li>{item.li66}</li>
                <li>{item.li67}</li>
                <li>{item.li68}</li>
                <li>{item.li69}</li>
              </ul>

              <li>{item.li70}</li>
              <p>{item.subtitle54}</p>
              <li>{item.li71}</li>
              <p>{item.subtitle55}</p>
              <li>{item.li72}</li>
              <p>{item.subtitle56}</p>
              <li>{item.li73}</li>
              <p>{item.subtitle57}</p>
            </ol>
            <h5>{item.subtitle58}</h5>
            <img
              style={{
                width: 200,
                height: 200,
              }}
              src={item.img8}
            />
            <p>{item.subtitle59}</p>
            <p>{item.subtitle61}</p>
            <p>{item.subtitle62}</p>
            <h3></h3>
            <ul>
              <li>{item.li74}</li>
              <p>{item.subtitle63}</p>
              <li>{item.li75}</li>
              <ul>
                <li>{item.li76}</li>
                <ul>
                  <li>{item.li77}</li>
                  <li>{item.li78}</li>
                </ul>
              </ul>
              <li>{item.li79}</li>
              <ul>
                <li>{item.li80}</li>
              </ul>
              <li>{item.li81}</li>
              <ul>
                <li>{item.li82}</li>
              </ul>
              <li>{item.li83}</li>
              <ul>
                <li>{item.li84}</li>
              </ul>
              <li>{item.li85}</li>
              <ul></ul>
              <li>{item.li86}</li>
              <ul></ul>
              <li>{item.li87}</li>
              <ul></ul>
              <li>{item.li88}</li>
              <ul></ul>
              <li>{item.li89}</li>
              <ul>
                <li>{item.li90}</li>
              </ul>
              <li>{item.li91}</li>
              <li>{item.li92}</li>
              <ul>
                <li>{item.li93}</li>
              </ul>
              <li>{item.li94}</li>
              <ul>
                <li>{item.li95}</li>
              </ul>
              <li>{item.li96}</li>
              <ul>
                <li>{item.li97}</li>
              </ul>
              <li>{item.li98}</li>
              <ul>
                <li>{item.li99}</li>
              </ul>
              <ul>
                <li>{item.li100}</li>
              </ul>
              <ul>
                <li>{item.li101}</li>
              </ul>
            </ul>
            <p>©Petfinder.com</p>
            <button onClick={() => setModalOpen(false)}>Close</button>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default DogCard4;
