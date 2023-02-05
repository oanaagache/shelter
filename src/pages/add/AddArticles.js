import { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";

const AddArticles = () => {
  const [item, setItem] = useState({
    title1: "",
    title2: "",
    image1: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    title7: "",
    title8: "",
    title9: "",
    title10: "",
    title11: "",
    title12: "",
    title13: "",
    title14: "",
    title15: "",
    title16: "",
    title17: "",
    title18: "",
    title19: "",
    title20: "",
    title21: "",
    title22: "",
    title23: "",
    title24: "",
    title25: "",
    title26: "",
    title27: "",
    title28: "",
    title29: "",
    title30: "",
    title31: "",
    title32: "",
    title33: "",
    title34: "",
    title35: "",
    title36: "",
    title37: "",
    title38: "",
  });

  const [items, setItems] = useState([]);

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
          onChange={(e) => setItem({ ...item, title1: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title2:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title2 || ""}
          onChange={(e) => setItem({ ...item, title2: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title3:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title3 || ""}
          onChange={(e) => setItem({ ...item, title3: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title4:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title4 || ""}
          onChange={(e) => setItem({ ...item, title4: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title5:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title5 || ""}
          onChange={(e) => setItem({ ...item, title6: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title7:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title7 || ""}
          onChange={(e) => setItem({ ...item, title7: e.target.value })}
        />{" "}
        <label htmlFor="inputFirstName">Add title8:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title8 || ""}
          onChange={(e) => setItem({ ...item, title8: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title9:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title9 || ""}
          onChange={(e) => setItem({ ...item, title9: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title10:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title10 || ""}
          onChange={(e) => setItem({ ...item, title10: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title11:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title11 || ""}
          onChange={(e) => setItem({ ...item, title11: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title12:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title12 || ""}
          onChange={(e) => setItem({ ...item, title12: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title13:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title13 || ""}
          onChange={(e) => setItem({ ...item, title13: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title14:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title14 || ""}
          onChange={(e) => setItem({ ...item, title14: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title15:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title15 || ""}
          onChange={(e) => setItem({ ...item, title15: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title16:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title16 || ""}
          onChange={(e) => setItem({ ...item, title16: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title17:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title17 || ""}
          onChange={(e) => setItem({ ...item, title2: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title18:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title18 || ""}
          onChange={(e) => setItem({ ...item, title19: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title20:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title20 || ""}
          onChange={(e) => setItem({ ...item, title20: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title21:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title21 || ""}
          onChange={(e) => setItem({ ...item, title21: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title22:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title22 || ""}
          onChange={(e) => setItem({ ...item, title22: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title23:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title23 || ""}
          onChange={(e) => setItem({ ...item, title23: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title24:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title24 || ""}
          onChange={(e) => setItem({ ...item, title24: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title25:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title25 || ""}
          onChange={(e) => setItem({ ...item, title25: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title26:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title26 || ""}
          onChange={(e) => setItem({ ...item, title27: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title28:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title28 || ""}
          onChange={(e) => setItem({ ...item, title28: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title29:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title29 || ""}
          onChange={(e) => setItem({ ...item, title29: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title30:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title30 || ""}
          onChange={(e) => setItem({ ...item, title30: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title31:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title31 || ""}
          onChange={(e) => setItem({ ...item, title31: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title32:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title32 || ""}
          onChange={(e) => setItem({ ...item, title32: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title33:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title33 || ""}
          onChange={(e) => setItem({ ...item, title33: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title34:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title34 || ""}
          onChange={(e) => setItem({ ...item, title34: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title35:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title35 || ""}
          onChange={(e) => setItem({ ...item, title35: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title36:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title36 || ""}
          onChange={(e) => setItem({ ...item, title36: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title37:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title37 || ""}
          onChange={(e) => setItem({ ...item, title37: e.target.value })}
        />
        <label htmlFor="inputFirstName">Add title38:</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={item.title38 || ""}
          onChange={(e) => setItem({ ...item, title38: e.target.value })}
        />
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setItem({ ...item, image: base64 })}
        />
        <div>
          <h6 style={{ marginTop: "20px" }}>
            Please submit only after the photo is uploaded
          </h6>
          <button
            className="card-adopt"
            style={{ marginTop: "20px" }}
            onClick={Refresh}
          >
            Submit
          </button>
        </div>
      </form>

      {items?.map((item) => (
        <div
          className="card"
          key={item._id}
          style={({ marginTop: "20px" }, { marginBottom: "40px" })}
        >
          <div
            className="card-image waves-effect waves-block waves-light"
            style={{ margin: "10px" }}
          >
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
};
export default AddArticles;
