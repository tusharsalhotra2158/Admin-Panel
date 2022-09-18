import React, { useEffect, useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import TotalValueRenderer from "./TotalValueRenderer";
import Grid from "@material-ui/core/Grid";
import "ag-grid-enterprise";
import Action from "./Action";
import "./dashboard.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Button } from "react-bootstrap";
import { Avatar } from "@material-ui/core";
import { Img } from "@chakra-ui/react";

const useStyles = makeStyles({
  root: {
    width: "100%",
    
  },
  body: {
    justifyContent: "flex-end",
    width: "100%",
  },
  content: {
    display: "flex",
    alignItems: "right",
  },
});

export default function AllUsers() {
  const classes = useStyles();
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState([]);

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
  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.api.getDisplayedRowCount());
  };
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData.data));
  }, []);

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
            boxShadow:
              "-4px -4px 4px rgba(34, 41, 47, 0.04), 4px 4px 4px rgba(34, 41, 47, 0.04)",
           
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-start",backgroundColor:'white' }}>
            <Grid item sm={6}>
              <h3
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "26px",
                  textAlign: "center",
                  marginTop: "10px",
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
                }}
              >
                Filter
              </Button>
            </Grid>
          </div>
          <div
            className="ag-theme-alpine"
            id="myGrid"
            defaultColDef={{
              sortable: true,
              flex: 1,
              minWidth: 100,
            }}
            style={{
              height: "450px",
              width: "950px",
              background: "#F3F2F7",
              textAlign: "left",
            }}
          >
            <AgGridReact
              rowData={rowData}
              pagination={true}
              paginationPageSize={10}
              frameworkComponents={{
                totalValueRenderer: TotalValueRenderer,
                totalValueRenderrer: Action,
              }}
              onGridReady={onGridReady}
              defaultColDef={{
                sortable: true,
              }}
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <AgGridColumn
                field="avatar"
                width="158px"
                cellTemplate="<img src='avatar'/>"
              ></AgGridColumn>
              <AgGridColumn field="first_name" width="158px"></AgGridColumn>
              <AgGridColumn field="last_name" width="158px"></AgGridColumn>
              <AgGridColumn field="email" width="158px"></AgGridColumn>
              <AgGridColumn
                field="Status"
                width="158px"
                cellRenderer="totalValueRenderer"
              ></AgGridColumn>
              <AgGridColumn
                field="Action"
                width="158px"
                cellRenderer="totalValueRenderrer"
              ></AgGridColumn>
            </AgGridReact>
          </div>
        </div>
      </div>
    </main>
  );
}
