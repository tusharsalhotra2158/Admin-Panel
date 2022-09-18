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
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Button } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IconButton } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

const columns = [
  { id: "avatar", label: "Image", align: "left", minWidth: "120px" },
  { id: "first_name", label: "Name", minWidth: "120px", align: "left" },
  {
    id: "last_name",
    label: "Tracks",
    minWidth: "140px",
    align: "left",
  },
  {
    id: "email",
    label: "Created",
    minWidth: "140px",
    align: "left",
  },
  {
    id: "Status",
    label: "Status",
    minWidth: "140px",
    align: "left",
  },
  {
    id: "Action",
    label: "Action",
    minWidth: "140px",
    align: "left",
  },
];

const useStyles = makeStyles({
  root: {
    zIndex: "1111",
    paddingLeft: "30px",
    width: "100%",
    height: "100%",
  },

  content: {
    border: "2px solid #E4E9F2",
    boxSizing: "border-box",
    boxShadow:
      "-4px -4px 4px rgba(34, 41, 47, 0.04), 4px 4px 4px rgba(34, 41, 47, 0.04)",
    background: "white",
    width: "950px",
  },
  container: {
    boxShadow: "transparent",
  },
});

function Artists() {
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
    <main className={classes.root}>
      <div
        style={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "26px",
          marginBottom: "20px",
        }}
      >
        <h3> Dashboard </h3>
      </div>
      <div className={classes.content}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            paddingTop: "10px",
            paddingLeft: "40px",
            paddingBottom: "10px",
            paddingRight: "40px",
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
              Artists
            </h3>
          </Grid>
          <Grid
            item
            sm={6}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gridGap: "10px",
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
                    placeholder="Search..."
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
                color: "white",
                width: "170px",
                display: "flex",
                whiteSpace: "nowrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AiOutlinePlus /> Add Artist
            </Button>
          </Grid>
        </div>
        <Paper>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
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
                      position: "sticky",
                      paddingLeft: "40px",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </Table>

            <TableBody>
              {rowData &&
                rowData.length > 0 &&
                rowData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                        style={{
                          display: "flex",
                          justifyContent: "left",
                          whiteSpace: "noWrap",
                          paddingLeft: "22px",
                        }}
                      >
                        <TableCell
                          key={columns.id}
                          component="th"
                          scope="row"
                          style={{
                            minWidth: "140px",
                            textAlign: "left",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "300",
                            fontSize: "15px",
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
                            minWidth: "170px",
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
                            minWidth: "140px",
                            textAlign: "left",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "300",
                            fontSize: "15px",
                          }}
                        >
                          {row.id}
                        </TableCell>
                        <TableCell
                          key={columns.id}
                          style={{
                            minWidth: "170px",
                            textAlign: "left",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "300",
                            fontSize: "15px",
                          }}
                        >
                          1 month
                        </TableCell>
                        <TableCell
                          style={{ minWidth: "140px", textAlign: "left" }}
                        >
                          <span style={{ borderColor: "transparent" }}>
                            <Button
                              variant="contained"
                              style={{
                                backgroundColor:
                                  index === 2 || index === 4 ? "black" : "red",
                                color: "#ffffff",
                                width: "85px",
                                height: "35px",
                                borderRadius: "20px",
                                borderColor: "transparent",
                                textTransform: "capitalize",
                              }}
                            >
                              {index === 2 || index === 4
                                ? "disabled"
                                : "active"}
                            </Button>
                          </span>
                        </TableCell>
                        <TableCell
                          style={{ width: "140px", textAlign: "left" }}
                        >
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
    </main>
  );
}

export default Artists;
