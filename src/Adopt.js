import React, { useEffect } from "react";

// TODO: take care of regenerating the token when it expires.
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImVmZmIyOGE2YzJhYWVkYjFlY2ExMDlkMzg3ZTU2N2YyYmYxMmM4ZWE1MDhkZTQ5MjYzMjE3NThkYjM2MTk3MWQ1OTk0ZmEwNTAxMjNhOWY3IiwiaWF0IjoxNjUzMjMwMDU0LCJuYmYiOjE2NTMyMzAwNTQsImV4cCI6MTY1MzIzMzY1NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.xqRZcize5IMuYSzlyIP1A_IyYaP5UfEtej7RvArdOIt_Kw169Kmo_0DV0hiw8DoYaCcVXrvy-02WvBVmfqoclEY34OPpPbhr4aKlspmcmu4Ixdkg4Iofz6qOOxVJSDoWxuMQuMY0nCV1L0PMJmzmvC_Q1zy25-f_a4rGph2oNFNYc9mWJ8TwnLSarj1WqokrjnqLHstQ3MtO1m4_nuYu0V-5Cb0An0cB_zoGTjuMem_oVao4bfVCYgRSUsbb9ymk7ZoeNAbcKSpA_CIZHt69jkUqP8aUKc4PRWnvLO3kdva_y-lSlUxQBiswpFALqkVDyGDTUZ3CqUd5BwzzFnqSrQ";

const bearer = "Bearer " + token;

const Adopt = () => {
  useEffect(() => {
    fetch("https://api.petfinder.com/v2/types", {
      headers: {
        Authorization: bearer,
      },
    })
      .then((resp) => {
        console.log(resp);
        console.log("======success=======");
      })
      .catch((err) => {
        console.log("======failure=======");
        console.log(err);
      });
  }, []);
  return <div>App</div>;
};

export default Adopt;
