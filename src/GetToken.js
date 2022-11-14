import { useEffect, useState } from "react";

export default function GetToken() {
  console.log("GetToken.js/ Getting the auth token:");

  // API key = clientID + clientSecret.
  const clientId = "yE34mF5y8uaTkcDpopHWiZnWGoYJX5Ufw59vtFDpOJU78uW5ur";
  const clientSecret = "HMpwZ6VMhZwUWXYpb9nVmliqdElYYT96mezpupJk";
  var client_credentials = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;
  console.log("GetToken.js/ Getting the client_credentials: ");
  //console.log(client_credentials);

  const oauthUrl = "https://api.petfinder.com/v2/oauth2/token";

  const [token, setToken] = useState("");

  useEffect(() => {
    console.log("GetToken.js/ useEffect one time:");
    fetch(oauthUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: client_credentials,
    })
      .then((response) => {
        if (response.ok) {
          console.log("GetToken.js/ Response ok! Status code: ");
          console.log(response.status);
        } else {
          console.log("GetToken.js/ Failure! Status code: ");
          console.log(response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log("GetToken.js/ Success:");
        console.log(data);
        var token = data.access_token;
        console.log("GetToken.js/ Token: ");
        console.log(token);
        setToken(token);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log("GetToken.js/ return token: ");
  console.log(token);
  return { token };
}
