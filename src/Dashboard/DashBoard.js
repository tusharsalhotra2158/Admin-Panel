import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import DashboardComp from "./DashboardComp/DashboardComp";
import UserManage from "./UserManage";
import AllUsers from "./AllUsers";
import Editpage from "./Editpage";
import TableData from "./TableData";
import Artists from "./DashboardComp/Dashexplore/Artists";
import Albums from "./DashboardComp/Dashexplore/Albums";
import CreateUser from "./CreateUser";

const drawerWidth = 265;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
      color: "black",
      "&:hover": {
        background: "transparent",
      },
      "&:focus": {
        background: "none",
      },
    },

    hide: {
      display: "none",
    },
    drawer: {
      height: "100%",
      boxShadow: "4px 4px 4px rgba(44, 51, 73, 0.25)",
      width: drawerWidth,
      flexShrink: 0,
      marginTop: "50px",
    },
    drawerOpen: {
      boxShadow: "4px 4px 4px rgba(44, 51, 73, 0.25)",
      marginTop: "50px",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      marginTop: "50px",
      boxShadow: "4px 4px 4px rgba(44, 51, 73, 0.25)",
      width: "65px",
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    content: {
      maxWidth: "100%",
      paddingTop: "80px",
    },
  })
);

export default function DashBoard() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openList, setOpenList] = React.useState(false);
  const [openDash, setOpenDash] = React.useState(true);
  const [openSingle, setOpenSingle] = React.useState(false);
  const [openAll, setOpenAll] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openArtist, setOpenArtist] = React.useState(false);
  const [openAlbums, setOpenAlbums] = React.useState(false);
  const [openCreate, setOpenCreate] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
    setOpenList(false);
  };
  const onHandleList = () => {
    setOpenList(!openList);
    setOpen(true);
  };
  const onHandleDash = () => {
    setOpenDash(true);
    setOpenSingle(false);
    setOpenAll(false);
    setOpenEdit(false);
    setOpen(true);
    setOpenArtist(false);
    setOpenAlbums(false);
    setOpenCreate(false);
  };

  const onHandleSingle = () => {
    setOpenSingle(!openSingle);
    setOpenDash(false);
    setOpenAll(false);
    setOpenEdit(false);
    setOpen(true);
    setOpenArtist(false);
    setOpenAlbums(false);
    setOpenCreate(false);
  };
  const onHandleAll = () => {
    setOpenAll(!openAll);
    setOpenDash(false);
    setOpenSingle(false);
    setOpenEdit(false);
    setOpen(true);
    setOpenArtist(false);
    setOpenAlbums(false);
    setOpenCreate(false);
  };
  const onHandleEdit = () => {
    setOpenEdit(!openEdit) || setOpenSingle(false);
  };
  const onHandleArtist = () => {
    setOpenArtist(!openArtist);
    setOpenDash(false);
    setOpenSingle(false);
    setOpenEdit(false);
    setOpenList(false);
    setOpenAlbums(false);
    setOpenCreate(false);
  };

  const onHandleAlbums = () => {
    setOpenAlbums(!openAlbums);
    setOpenDash(false);
    setOpenSingle(false);
    setOpenEdit(false);
    setOpenList(false);
    setOpenCreate(false);
  };

  const onHandleCreate = () => {
    setOpenCreate(!openCreate);
    setOpenDash(false);
    setOpenAll(false);
    setOpenEdit(false);
    setOpen(true);
    setOpenArtist(false);
    setOpenAlbums(false);
    setOpenSingle(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" zIndex="1111">
        <Toolbar display="flex" className={classes.toolbar}>
          <Grid item xs={2} style={{ display: "flex" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
              style={{ position: "relative" }}
            >
              <MenuIcon />
            </IconButton>

            <IconButton
              onClick={handleDrawerClose}
              className={clsx(classes.menuButton, {
                [classes.hide]: !open,
              })}
              style={{
                position: "absolute",
                justifyContent: "flex-start",
                bottom: "7px",
                left: "24px",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Grid>

          <Grid item xs={5}>
            <Typography
              variant="h6"
              noWrap
              style={{
                color: "black",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "300",
                fontSize: "20px",
              }}
            >
              Himkhand
            </Typography>
          </Grid>
          <Grid item lg={6}>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems:"center" }}>
              <img
                src={process.env.PUBLIC_URL + "/01 4.png"}
                style={{ display: "flex"}}
              />
              <a
                href="#login"
                style={{
                  color: "black",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Admin
              </a>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <List>
          <ListItem>
            <div
              style={{
                display: "grid",
                justifyContent: "flex-start",
                justifyItems: "flex-start",
                lineHeight: "3.3",
                margin: "20px",
              }}
            >
              <div>
                <Button
                  className="listbutton"
                  onClick={onHandleDash}
                  leftIcon={
                    <img
                      className="dashbtn"
                      src={process.env.PUBLIC_URL + "/dashboard 3.png"}
                      style={{
                        minWidth: "20px",
                      }}
                    />
                  }
                  variant="solid"
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "16px",
                  }}
                >
                  <span style={{ marginLeft: "10px" }}>Dashboard</span>
                </Button>
              </div>
              <div style={{ marginTop: "10px" }}>
                <Button
                  onClick={onHandleList}
                  className="listbutton"
                  leftIcon={<FaRegUser fontSize="20px" />}
                  variant="solid"
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "16px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ marginLeft: "10px" }}>User Management</span>
                  {openList ? <ExpandLess /> : <ExpandMore />}
                </Button>
                <Collapse
                  in={openList}
                  timeout="auto"
                  unmountOnExit
                  style={{ color: "black" }}
                >
                  <List
                    component="div"
                    disablePadding
                    style={{
                      display: "grid",
                      justifyContent: "flex-start",
                      marginLeft: "15px",
                    }}
                  >
                    <ListItem id="ListBtn" button onClick={onHandleAll}>
                      <ListItemText primary="All User" />
                    </ListItem>
                    <ListItem button id="ListBtn" onClick={onHandleSingle}>
                      <ListItemText primary="Single User" />
                    </ListItem>
                    <ListItem button id="ListBtn">
                      <ListItemText primary="Delete User" />
                    </ListItem>
                    <ListItem button id="ListBtn" onClick={onHandleCreate}>
                      <ListItemText primary="Create User" />
                    </ListItem>
                  </List>
                </Collapse>
              </div>
              <div style={{ marginTop: "10px" }}>
                <Button
                  className="listbutton"
                  leftIcon={<IoSettingsOutline fontSize="22px" />}
                  variant="solid"
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "16px",
                  }}
                >
                  <span style={{ marginLeft: "10px" }}>Settings</span>
                </Button>
              </div>
              <div style={{ marginTop: "10px" }}>
                <Link to="/loginpage" style={{ color: "black" }}>
                  <Button
                    className="listbutton"
                    leftIcon={<IoLogOutOutline fontSize="25px" />}
                    style={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "16px",
                    }}
                  >
                    <span style={{ marginLeft: "10px" }}>Logout</span>
                  </Button>
                </Link>
              </div>
            </div>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <Typography paragraph>
          {openDash && (
            <DashboardComp
              onHandleArtist={onHandleArtist}
              onHandleAlbums={onHandleAlbums}
            />
          )}
          {(openArtist && <Artists />) || (openAlbums && <Albums />)}
          {(openSingle && <UserManage onHandleEdit={onHandleEdit} />) ||
            (openEdit && <Editpage />)}{" "}
          {openAll && <TableData />}
          {openCreate && <CreateUser />}
        </Typography>
      </main>
    </div>
  );
}
