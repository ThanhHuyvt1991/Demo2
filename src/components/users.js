import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import axios from "axios";
import fetch from "isomorphic-fetch";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Checkbox from "@material-ui/core/Checkbox";

const styles = {
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  divAction: {
    padding: 20,
    paddingRight: 0,
    float: "right"
  },
  pl_10: {
    paddingLeft: 10,
    marginLeft: 10
  },
  mb_0: {
    marginBottom: 0
  },
  button: {
    // margin: spacing.unit
  },
  mr_20: {
    marginRight: 20
  }
};
const persons = [
  {
    id: "18",
    name: "Hoang Hau Aa",
    age: "232",
    address: "Can Tho H",
    email: "hoang@gmail.com",
    phone: "0123234535"
  },
  {
    id: "20",
    name: "Bui Thanh Huy",
    age: "16",
    address: "Vung Tau",
    email: "thanhhuy@gmail.com",
    phone: "013465678"
  },
  {
    id: "22",
    name: "name 22",
    age: 12,
    address: "Pitcairn Islands",
    email: "Jace42@yahoo.com",
    phone: "572-343-2224"
  }
];

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  componentDidMount() {
    // this.getUsers();
    // this.props.onGetUsers();
    console.log("_this.props.onGetUsers", this.props.onGetUsers);
  }
  // getUsers = () => {
  //   this.props.onGetUsers();
  // };
  render() {
    const { classes } = this.props;
    return (
      <Grid>
        <div>
          <h3 className={classes.mb_0}>PERSONNEL MANAGEMENT</h3>
        </div>
        <div className={classes.divAction}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClickOpen}
          >
            Creat New
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.pl_10}
            onClick={this.edit}
            // disabled={this.state.isDisabled}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="primary"
            // disabled={this.state.isDisabled}
            className={classes.pl_10}
            onClick={this.deleteItem}
          >
            Delete
          </Button>
        </div>
        <div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Infomation User</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Fill out the information below
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Full Name"
                type="text"
                fullWidth
                // value={this.state.name}
                onChange={this.handleInput}
              />
              <TextField
                margin="dense"
                id="age"
                label="Age"
                type="number"
                fullWidth
                // value={this.state.age}
                onChange={this.handleInput}
              />
              <TextField
                margin="dense"
                id="address"
                label="Address"
                type="text"
                fullWidth
                // value={this.state.address}
                onChange={this.handleInput}
              />
              <TextField
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                // value={this.state.email}
                onChange={this.handleInput}
              />
              <TextField
                margin="dense"
                id="phone"
                label="Phone"
                type="string"
                fullWidth
                // value={this.state.phone}
                onChange={this.handleInput}
              />
            </DialogContent>
            <DialogActions className={classes.mr_20}>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button
                // onClick={
                //   this.state.isNew === true ? this.addNew : this.editItem
                // }
                color="primary"
              >
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div />
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  {/* <Checkbox
                    indeterminate={numSelected > 0 && numSelected < rowCount}
                    checked={numSelected === rowCount}
                    onChange={onSelectAllClick}
                  /> */}
                </TableCell>
                <TableCell>FullName</TableCell>
                <TableCell align="left">Age</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Phone Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {this.state.persons.map(row => {
                const isSelected = this.isSelected(row.id); */}
              {persons.map(row => {
                // const isSelected = this.isSelected(row.id);
                return (
                  <TableRow
                    key={row.id}
                    onClick={event => this.handleClick(event, row)}
                    // selected={isSelected}
                    role="checkbox"
                    // aria-checked={isSelected}
                    tabIndex={-1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.age}</TableCell>
                    <TableCell align="left">{row.address}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.phone}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    );
  }
}
Users.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Users);
