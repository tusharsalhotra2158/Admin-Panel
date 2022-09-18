import React from "react";
import DashBoard from "../Dashboard/DashBoard";
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(
  createStyles({
    root: {
      background: "#E5E5E5",
      width: "100%",
      height: "100vh",
    },
  })
);
export default function Background() {
  console.log("hello")
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ background:"#E5E5E5"}}>
        <DashBoard />
      </div>
    </div>
  );
}
