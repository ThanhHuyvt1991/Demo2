import React from "react";
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
class Catelogy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      input: null,
      open: false,

      name: "",
      age: 0,
      address: "",
      email: "",
      phone: "",
      // isSelected: false,
      selectID: null,
      selected: [],
      personDetail: {},
      isNew: Boolean,
      isDisabled: true
    };
  }
  handleInput = event => {
    const name = event.target.id;
    const value = event.target.value;
    this.setState({ [name]: value });
  };
  // FUNCTION OPEN DIALOG
  handleClickOpen = () => {
    this.setState({
      name: "",
      age: 0,
      address: "",
      email: "",
      phone: "",
      isNew: true,
      personDetail: {}
    });
    this.setState({ open: true });
  };
  handleClose = form => {
    this.setState({ open: false });
  };
  addNew = () => {
    // console.log("addNew");
    this.setState({ open: false });
    const user = {
      name: this.state.name,
      age: this.state.age,
      address: this.state.address,
      email: this.state.email,
      phone: this.state.phone
    };
    axios
      .post("http://5cb2a6336ce9ce00145beecc.mockapi.io/api/test/user", user)
      .then(rec => {
        this.componentDidMount();
      });
  };
  deleteItem = () => {
    // console.log("id", this.state.selected);

    axios
      .delete(
        `http://5cb2a6336ce9ce00145beecc.mockapi.io/api/test/user/` +
          this.state.selected
      )
      .then(res => {
        // console.log(res);
        this.setState({ selected: [] });
        this.componentDidMount();
      });
  };
  edit = () => {
    this.setState({
      name: this.state.personDetail.name,
      age: this.state.personDetail.age,
      address: this.state.personDetail.address,
      email: this.state.personDetail.email,
      phone: this.state.personDetail.phone,
      isNew: false
    });
    this.setState({ open: true });
  };
  editItem = () => {
    // console.log("edit");

    this.setState({ open: false });
    // this.setState({
    //   name: this.state.name,
    //   age: this.state.personDetail.age,
    //   address: this.state.personDetail.address,
    //   email: this.state.personDetail.email,
    //   phone: this.state.personDetail.phone
    // });
    const user = {
      name: this.state.name,
      age: this.state.age,
      address: this.state.address,
      email: this.state.email,
      phone: this.state.phone
    };
    console.log("id", this.state.personDetail.id);

    axios
      .put(
        "http://5cb2a6336ce9ce00145beecc.mockapi.io/api/test/user/" +
          this.state.personDetail.id,
        user
      )
      .then(rec => {
        if (rec) {
          this.setState({
            selected: []
          });
          // console.log("rec", rec);
          this.componentDidMount();
        }
      });
  };
  async componentDidMount() {
    await axios
      .get(`http://5cb2a6336ce9ce00145beecc.mockapi.io/api/test/user`)
      .then(res => {
        // const data = res.data;
        this.setState({ persons: res.data });
        // console.log("persons", res.data);
      });
  }
  // isSelected = id => this.state.selected.indexOf(id) !== -1;
  handleClick = (event, person) => {
    console.log("sdfsdf");
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(person.id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, person.id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    this.setState({ selected: newSelected });
    if (this.state.selected === []) {
      // this.setState({ personDetail: person });
    } else {
      this.setState({
        isDisabled: false,
        personDetail: person
      });
    }
    console.log("selec", this.state.selected);
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;
  render() {
    const { classes, onSelectAllClick, numSelected, rowCount } = this.props;
    const persons = []; //this.state.persons;
    const { input, selectID } = this.state;
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
            disabled={this.state.isDisabled}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={this.state.isDisabled}
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
                value={this.state.name}
                onChange={this.handleInput}
              />
              <TextField
                margin="dense"
                id="age"
                label="Age"
                type="number"
                fullWidth
                value={this.state.age}
                onChange={this.handleInput}
              />
              <TextField
                margin="dense"
                id="address"
                label="Address"
                type="text"
                fullWidth
                value={this.state.address}
                onChange={this.handleInput}
              />
              <TextField
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                value={this.state.email}
                onChange={this.handleInput}
              />
              <TextField
                margin="dense"
                id="phone"
                label="Phone"
                type="string"
                fullWidth
                value={this.state.phone}
                onChange={this.handleInput}
              />
            </DialogContent>
            <DialogActions className={classes.mr_20}>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={
                  this.state.isNew === true ? this.addNew : this.editItem
                }
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
              {this.state.persons.map(row => {
                const isSelected = this.isSelected(row.id);
                return (
                  <TableRow
                    key={row.id}
                    onClick={event => this.handleClick(event, row)}
                    selected={isSelected}
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={-1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox checked={isSelected} />
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
Catelogy.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Catelogy);
