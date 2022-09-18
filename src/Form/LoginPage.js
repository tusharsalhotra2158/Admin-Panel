import { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../styles/navbar.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { BiLock } from "react-icons/bi";
import Validator from "validator";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import { loginErrors } from "./Formerrors/loginErrors";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPasssword] = useState("");
  const [userErr, setUserErr] = useState({});
  const [pwdErr, setPwdErr] = useState(false);
  const [error, setError] = useState(false);

  let history = useHistory();

  const contactSubmit = (e) => {
    e.preventDefault();
    console.log("auth", username, password);
    const errorRes = loginErrors({ username, password });
    setUserErr(errorRes);
    if (Object.keys(errorRes).length === 0) {
      history.push("/admin");
    }
  };
  return (
    <div>
      <form
        name="contactform"
        className="contactform"
        style={{
          paddingLeft: "50px",
          paddingRight: "50px",
          paddingTop: "55px",
          lineHeight: "4.1rem",
          height: "600px",
          width: "100%",
        }}
      >
        <div>
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
            minWidth: "400px",
          }}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              placeholder=" Username"
              className="User"
              value={username}
              // id="outlined-error-helper-text"
              helperText={
                userErr.username && (
                  <p className="alert" style={{ color: "red" }}>
                    Username cannot be empty{" "}
                  </p>
                )
              }
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              id="input-with-icon-textfield"
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
          <div controlId="formGroupEmail">
            <TextField
              placeholder=" Password"
              value={password}
              type="password"
              id="outlined-error-helper-text input-with-icon-textfield"
              helperText={
                userErr.password && (
                  <p className="alert" style={{ color: "red" }}>
                    Password is Invalid
                  </p>
                )
              }
              onChange={(e) => setPasssword(e.target.value)}
              // id="input-with-icon-textfield"
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
                className="float-left"
                type="Submit"
                onClick={contactSubmit}
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
                LOGIN
              </Button>
            </Col>
            <Col
              className="option"
              style={{
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  marginBottom: "0px",
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
            Dont't have an account ?
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
              SIGNUP
            </a>{" "}
            here.{" "}
          </p>
        </div>
      </form>
    </div>
  );
}
export default LoginPage;
