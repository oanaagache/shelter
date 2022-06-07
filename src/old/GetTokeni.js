import React, { useEffect, useState } from "react";

const GetTokeni = () => {
  console.log("Getting the auth token...");

  // API key = clientID + clientSecret.
  const clientId = "yE34mF5y8uaTkcDpopHWiZnWGoYJX5Ufw59vtFDpOJU78uW5ur";
  const clientSecret = "HMpwZ6VMhZwUWXYpb9nVmliqdElYYT96mezpupJk";
  var client_credentials = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;
  console.log("client_credentials: " + client_credentials);

  const oauthUrl = "https://api.petfinder.com/v2/oauth2/token";

  const [token, setToken] = useState();
  function fetchToken() {
    fetch(url, {
      headers: {
        Authorization: bearer,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // build a new array that will contain all the names from JSON.
        var typesArray = [];
        var length = data.types.length;
        for (var i = 0; i < length; i++) {
          //console.log(data.types[i].name);
          typesArray.push(data.types[i].name);
        }
        //console.log("typesArray:" + typesArray);
        setTypes(typesArray);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setToken(token);
  }

  useEffect(() => {
    fetchToken();
  }, []);

  console.log("GetToken.js: token: " + token);
  return token;
};

export default GetTokeni;
