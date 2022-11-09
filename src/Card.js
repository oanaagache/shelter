import React, { useState, useEffect } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import logo2 from "./others/images/image.png";
import { useParams } from "react-router-dom";
import GetToken from "./others/GetToken";
import { BsCheck } from "react-icons/bs";

const Card = (props) => {
  const { id } = useParams();
  const [animalId, setAnimalId] = useState(false);

  let navigate = useNavigate();
  const [item, setItem] = useState({});

  //const accessToken = GetToken();

  const token =
<<<<<<< HEAD
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjQ0ZDAyYTQwZWViNzNjNzUxYWQwNjA3OGU0NzBjY2IxZDEyYmVkZGM5NmVkNmUwYjcyNGU5MTQwNzNjMDU2Y2YzMzBmMGM2NjZkZjZlY2VjIiwiaWF0IjoxNjY3OTk5OTE4LCJuYmYiOjE2Njc5OTk5MTgsImV4cCI6MTY2ODAwMzUxOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.l0quPGyeCigpz11z3IG3yUNpaTBcB3wBSsBeU8x9WLbP0OmjhgxfGPSDcI_LrNxaIS15ZpXJSE1piUuLG8nzneKRTAjjFXYGPtlDbcVsrRqnVnXy_N05FQMhyv62JRWqqQsHfaYc3N9QVoTLl0_mnfKAD-9q10yvpz3KbuA89e9nREm6wuKnMfMQS4l6ySikhRoZ1QnRPIC-ikAOkRQ6FJjALPfAG9SrXXPDTPVgb6o82V84pyV7e9-VSPgwfr2dhxbLH9CM9psSixxx2W3LWXzE2ItEtW0jO4WTp7T7b2wdy8uCAyhVFm_jqvC7g9jQE5PAHo7uDDXxrKZSryrkhg";
=======
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImQzNzE4ZDk2NDQ2OWU1N2M1MmZjZGRjM2JlNjgwNmRmNWJjNjkxN2NlMDYxYmVkZDc4MTc1NzY1MzRhOTAwZGEzMjJjN2JjZjRmZmQyMWU5IiwiaWF0IjoxNjY3ODMwNjQzLCJuYmYiOjE2Njc4MzA2NDMsImV4cCI6MTY2NzgzNDI0Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.arpm2TCpXGzGJWk9MIM5we17yIHiFBHGDr4_-D4IkZq9Ntz6KhsnwgEdUwI9zcxJuMkKhXZDJTDrs0WKKXnLozb4a10wPijzfk0aMTSNlzhEO6kdp6iGhIgLHC7NFj2Qgfd_I1mz0E_k9Dg93i8WY0P9XyrKoHKTn_zkZU357DqoeEI2AFEzArHuSl0iD8QoLIi__n-JWkpL0RIOL4K7Ly5fFmJJUpUQfZkdY3Orue0mWOWv_LrIMOMQTQ0KorFTkgSJGQULX-JRBzie2x-IW87cJllBOWTLqRAXfw3zAJRTzLhEkuxLCWXfVmoFezw96HATqh-8CmsN2_Tfg8lLDQ";
>>>>>>> 910c91ff65b361d4d451bfa8d854a1adf0b66821
  //const bearer = "Bearer " + accessToken.token;
  const bearer = "Bearer " + token;

  const url = "https://api.petfinder.com/v2/animals";

  var animalUrl = url + "/" + id;

  useEffect(() => {
    if (id != null) {
      const fetchCardData = async () => {
        const response = await fetch(animalUrl, {
          headers: {
            Authorization: bearer,
          },
        });
        const data = await response.json();

        var animal = {
          img: data.animal.photos[0],
          name: data.animal.name,
          breed: data.animal.breeds["primary"],
          gender: data.animal.gender,
          size: data.animal.size,
          age: data.animal.age,
          colors: data.animal.colors,
          id: data.animal.id,
          environment: data.animal.environment,
<<<<<<< HEAD
          description: data.animal.description,
          attributes: data.animal.attributes,
        };
        // console.log("animal in Card:");
        //console.log(animal.environment);
        //console.log(animal.description);
        // console.log("animal attributes");
        console.log(animal.attributes);
=======
        };
        //console.log("animal in Card:");
        //console.log(animal.environment);
>>>>>>> 910c91ff65b361d4d451bfa8d854a1adf0b66821

        setAnimalId(true);
        setItem(animal);
      };

      fetchCardData();
    } else {
      setAnimalId(true);
<<<<<<< HEAD
      // console.log("props animal in Card:");
      // console.log(props.item.environment);
=======
      //console.log(props.item.environment);
>>>>>>> 910c91ff65b361d4d451bfa8d854a1adf0b66821
      setItem(props.item);
    }
  }, []);

  return (
    <>
      {animalId && (
        <div className="card-container">
          <div className="card-content">
            <img
              style={{
                width: 300,
                height: 300,
                margin: "25px",
              }}
              onClick={() => navigate(`/card/${item.id}`)}
              src={item.img ? item.img["full"] : logo2}
            />

            <div className="card-inner">
              <div className="card-details">
                <h1>{item.name}</h1>
              </div>

              <div className="card-details">
                <h5> Breed:{item.breed} </h5>
              </div>

              <div className="card-details">
                <h5> Gender: {item.gender}</h5>
              </div>

              <div className="card-details">
                <h5> Size:{item.size} </h5>
              </div>

              <div className="card-details">
                <h5>Age:{item.age}</h5>
              </div>

              <div className="card-details">
                <h5>Good with:</h5>
<<<<<<< HEAD
                Children:
                {item.environment.children == true
                  ? "yes"
                  : item.environment.children == false
                  ? "no"
                  : "unknown"}
                ; Dogs:{" "}
                {item.environment.dogs == true
                  ? "yes"
                  : item.environment.dogs == false
                  ? "no"
                  : "unknown"}
                ; Cats:{" "}
                {item.environment.cats == true
                  ? "yes"
                  : item.environment.cats == false
                  ? "no"
                  : "unknown"}
              </div>

              <div className="card-details">
                <h5>
                  Color:{" "}
                  {item.colors.primary && item.colors.primary
                    ? item.colors.primary
                    : "Not found"}
                </h5>
              </div>
              <div className="card-details">
                <h5>Attributes:</h5>
                Spayed Neutered:{" "}
                {item.attributes.spayed_neutered == true
                  ? "yes"
                  : item.attributes.spayed_neutered == false
                  ? "no"
                  : "unknown"}
                ; House Trained:{" "}
                {item.attributes.house_trained == true
                  ? "yes"
                  : item.attributes.house_trained == false
                  ? "no"
                  : "unknown"}
                ; Declawed:{" "}
                {item.attributes.declawed == true
                  ? "yes"
                  : item.attributes.declawed == false
                  ? "no"
                  : "unknown"}
                ; Special Needs:{" "}
                {item.attributes.special_needs == true
                  ? "yes"
                  : item.attributes.special_needs == false
                  ? "no"
                  : "unknown"}
                ; Shots Current:{" "}
                {item.attributes.shots_current == true
                  ? "yes"
                  : item.attributes.shots_current == false
                  ? "no"
                  : "unknown"}
              </div>
              <div className="card-details">
                <h5>Description:</h5>
                <h6>
                  {item.description && item.description
                    ? item.description
                    : "Not found"}
=======

                <h6>
                  Children:
                  {item.environment.children == true
                    ? "yes"
                    : item.environment.children == false
                    ? "no"
                    : "unknown"}
                </h6>
                <h6>
                  Dogs:{" "}
                  {item.environment.dogs == true
                    ? "yes"
                    : item.environment.dogs == false
                    ? "no"
                    : "unknown"}
                </h6>
                <h6>
                  Cats:{" "}
                  {item.environment.cats == true
                    ? "yes"
                    : item.environment.cats == false
                    ? "no"
                    : "unknown"}
                </h6>
              </div>

              {/* <div className="card-details">
                <h4>
                  Color:
                  {item.colors.primary ? item.colors.primary : "No color found"}
                </h4>
              </div> */}

              <div className="card-details">
                <h5>Color:</h5>
                <h6>
                  {item.colors.primary && item.colors.primary
                    ? item.colors.primary
                    : "No color found"}
>>>>>>> 910c91ff65b361d4d451bfa8d854a1adf0b66821
                </h6>
              </div>
            </div>
          </div>
          {id && (
            <div className="button-adopt">
              <button
                className="adopt"
                onClick={() => {
                  navigate(`/adoptionform/${item.name}`);
                }}
              >
                Adopt
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Card;

{
  /* <div className="card-details">
                <h5>Attributes:</h5>
                <h6>
                  Spayed Neutered:{" "}
                  {item.attributes.spayed_neutered == true
                    ? "yes"
                    : item.attributes.spayed_neutered == false
                    ? "no"
                    : "unknown"}
                </h6>
                <h6>
                  House Trained:{" "}
                  {item.attributes.house_trained == true
                    ? "yes"
                    : item.attributes.house_trained == false
                    ? "no"
                    : "unknown"}
                </h6>
                <h6>
                  Declawed:{" "}
                  {item.attributes.declawed == true
                    ? "yes"
                    : item.attributes.declawed == false
                    ? "no"
                    : "unknown"}
                </h6>
                <h6>
                  Special Needs:{" "}
                  {item.attributes.special_needs == true
                    ? "yes"
                    : item.attributes.special_needs == false
                    ? "no"
                    : "unknown"}
                </h6>
                <h6>
                  Shots Current:{" "}
                  {item.attributes.shots_current == true
                    ? "yes"
                    : item.attributes.shots_current == false
                    ? "no"
                    : "unknown"}
                </h6>
              </div> */
}
