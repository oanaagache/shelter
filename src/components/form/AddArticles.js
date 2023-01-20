import { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";

export default function AddItems() {
  const [item, setItem] = useState({ title: "", image: "" });
  const [items, setItems] = useState([]);

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

    //setItems([...items, item]);
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

  return (
    <div className="container">
      <pre>{JSON.stringify(item, null, "\t")}</pre>
      <form action="" onSubmit={onSubmitHandler}>
        {/* <label htmlFor="inputFirstName">Add title:</label> */}
        <input
          // type="text"
          // className="form-control"
          // id="inputFirstName"
          // value={item.title || ""}
          type="text"
          className="input-field"
          onChange={(e) => setItem({ ...item, title: e.target.value })}
        />
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setItem({ ...item, image: base64 })}
        />
        <div className="right-align">
          <button className="btn">Submit</button>
        </div>
      </form>

      {items?.map((item) => (
        <div className="card" key={item._id}>
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator"
              style={{ width: "100%", height: 300 }}
              src={item.image}
            />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {item.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
