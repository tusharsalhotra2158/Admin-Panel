import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React, { Component } from "react";
import "../styles/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Seats extends Component {
  render() {
    const options = [
      { name: "Swedish", value: "sv" },
      { name: "English", value: "en" },
      {
        type: "group",
        name: "Group name",
        items: [{ name: "Spanish", value: "es" }],
      },
    ];
    return (
      <div>
        <div className="title">
          <h1 style={{ color: "white" }}> BOOK YOUR TICKETS HERE </h1>
        </div>

        <div className="Container">
          <Form.Group className="d-flex ">
            <label
              style={{
                color: "white",
                whiteSpace: "nowrap",
                marginRight: "8px",
              }}
            >
              {" "}
              Pick a Movie:{" "}
            </label>
            <Form.Control size="sm" as="select">
              <option> Joker ($10)</option>
              <option> Spider-Man ($14)</option>
              <option> Venom ($30)</option>
            </Form.Control>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <div className="d-flex" style={{ marginBottom: "20px" }}>
              <div>
                {" "}
                <p
                  style={{
                    color: "white",
                    whiteSpace: "nowrap",
                    marginTop: "20px",
                    marginRight: "8px",
                  }}
                >
                  {" "}
                  N/A{" "}
                </p>{" "}
              </div>
              <div className="seats3" >
                {" "}
              </div>
              <div>
                <p
                  style={{
                    color: "white",
                    whiteSpace: "nowrap",
                    marginTop: "20px",
                    marginRight: "8px",
                  }}
                >
                  {" "}
                  Selected{" "}
                </p>{" "}
              </div>
              <div className="seats1" disabled={true}>
                {" "}
              </div>
              <div>
                <p
                  style={{
                    color: "white",
                    whiteSpace: "nowrap",
                    marginTop: "20px",
                    marginRight: "8px",
                  }}
                >
                  {" "}
                  Occupied{" "}
                </p>{" "}
              </div>
              <div className="seats2" disabled={true}>
                {" "}
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ marginBottom: "15px" }}
          >
            <div className="Screen"></div>
          </div>
          <div className="Container-Box">
            <div className="d-flex justify-content-center">
              <div className="d-flex1">
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
              </div>
              <div className="d-flex">
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
              </div>
              <div className="d-flex2">
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="d-flex1">
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
              </div>
              <div className="d-flex">
                <Button className="seats"> </Button>
                <Button className="seats4"> </Button>
                <Button className="seats4"> </Button>
                <Button className="seats"> </Button>
              </div>
              <div className="d-flex2">
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="d-flex1">
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
              </div>
              <div className="d-flex">
                <Button className="seats4"> </Button>
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
              </div>
              <div className="d-flex2">
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="d-flex1">
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
              </div>
              <div className="d-flex">
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
              </div>
              <div className="d-flex2">
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="d-flex1">
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
              </div>
              <div className="d-flex">
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
              </div>
              <div className="d-flex2">
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="d-flex1">
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
              </div>
              <div className="d-flex">
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
              </div>
              <div className="d-flex2">
                <Button className="seats"> </Button>
                <Button className="seats"> </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
