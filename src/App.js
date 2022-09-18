import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import DashBoard from "./Dashboard/DashBoard";
import ResultSignUp from "./Form/ResultSignUp";
import ResultLogin from "./Form/ResultLogin";
import DashboardComp from "./Dashboard/DashboardComp/DashboardComp";
import UserManage from "./Dashboard/UserManage";
import AllUsers from "./Dashboard/AllUsers";
import Editpage from "./Dashboard/Editpage";
import { ChakraProvider } from "@chakra-ui/react";
import GetChef from "./API-CAll/GetChef";
import TableData from "./Dashboard/TableData";
// import CustomPaginationActionsTable fro./Dashboard/Tabledatable";
import Artists from './Dashboard/DashboardComp/Dashexplore/Artists';
import Background from "./Adminbody/Background";
import Switchbutton from "./Form/Switchbutton";

class App extends React.Component {
  render() {
    return (
      <>
        <ChakraProvider>
          <Switch>
            <Route exact path="/" component={Switchbutton} />
            <Route exact path="/loginpage" component={ResultLogin} />
            <Route exact path="/admin" component={Background} />
            {/* <Route exact path="/user" component={UserManage} /> */}
            {/* <Route exact path="/artist" component={Artists} /> */}
            <Route exact path="/chef" component={TableData} />
            <Route exact path="/edit" component={Editpage} />

          </Switch>
        </ChakraProvider>
      </>
    );
  }
}

export default App;
