import { useState } from "react";
import SignUp from "./SignUp";
import Image from "./Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Validator from "validator";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    background: "black",
  },
});

function ResultSignUp() {
  const [state, setState] = useState("start");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [usernameEr, setUsernameEr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [mobileErrr, setMobileErrr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [Error, setError] = useState(false);
  const classes = useStyles();

  let history = useHistory();

  function triggerAddTripState() {
    let formIsValid = true;
    if (username === "") {
      setUsernameEr(true);
    } else {
      setUsernameEr(false);
    }
    if (!Validator.isEmail(email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (!Validator.isMobilePhone(mobile) || !Validator.isNumeric(mobile)) {
      setMobileErrr(true);
    } else {
      setMobileErrr(false);
    }
    if (!Validator.isStrongPassword(password)) {
      setPwdError(true);
    } else if (Validator.isStrongPassword(password)) {
      setPwdError(false);
      return true;
    }
    
  }

  function contactSubmit(e) {
    let sen = e.preventDefault();
    if (triggerAddTripState()) {
      alert("Form Submitted");
      history.push("/loginpage");
    } else {
      return sen;
    }
  }

  return (
    <main className={classes.root}>
      <Container
        style={{
          display: "flex",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          style={{
            display: "flex",
            borderRadius: "20px",
            maxWidth: "100%",
            height: "600px",
          }}
        >
          <div
            style={{
              textAlign: "left",
              background: "white",
              borderRadius: "30px 0px 0px 30px",
            }}
          >
            {" "}
            {state === "start" && (
              <SignUp
                setUsername={setUsername}
                setEmail={setEmail}
                setMobile={setMobile}
                setPassword={setPassword}
                mobileErrr={mobileErrr}
                emailErr={emailErr}
                pwdError={pwdError}
                usernameEr={usernameEr}
                contactSubmit={contactSubmit}
                addTrip={triggerAddTripState}
              />
            )}
          </div>{" "}
          <div style={{}}>
            <Image />{" "}
          </div>
        </Box>
      </Container>
    </main>
  );
}
export default ResultSignUp;
