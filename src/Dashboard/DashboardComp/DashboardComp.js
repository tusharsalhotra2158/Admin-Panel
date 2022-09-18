import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { IoIosArrowForward } from "react-icons/io";
import Button from "@material-ui/core/Button";
import "../../Dashboard/dashboard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
    background: "#ffffff",
    border: "1px solid #e4e9f2",
    boxSizing: "border-box",
  },
  body: {
    display: "flex",
    marginRight: "30px",
  },
  content: {
    display: "grid",
    maxHeight: "100%",
    paddingLeft: "30px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
    "&:hover": {
      background: "transparent",
    },
  },
}));

function DashboardComp(props) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
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

      <div className={classes.body}>
        <div
          className="continer"
          style={{
            display: "flex",
            gridGap: "10px",
          }}
        >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                <div
                  style={{
                    display: "flex",
                    background: "#FFFFFF",
                    boxSizing: "border-box",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    class="col-6"
                    style={{
                      fontfamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "30px",
                      lineHeight: "60px",
                      color: "#0E930C",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {" "}
                    20 <br />
                    <div
                      style={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "22px",
                        lineHeight: "33px",
                        display: "flex",
                        alignItems: "center",
                        color: "#82868B",
                      }}
                    >
                      Artists
                    </div>
                  </div>
                  <div class="col-6" textAlign="right">
                    <img
                      src={process.env.PUBLIC_URL + "/artist 1.png"}
                      style={{
                        width: "48px",
                        height: "48px",
                        marginTop: "25px",
                        marginLeft: "20px",
                      }}
                    />
                  </div>
                </div>
              </Typography>
            </CardContent>

            <Typography style={{ display: "flex", justifyContent: "center" }}>
              <Button
                className={classes.button}
                onClick={props.onHandleArtist}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                <span>More info </span>

                <span>
                  {" "}
                  <IoIosArrowForward />
                </span>
                <span>
                  {" "}
                  <IoIosArrowForward />{" "}
                </span>
              </Button>
            </Typography>
          </Card>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                style={{ display: "grid" }}
              >
                <div style={{ display: "flex" }}>
                  <div
                    class="col-6"
                    style={{
                      fontfamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "30px",
                      lineHeight: "60px",
                      color: "#0E930C",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {" "}
                    50
                    <br />
                    <div
                      style={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "22px",
                        lineHeight: "33px",
                        display: "flex",
                        alignItems: "center",
                        color: "#82868B",
                      }}
                    >
                      Albums
                    </div>
                  </div>

                  <div class="col-6">
                    <img
                      src={process.env.PUBLIC_URL + "/move-album 1(1).png"}
                      style={{
                        width: "48px",
                        height: "48px",
                        marginTop: "25px",
                        marginLeft: "20px",
                      }}
                    />
                  </div>
                </div>
              </Typography>
            </CardContent>
            <Typography style={{ display: "flex", justifyContent: "center" }}>
              <Button
                className={classes.button}
                onClick={props.onHandleAlbums}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                <span>More info </span>

                <span>
                  {" "}
                  <IoIosArrowForward />
                </span>
                <span>
                  {" "}
                  <IoIosArrowForward />{" "}
                </span>
              </Button>
            </Typography>
          </Card>
          <Card className={classes.root}>
            <CardContent>
              <Typography>
                <div style={{ display: "flex" }}>
                  <div
                    class="col-6"
                    style={{
                      fontfamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "30px",
                      lineHeight: "60px",
                      color: "#0E930C",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {" "}
                    530 <br />
                    <div
                      style={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "22px",
                        lineHeight: "33px",
                        display: "flex",
                        alignItems: "center",
                        color: "#82868B",
                      }}
                    >
                      Favorites
                    </div>
                  </div>
                  <div class="col-6">
                    <img
                      src={process.env.PUBLIC_URL + "/favorites 2(1).png"}
                      style={{
                        width: "48px",
                        height: "48px",
                        marginTop: "25px",
                        marginLeft: "20px",
                      }}
                    />
                  </div>
                </div>
              </Typography>
            </CardContent>
            <Typography style={{ display: "flex", justifyContent: "center" }}>
              <Button
                className={classes.button}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                <span>More info </span>

                <span>
                  {" "}
                  <IoIosArrowForward />
                </span>
                <span>
                  {" "}
                  <IoIosArrowForward />{" "}
                </span>
              </Button>
            </Typography>
          </Card>
          <Card className={classes.root}>
            <CardContent>
              <Typography>
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <div
                    class="col-6"
                    style={{
                      fontfamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "30px",
                      lineHeight: "60px",
                      color: "#0E930C",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {" "}
                    1046 <br />
                    <div
                      style={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "22px",
                        lineHeight: "33px",
                        display: "flex",
                        alignItems: "center",
                        color: "#82868B",
                      }}
                    >
                      Users
                    </div>
                  </div>
                  <div class="col-6">
                    <img
                      src={process.env.PUBLIC_URL + "/users 2(1).png"}
                      style={{
                        width: "48px",
                        height: "48px",
                        marginTop: "25px",
                        marginLeft: "20px",
                      }}
                    />
                  </div>
                </div>
              </Typography>
            </CardContent>
            <Typography style={{ display: "flex", justifyContent: "center" }}>
              <Button
                className={classes.button}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                <span>More info </span>

                <span>
                  {" "}
                  <IoIosArrowForward />
                </span>
                <span>
                  {" "}
                  <IoIosArrowForward />{" "}
                </span>
              </Button>
            </Typography>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default DashboardComp;
