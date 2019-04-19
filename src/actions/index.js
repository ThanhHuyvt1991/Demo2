import * as types from "./../constants/index";

export const getUsers = () => ({
  type: types.GET_USERS,
  payload: {
    url
  }
});
