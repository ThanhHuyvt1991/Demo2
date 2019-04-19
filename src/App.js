import React from "react";
import Contact from "./Contact";
import Catelogy from "./Catelogy";
import Users from "./components/users";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core/styles";
import Footer from "./footer";
import Grid from "@material-ui/core/Grid";
const styles = {
  appBar: {
    backgroundColor: "#656a80",
    position: "fixed"
  },
  bigAvatar: {
    width: 200,
    height: 45,
    borderRadius: 0
  },
  root: {
    flexGrow: 1
  },
  roots: {
    display: "flex",
    paddingLeft: 60
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid item xs={12}>
          <BrowserRouter>
            <AppBar position="static" className={classes.appBar}>
              <Grid className={classes.root} item xs={12}>
                <Toolbar>
                  <Avatar
                    className={classes.bigAvatar}
                    alt="Remy Sharp"
                    src="/asset/logo.png"
                  />
                  <div className={classes.root}>
                    <MenuList className={classes.roots}>
                      <MenuItem>
                        <Link to="/" className="nav">
                          Home
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to="/catelogy" className="nav">
                          Employees
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to="/users" className="nav">
                          Users
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to="/info" className="nav">
                          Info
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to="/contact" className="nav">
                          Contact
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </div>
                </Toolbar>
              </Grid>
            </AppBar>
            <Grid className={classes.root}>
              <div className="main-route-place">
                <Route exact path="/" component={Home} />
                <Route path="/catelogy" component={Catelogy} />
                <Route path="/info" component={Info} />
                <Route path="/users" component={Users} />
                <Route
                  path="/contact"
                  render={props => {
                    return (
                      <Contact
                        name="Me"
                        {...{
                          ...props
                        }}
                      />
                    );
                  }}
                />
              </div>
              <div>{/* <EnhancedTable /> */}</div>
            </Grid>
            <Footer />
          </BrowserRouter>
        </Grid>
      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(App);
