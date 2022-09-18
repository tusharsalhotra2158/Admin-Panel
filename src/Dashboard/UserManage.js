import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import "./dashboard.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch, { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch";
import { FiEdit } from "react-icons/fi";
import { Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  tabletoggle: {
    maxWidth: "760px",
    display: "flex",
    justifyContent: "center",
    right: "10px",
    paddingTop: "20px",
  },
});

export default function UserManage(props) {
  const classes = useStyles();

  return (
    <div style={{ zIndex: "1111", paddingLeft: "30px" }}>
      <div
        style={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "26px",
        }}
      >
        <h3 style={{ marginBottom: "20px" }}> User Management</h3>
      </div>

      <div
        component={Paper}
        style={{
          justifyContent: "center",
          marginRight: "20px",
          width: "950px",
          boxShadow:
            "-4px -4px 4px rgba(34, 41, 47, 0.04), 4px 4px 4px rgba(34, 41, 47, 0.04)",
          background: "white",
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
        <div
          style={{
            backgroundColor: "#F3F2F7",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "18px",
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft: "20px",
            }}
          >
            General Information
          </p>
          <div style={{ display: "flex", margin: "20px" }}>
            <Link onClick={props.onHandleEdit} style={{ margin: "4px" }}>
              {" "}
              <FiEdit />
            </Link>
            <p>Edit</p>
          </div>
        </div>
        <Table className={classes.table} size="small" xs={12}>
          <TableBody>
            <TableCell className="userInfo" align="left">
              Username
            </TableCell>
            <TableCell className="userInfo" align="left">
              Status
            </TableCell>
            <TableCell className="userInfo" align="left">
              Registered
            </TableCell>
            <TableCell className="userInfo" align="left">
              Registered Time
            </TableCell>
            <TableCell className="userInfo" align="left">
              Last Active
            </TableCell>
            <TableCell className="userInfo" align="left">
              Email
            </TableCell>
            <TableCell className="userInfo" align="left">
              Mobile Number
            </TableCell>
            <TableCell className="userInfo" align="left">
              Date of Birth
            </TableCell>
            <TableCell className="userInfo" align="left">
              Address
            </TableCell>
          </TableBody>
          <TableBody>
            <TableCell style={{ color: "black" }}>Joseph Clain</TableCell>
            <TableCell style={{ color: "black" }}>June 25, 2021</TableCell>
            <TableCell style={{ color: "black" }}>05:28 pm</TableCell>
            <TableCell style={{ color: "black" }}>
              June 25, 2021, 05:36 pm
            </TableCell>
            <TableCell style={{ color: "black" }}>
              JosephClain@gmail.com
            </TableCell>
            <TableCell style={{ color: "black" }}>9854678956</TableCell>
            <TableCell style={{ color: "black" }}>01-02-1997</TableCell>
            <TableCell style={{ color: "black" }}>
              # 5764 sector-28D Chandigarh
            </TableCell>
          </TableBody>
        </Table>
        <div
          style={{
            backgroundColor: "#F3F2F7",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "18px",
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft: "20px",
            }}
          >
            Personal Preferences
          </p>
          <div style={{ display: "flex", margin: "20px" }}>
            <p button style={{ margin: "4px" }}>
              {" "}
              <FiEdit />
            </p>
            <p>Edit</p>
          </div>
        </div>
        <Table className={classes.tabletoggle} size="small" xs={12}>
          <TableBody>
            <TableCell align="left" className="userInfo">
              Email Notifications
            </TableCell>
            <TableCell align="left" className="userInfo">
              Push Notifications
            </TableCell>
          </TableBody>
          <TableBody>
            <TableCell textAlign="Right">
              <FormControlLabel
                value="top"
                control={<Switch style={{ borderColor: "1px solid red" }} />}
              />
            </TableCell>
            <TableCell textAlign="Right">
              <FormControlLabel
                value="top"
                control={<Switch style={{ borderColor: "1px solid red" }} />}
              />
            </TableCell>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
