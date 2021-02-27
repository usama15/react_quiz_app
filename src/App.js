import React from 'react'
import './App.css';
import Navbar from "./component/MenuAppBar"
import theme from "./component/AppBarStyle";
import {MuiThemeProvider} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Registration from "./component/Registration";
import Users from "./pages/Quiz";
import Home from "./pages/Home"
import Quiz from "./pages/Quiz";

class App extends React.Component{
    render() {
        return(
            <Router >
                <MuiThemeProvider theme={theme}>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} ></Route>
                        <Route exact path="/signup" component={Registration}></Route>
                        <Route path="/users" component={Users}>Users</Route>
                    </Switch>
                </MuiThemeProvider>
                <Quiz/>

            </Router>
        )
    }
}

export default App;
