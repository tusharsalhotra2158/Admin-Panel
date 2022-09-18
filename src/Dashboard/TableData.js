import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { axioInstance } from "../ApiComponent/Api";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import "./tabledata.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Button } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IconButton } from "@chakra-ui/react";

const columns = [
  { id: "avatar", label: "Image", align: "center", minWidth: "140px" },
  { id: "first_name", label: "First Name", minWidth: "150px", align: "left" },
  {
    id: "last_name",
    label: "Last Name",
    minWidth: "140px",
    align: "left",
  },
  {
    id: "email",
    label: "Email",
    minWidth: "255px",
    align: "left",
  },
  {
    id: "Status",
    label: "Status",
    minWidth: "150px",
    align: "left",
  },
  {
    id: "Action",
    label: "Action",
    minWidth: "110px",
    align: "left",
    marginLeft: "30px",
  },
];
const useStyles = makeStyles({
  root: {
    minWidth: "100%",
   

  },
  body: {
    justifyContent: "flex-end",
    width: "100%",
  },
  content: {
    display: "flex",
    alignItems: "right",
    paddingLeft: "30px",
  },
  container: {
    height: "100%",
    boxShadow: "none",
  },
});

export default function TableData() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rowData, setRowData] = React.useState([]);

  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "The Lord of the Rings: The Return of the King", year: 2003 },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    GetAPi();
  });

  const GetAPi = async () => {
    let res = await axios.get("https://reqres.in/api/users?page=2");
    setRowData(res.data.data);
    console.log("res", res.data);
  };

  return (
    <main className={classes.content}>
      <div
        className={classes.root}
        style={{
          display: "grid",
        }}
      >
        <div
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "26px",
            marginBottom: "20px",
          }}
        >
          <h3>User Management</h3>
        </div>
        <div
          style={{
            border: "2px solid #E4E9F2",
            boxSizing: "border-box",
            boxShadow:
              "-4px -4px 4px rgba(34, 41, 47, 0.04), 4px 4px 4px rgba(34, 41, 47, 0.04)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              paddingTop: "10px",
              paddingLeft: "40px",
              paddingBottom: "10px",
              paddingRight: "40px",
              background: "white",
            }}
          >
            <Grid
              item
              sm={6}
              lg={6}
              style={{ display: "flex", alignItems: "center" }}
            >
              <h3
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "26px",
                  textAlign: "left",
                }}
              >
                {" "}
                User
              </h3>
            </Grid>
            <Grid
              item
              sm={6}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div>
                <Autocomplete
                  id="free-solo-demo"
                  freeSolo
                  style={{ width: "300px" }}
                  options={top100Films.map((option) => option.title)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Search"
                      margin="normal"
                      variant="outlined"
                    />
                  )}
                />
              </div>
              <Button
                variant="contained"
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#E62B26",
                  height: "40px",
                  color: "#ffffff",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                Filter
              </Button>
            </Grid>
          </div>
          <Paper>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "18px",
                          backgroundColor: "#F3F2F7",
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
              </Table>

              <TableBody className={classes.root}>
                {rowData &&
                  rowData.length > 0 &&
                  rowData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row,index) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            whiteSpace: "noWrap",
                          }}
                        >
                          <TableCell
                            key={columns.id}
                            component="th"
                            scope="row"
                            style={{
                              width: "140px",
                              textAlign: "center",
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "300",
                              fontSize: "15px",
                              paddingLeft: "40px",
                            }}
                          >
                            <img
                              src={row.avatar}
                              style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "30px",
                              }}
                            />
                          </TableCell>
                          <TableCell
                            key={columns.id}
                            style={{
                              width: "150px",
                              textAlign: "left",
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "300",
                              fontSize: "15px",
                            }}
                          >
                            {row.first_name}
                          </TableCell>
                          <TableCell
                            key={columns.id}
                            style={{
                              width: "135px",
                              textAlign: "left",
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "300",
                              fontSize: "15px",
                            }}
                          >
                            {row.last_name}
                          </TableCell>
                          <TableCell
                            key={columns.id}
                            style={{
                              width: "225px",
                              textAlign: "left",
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "300",
                              fontSize: "15px",
                            }}
                          >
                            {row.email}
                          </TableCell>
                          <TableCell
                            style={{ width: "170px", textAlign: "center" }}
                          >
                            <span style={{ borderColor: "transparent" }}>
                              <Button
                                variant="contained"
                                style={{
                                  backgroundColor:index===2 || index === 4 ? "black" : "red",
                                  color: "#ffffff",
                                  width: "85px",
                                  height: "35px",
                                  borderRadius: "20px",
                                  borderColor: "transparent",
                                  textTransform:"capitalize"
                                }}
                                
                              >
                              {index===2 || index === 4 ? "disabled" : "active"}
                              </Button>
                            </span>
                          </TableCell>
                          <TableCell>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                              }}
                            >
                              <div>
                                <IconButton
                                  className="active-btn"
                                  icon={<FiEdit />}
                                  style={{
                                    borderColor: "transparent",
                                    borderRadius: "100%",
                                    color: "red",
                                    width: "30px",
                                    height: "35px",
                                  }}
                                />
                              </div>
                              <div>
                                <IconButton
                                  className="active-btn"
                                  icon={<RiDeleteBin5Line />}
                                  style={{
                                    borderColor: "transparent",
                                    borderRadius: "100%",
                                    color: "black",
                                    width: "30px",
                                    height: "35px",
                                  }}
                                />
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
              </TableBody>
            </TableContainer>
            <TablePagination
              rowPerPageOptions={[10, 25, 100]}
              component="div"
              count={rowData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>
    </main>
  );
}
