import React from "react";
import logo3 from "../../images/image3.png";
import "../main/Main.css";

const Main = () => {
  return (
    <div className="main">
      <div
        className="main-image "
        style={{
          background: `url(${logo3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "500px",
        }}
      ></div>

      <div className="main-text">
        <h3 className="main-title">
          {" "}
          We aim to find best companions for homeless pets in need
        </h3>
      </div>
    </div>
  );
};
export default Main;

// export default Main;
// const Main = () => {
//   return (
//     <div className="main">
//       <div className="main-image ">
//         <img
//           src={logo3}
//           alt="Not found"
//           // style={
//           //   ({ height: "100%" }, { maxWidth: "100%" }, { objectFit: "cover" })
//           // }
//         />
//       </div>

//       <div className="main-text">
//         <h3 className="main-title">
//           {" "}
//           We aim to find best companions for homeless pets in need
//         </h3>
//       </div>
//     </div>
//   );
// };

// export default Main;
