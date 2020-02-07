import React, { createContext, useReducer, useContext } from "react";
// Create Context
export const UserContext = createContext();
// Initial State
const initialState = {
  users: [
    { id: 1, name: "Quokka", username: "cutestEver" },
    { id: 2, name: "Clara", username: "cutiePoopie" }
  ],
  editing: false,
  userForm: {
    id: null,
    name: "",
    username: ""
  }
};
// Actions
export const ADD_USER = "ADD_USER";
export const EDIT_USER = "EDIT_USER";
export const SUBMIT_EDIT = "SUBMIT_EDIT";
export const REMOVE_USER = "REMOVE_USER";
export const TOGGLE_EDIT = "TOGGLE_EDIT";
export const RESET_FORM = "RESET_FORM";


// Action Creators
export const addUser = user => {
  return { type: ADD_USER, user };
};
export const editUser = ({ id, name, username }) => {
  return { type: EDIT_USER, id, name, username };
};
export const submitEdit = changes => {
  return { type: SUBMIT_EDIT, changes };
};
export const removeUser = id => {
  return { type: REMOVE_USER, id };
};
export const toggleEdit = () => {
  return { type: TOGGLE_EDIT };
};
export const resetForm = () => {
  return { type: RESET_FORM };
};
// Reducer
export const userReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      action.user.id = state.users.length + 1;
      return { ...state, users: [...state.users, action.user] };

    case EDIT_USER:
      toggleEdit();
      return {
        ...state,
        userForm: {
          id: action.id,
          name: action.name,
          username: action.username
        }
      };
    case SUBMIT_EDIT:
      toggleEdit();
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.changes.id ? action.changes : user
        )
      };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    case TOGGLE_EDIT:
      return { ...state, editing: !state.editing };
    case RESET_FORM:
      return { ...state, userForm: { id: null, name: "", username: "" } };
    default:
      return state;
  }
};
// Provider
const UserProvider = props => {
  const [users, dispatch] = useReducer(userReducer, initialState);
  const userData = { users, dispatch };
  return <UserContext.Provider value={userData} {...props} />;
};
// Higher Order Function - Custom Hook
const useUserContext = () => {
  return useContext(UserContext);
};
export { UserProvider, useUserContext };