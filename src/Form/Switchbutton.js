import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResultSignUp from "./ResultSignUp";
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(
  createStyles({
    body: {
      background: "black",
      
    },
  })
);

function Switchbutton() {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div style={{}}>
        <ResultSignUp />
      </div>
    </div>
  );
}
export default Switchbutton;
