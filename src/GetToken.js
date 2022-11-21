import { useEffect, useState } from "react";

export default function GetToken() {
  // API key = clientID + clientSecret.
  const clientId = "yE34mF5y8uaTkcDpopHWiZnWGoYJX5Ufw59vtFDpOJU78uW5ur";
  const clientSecret = "HMpwZ6VMhZwUWXYpb9nVmliqdElYYT96mezpupJk";
  var client_credentials = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;

  const oauthUrl = "https://api.petfinder.com/v2/oauth2/token";

  const [token, setToken] = useState("");

  useEffect(() => {
    fetch(oauthUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: client_credentials,
    })
      .then((response) => {
        if (response.ok) {
          // console.log("GetToken.js/ Status code: ");
          console.log(response.status);
        } else {
          console.log("GetToken.js/ Status code: ");
          console.log(response.status);
        }
        return response.json();
      })
      .then((data) => {
        var token = data.access_token;
        console.log("GetToken.js/ Token: ");
        console.log(token);
        setToken(token);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log("GetToken.js/ Return token: ");
  console.log(token);
  return { token };
}
