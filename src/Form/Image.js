import React from "react";
import "../styles/navbar.css";

// import logo22 from './logo22.png';

function Image() {
  return (
    <div style={{ position: "relative", textALign: "right", overflow:"hidden" }}>
      <div style={{ position: "absolute" }}>
        <img
          src={process.env.PUBLIC_URL + "/logo22.png"}
          style={{ width: "610px", height: "600px" }}
        />
      </div>
      <div className="images">
        <div style={{ position: "absolute", display: "flex" }}>
          {" "}
          <img
            src={process.env.PUBLIC_URL + "/Mount.png"}
            style={{ width: "auto", height: "max-content", marginTop: "20px" }}
          />
          <img src={process.env.PUBLIC_URL + "/guitar.png"} />
        </div>
        <br />

        <div style={{ marginLeft: "133px", textAlign: "left" }}>
          {" "}
          <img src={process.env.PUBLIC_URL + "/Himkhand.png"} /> <br />
          <img src={process.env.PUBLIC_URL + "/Text.png"} />
        </div>
      </div>
      <div>
        {" "}
        <div className="guitar"></div>{" "}
      </div>
    </div>
  );
}

export default Image;
