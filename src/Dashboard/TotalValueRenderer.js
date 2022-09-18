import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./dashboard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function (props) {
  const classes = useStyles();
  const buttonClicked = () => {
    alert("Button Clicked");
  };

  return (
    <span style={{borderColor:"transparent"}}>
      <Button
       
        variant="contained"
        style={{ backgroundColor: "red", color: "#ffffff" }}
        onClick={() => buttonClicked()}
      >
        Active
      </Button>
    </span>
  );
}
