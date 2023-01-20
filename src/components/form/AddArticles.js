import { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import { useNavigate } from "react-router-dom";

export default function AddItems() {
  const [item, setItem] = useState({ title1: "", title2: "", image: "" });
  const [items, setItems] = useState([]);

  let navigate = useNavigate();

  const [refresh, setRefresh] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/articles/add", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).catch((error) => {
      window.alert(error);
      return;
    });
  };

  //  fetches the articles from the database.
  useEffect(() => {
    async function getItems() {
      const response = await fetch(`http://localhost:3001/articles/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const items = await response.json();
      setItems(items);
      console.log(items);
    }
    getItems();
    return;
  }, [items.length]);

  const Refresh = () => {
    setRefresh((refresh) => !refresh);
  };

  return (
    <div className="container">
      <pre>{JSON.stringify(item, null, "\t")}</pre>
      <form action="" onSubmit={onSubmitHandler}>
        <label htmlFor="inputFirstName">Add title1:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title1 || ""}
          // type="text"
          // className="input-field"
          onChange={(e) => setItem({ ...item, title1: e.target.value })}
        />

        <label htmlFor="inputFirstName">Add title2:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title2 || ""}
          // type="text"
          // className="input-field"
          onChange={(e) => setItem({ ...item, title2: e.target.value })}
        />

        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setItem({ ...item, image: base64 })}
        />
        <div className="right-align">
          <h6>Please submit only after the photo is uploaded</h6>
          <button className="btn" onClick={Refresh}>
            Submit
          </button>
        </div>
      </form>

      {items?.map((item) => (
        <div className="card" key={item._id}>
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator"
              style={{ width: "30%", height: "30%" }}
              src={item.image}
            />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {item.title1}
            </span>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {item.title2}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
