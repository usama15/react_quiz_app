import React from 'react'
import './App.css';
import Navbar from "./component/MenuAppBar"
// import Registration from "./component/Registration"
import theme from "./component/AppBarStyle";
import {MuiThemeProvider} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Registration from "./component/Registration";
import Users from "./pages/Users";
import Home from "./pages/Home";

class App extends React.Component{
    render() {
        return(
            <Router>
                <MuiThemeProvider theme={theme}>
                <Navbar/>
                </MuiThemeProvider>
                {/*<Registration/>*/}
                <Switch>
                     <Route exact path="/">
                        <Home />
                     </Route>
                    <Route exact path="/signup">
                        {/*<About />*/}
                        <Registration/>
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>

                </Switch>

            </Router>
        )
    }
}

export default App;
