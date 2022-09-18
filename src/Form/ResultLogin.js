import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "./Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginPage from "./LoginPage";
import Container from "react-bootstrap/Container";
import Box from "@material-ui/core/Box";

function ResultLogin() {
  return (
    <Container
      style={{
        height: "100vh",
        maxWidth:"100%",
        display: "flex",
        background: "black",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "600px",
          borderRadius: "20px",
        }}
      >
        <div>
          <div
            className="Page"
            style={{
              textAlign: "left",
              background: "white",
              borderRadius: "30px 0px 0px 30px",
            }}
          >
            <LoginPage />
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          {" "}
          <div className="Logo" style={{ textAlign: "right" }}>
            {" "}
            <Image />{" "}
          </div>
        </div>
      </Box>
    </Container>
  );
}
export default ResultLogin;
