import React, { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../styles/navbar.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { BiLock } from "react-icons/bi";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

function SignUp(props) {
  const useStyles = makeStyles({
    root: {
      width: "650px",
      height: "600px",
    },
  });
  const classes = useStyles();
  return (
    <div >
      <form
        className={`${classes.root} contactform`}
        noValidate
        autoComplete="off"
        name="contactform"
        // className="contactform"
        onSubmit={props.contactSubmit}
        style={{
          paddingLeft: "50px",
          paddingRight: "50px",
          paddingTop: "55px",
          lineHeight: "3.1rem",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h1
            style={{
              height: "32px",
              color: "#000000",
              fontSize: "30px",
              fontWeight: "500",
              fontStyle: "normal",
            }}
          >
            {" "}
            Hello! let's get started{" "}
          </h1>
          <p
            style={{
              color: "#ADADAD",
              fontWeight: "500",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "18px",
              fontStyle: "normal",
            }}
          >
            {" "}
            Enter your details below{" "}
          </p>
        </div>
        <Box
          style={{
            display: "grid",
            lineHeight: "4.1rem",
            width: "400px",
          }}
          noValidate
          autoComplete="off"
        >
          <div className="user">
            <TextField
              // id="outlined-error-helper-text"
              helperText={
                props.usernameEr && (
                  <p className="alert" style={{ color: "red" }}>
                    Username cannot be empty{" "}
                  </p>
                )
              }
              placeholder=" Username"
              value={props.username}
              className="User"
              id="input-with-icon-textfield"
              onChange={(e) => props.setUsername(e.target.value)}
              style={{
                fontFamily: "'Poppins', sans-serif",
                width: "100%",
                fontWeight: "500",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style={{ color: "#ADADAD" }}>
                    <FaRegUser />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <TextField
              placeholder=" Email"
              id="outlined-error-helper-text"
              helperText={
                props.emailErr && (
                  <p className="alert" style={{ color: "red" }}>
                    Your email is invalid{" "}
                  </p>
                )
              }
              type="text"
              style={{
                width: "100%",
                fontFamily: "'Poppins', sans-serif",
                fontStyle: "normal",
                fontSize: "18px",
                fontWeight: "500",
                color: "#ADADAD",
              }}
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    style={{
                      color: "#ADADAD",
                      marginLeft: "-3px",
                      fontSize: "18px",
                    }}
                  >
                    <AiOutlineMail />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <Form.Group controlId="formGroupEmail">
              <TextField
                placeholder="Mobile Number"
                id="outlined-error-helper-text"
                helperText={
                  props.mobileErrr && (
                    <p className="alert" style={{ color: "red" }}>
                      Mobile number is not Valid
                    </p>
                  )
                }
                value={props.mobile}
                onChange={(e) => props.setMobile(e.target.value)}
                style={{
                  width: "100%",
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: "normal",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#ADADAD",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      style={{
                        color: "#ADADAD",
                        marginLeft: "-3px",
                        fontSize: "18px",
                      }}
                    >
                      <IoCallOutline />
                    </InputAdornment>
                  ),
                }}
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group controlId="formGroupEmail">
              <TextField
                placeholder=" Password"
                value={props.password}
                id="outlined-error-helper-text"
                helperText={
                  props.pwdError && (
                    <p className="alert" style={{ color: "red" }}>
                      Your password is invalid
                    </p>
                  )
                }
                type="password"
                onChange={(e) => props.setPassword(e.target.value)}
                style={{
                  width: "100%",
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: "normal",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#ADADAD",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      style={{
                        color: "#ADADAD",
                        marginLeft: "-3px",
                        fontSize: "18px",
                      }}
                    >
                      <BiLock />
                    </InputAdornment>
                  ),
                }}
              />
            </Form.Group>
          </div>
        </Box>
        <div style={{ textAlign: "right" }}>
          <a
            href=""
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "18px",
              color: "#ADADAD",
            }}
          >
            {" "}
            Forgot password?{" "}
          </a>
        </div>
        <div style={{ width: "100%" }}>
          {" "}
          <Row>
            <Col
              style={{
                paddingLeft: "15px",
                textAlign: "left",
                display: "flex",
              }}
            >
              <Button
                className=" btn btn-success btn-lg float-left"
                type="Submit"
                onClick={props.addTrip}
                style={{
                  backgroundColor: "#E62B26",
                  width: "150px",
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "18px",
                  color: "#FFFFFF",
                  boxShadow: " 0px 0px 5px gray",
                  border: "none",
                }}
              >
                {" "}
                SIGN UP
              </Button>
            </Col>
            <Col
              className="option"
              style={{
                textAlign: "center",
                paddingTop: "12px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "#ADADAD",
                }}
              >
                {" "}
                OR
              </p>
            </Col>
            <Col
              style={{
                fontSize: "30px",
                color: "blue",
                textAlign: "right",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              {" "}
              <FaFacebook /> <FcGoogle />{" "}
            </Col>
          </Row>
        </div>

        <div>
          {" "}
          <p
            style={{
              fontFamily: "'Poppins', sans-serif'",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "18px",
              color: "#ADADAD",
              display: "flex",
            }}
          >
            {" "}
            Dont't have an account ?{" "}
            <Link to="/loginpage">
              <a
                href="/"
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  color: "#ADADAD",
                  fontFamily: "'Poppins', sans-serif'",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                SIGNIN
              </a>{" "}
            </Link>
            here.{" "}
          </p>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
