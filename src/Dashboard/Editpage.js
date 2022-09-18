import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./dashboard.css";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { Select } from "@chakra-ui/react";
import { Button } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    display: "flex",
    justifyContent: "center",
  },
});

function Editpage() {
  const classes = useStyles();

  return (
    <div style={{ zIndex: "1111", paddingLeft:"30px"}}>
      <div
        style={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "26px",
        }}
      >
        <h3 style={{marginBottom:"20px"}}>User Management</h3>
      </div>
      <div
        component={Paper}
        style={{
          justifyContent: "center",
          marginRight: "20px",
          width: "950px",
          boxShadow:
            "-4px -4px 4px rgba(34, 41, 47, 0.04), 4px 4px 4px rgba(34, 41, 47, 0.04)",
            background:"white"
        }}
      >
        <div style={{ display: "flex", padding: "20px" }}>
          <p>
            {" "}
            <img src={process.env.PUBLIC_URL + "/image 14.png"} />
          </p>
          <div
            style={{ diplay: "grid", marginLeft: "20px", marginTop: "10px" }}
          >
             <Typography
              variant="h4"
              gutterBottom
              style={{
                fontfamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "28px",
              }}
            >
              Joseph Clain
            </Typography>
            <p>20k Followers</p>
            <p>10555 Songs</p>
          </div>
        </div>
        <div style={{ backgroundColor: "#F3F2F7", padding: "5px" }}>
          <p
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "18px",
              marginLeft: "20px",
            }}
          >
            Edit
          </p>
        </div>
        <Form style={{ margin: "25px" }}>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: "#6c757d" }}>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  style={{ width: "425px" }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" style={{ marginLeft: "25px" }}>
                <Form.Label style={{ color: "#6c757d" }}>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  style={{ width: "425px" }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: "#6c757d" }}>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  style={{ width: "425px" }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                style={{ width: "425px", marginLeft: "25px" }}
              >
                <Form.Label style={{ color: "#6c757d" }}>Status</Form.Label>
                <Select
                  placeholder="Active"
                  style={{ border: "1px solid #ced4da", color: "#6c757d" }}
                >
                  <option value="option1">Disabled</option>
                </Select>
              </Form.Group>
            </Col>
          </Row>{" "}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "25px",
            }}
          >
            {" "}
            <Button
              type="submit"
              style={{
                backgroundColor: "#E62B26",
                border: "1px solid transparent",
                marginRight: "15px",
              }}
            >
              Save Changes
            </Button>
            <Button
              style={{
                backgroundColor: "#DDDDDD",
                width: "130px",
                color: "black",
                border: "1px solid transparent",
              }}
            >
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Editpage;
