import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CardColumns } from "reactstrap";
import "./Card.css";
import logo from "./image4.svg";
import logo5 from "./image5.svg";
import { useNavigate } from "react-router-dom";

const Card = () => {
  let navigate = useNavigate();
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjI1YzA3MmM4OGI5YjBjYTBhZjA5NjNmNDk4NWI3Y2YwMWZjYmUzMTUyMGJhOGExNTkwMmUxMjAzNDMzYjQ0MzBhNDIxN2JmNGUwNDY5MjJjIiwiaWF0IjoxNjU0MDA5MzAwLCJuYmYiOjE2NTQwMDkzMDAsImV4cCI6MTY1NDAxMjkwMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.vU-o33Y6uz4UHL3dEjsbpak7mzpvUN4hwo94AU3Hxl4Emg6DoSPfOnjF6UV-FzmMmyrgQXjEXi8UdxPvcgYZ37yH6YAk3brnuNkN1EtrxYlTg7greqLLUCGNwxwX6Ht4K5a2i-WiRpynSgen4HW-oSFJ6NC_XWUakvB9AkdPObHFb4JU0lA6jdEvpwMGZBS9Ve1tJ8HrNr8lccpre3y5WtnkUOusbH3nWsDC5VOElqSftLv6Q8Qm_Y5wYQvQqv-yr4z9wApsf7jblBtk_S18Oz1BYbVmqHk6JqekRJxVQbkyH8m94Qn3NYYmcLlchPhDGNtkjBrwPi3zlji-JBKxUg";
  const url = "https://api.petfinder.com/v2/types";
  const bearer = "Bearer " + token;

  const [card, setCard] = useState([]);
  const { name } = useParams();

  const fetchData = async () => {
    const response = await fetch(url, {
      headers: {
        Authorization: bearer,
      },
    });
    const card = await response.json();
    setCard(card);
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  return (
    <>
      <div className="article">
        <div className="card-inner">
          <img style={({ height: 0.1 }, { padding: 10 })} src={logo} />
          <h2>
            <Link to="/">Back</Link>
          </h2>
        </div>

        <div className="card-body">
          <div className="img">
            <img />
          </div>

          <div className="card-details">
            <h1>Name</h1>

            <h3>
              Age: <span>Age</span>
            </h3>
            <h3>
              Breed: <span>Age</span>
            </h3>
            <h3>
              Color: <span>Age</span>
            </h3>
            <h3>
              Neutered: <span>Age</span>
            </h3>
            <h3>
              Size: <span>Age</span>
            </h3>

            <h2>
              Good with: <span></span>
            </h2>
            <h3>
              Children: <span>Children</span>
            </h3>
            <h3>
              Dogs :<span>Dogs</span>
            </h3>
            <h3>
              Cats :<span>Cats</span>
            </h3>
            <div className="button">
              <button
                className="adopt"
                onClick={() => {
                  navigate("/adoption");
                }}
              >
                Adopt
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
