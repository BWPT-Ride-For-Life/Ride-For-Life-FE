import { createContext, useReducer, useContext } from 'react';

export const ReviewContext = createContext();

const initialState = {
    rating: rating || "",
      revtext: revtext || ""
    }
    export const ADD_REVIEW = "ADD_REVIEW";
    export const SUBMIT_EDIT = "SUBMIT_EDIT";
    export const TOGGLE_EDIT = "TOGGLE_EDIT";
    export const RESET_FORM = "RESET_FORM";


    export const addReview = review => {
        return { type: ADD_REVIEW, review };
      };

     export const submitEdit = changes => {
         return { type: SUBMIT_EDIT, changes };
};

export const toggleEdit = () => {
    return { type: TOGGLE_EDIT };
  };

  export const resetForm = () => {
    return { type: RESET_FORM };
  };
  export const userReducer = (state, action) => {
    switch (action.type) {
        case ADD_REVIEW:
      action.sentData.id = state.sentData.length + 1;
      return { ...state, sentData: [...state.sentData, action.sentData] };
      case SUBMIT_EDIT:
        toggleEdit();
        return {
          ...state,
          users: state.users.map(user =>
            user.id === action.changes.id ? action.changes : user
          )
        };
        case TOGGLE_EDIT:
      return { ...state, editing: !state.editing };
    case RESET_FORM:
      return { ...state, userForm: { id: null, name: "", username: "" } };
    default:
      return state;
  }
};
const ReviewProvider = props => {
    const [users, dispatch] = useReducer(userReducer, initialState);
    const userData = { users, dispatch };
    return <ReviewContext.Provider value={userData} {...props} />;
  };

  // Higher Order Function - Custom Hook
  const ReviewContext = () => {
    return useContext(ReviewContext);
  };

  export { ReviewProvider, ReviewContext };