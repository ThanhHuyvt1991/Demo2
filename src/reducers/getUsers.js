import * as types from "./../constants/index";

const getUsers_Reducers = (state = [], action) => {
  switch (action.types) {
    case types.GET_USERS:
      return state;
    default:
      return state;
  }
};
export default getUsers_Reducers;
