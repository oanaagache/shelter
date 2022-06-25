import { useEffect, useState } from "react";

const GetToken = () => {
  //console.log("Getting the auth token...");

  // API key = clientID + clientSecret.
  const clientId = "yE34mF5y8uaTkcDpopHWiZnWGoYJX5Ufw59vtFDpOJU78uW5ur";
  const clientSecret = "HMpwZ6VMhZwUWXYpb9nVmliqdElYYT96mezpupJk";
  var client_credentials = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;
  //console.log("client_credentials: " + client_credentials);

  const oauthUrl = "https://api.petfinder.com/v2/oauth2/token";

  const [token, setToken] = useState("");

  useEffect(() => {
    //console.log(token);
    fetch(oauthUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: client_credentials,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Response ok! Status code: " + response.status);
        } else {
          console.log("Failure! Status code: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        //console.log("Success:", data);
        var token = data.access_token;
        //console.log("Token: " + token);
        setToken(token);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  //console.log("GetToken.js: token: " + token);
  return token;
};

export default GetToken;
