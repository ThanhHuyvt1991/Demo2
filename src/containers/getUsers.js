import { connect } from "react-redux";
import { createPost } from "../actions";
import Users from "./../components/users";
import React from "react";
const mapDispatchToProps = dispatch => {
  return {
    onGetUsers() {
      dispatch(getUsers());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Users);
