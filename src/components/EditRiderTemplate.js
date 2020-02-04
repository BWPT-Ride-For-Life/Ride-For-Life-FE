import React, { useState } from "react";

// Context
import {
  toggleEdit,
  submitEdit,
  resetForm,
  useUserContext
} from "../Contexts/UserContext.js";

// UI
import { Input, Button } from "antd";

const EditRiderForm = () => {
  const { users, dispatch } = useUserContext();
  const [changes, setChanges] = useState({
    id: null,
    username: "",
    name: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setChanges({ ...changes, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(toggleEdit());
    dispatch(submitEdit(changes));
    dispatch(resetForm());
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label>Name</label>
      <Input
        type="text"
        name="name"
        value={changes.name}
        onChange={handleChange}
      />
      <label>Email</label>
      <Input
        type="text"
        name="email"
        value={changes.email}
        onChange={handleChange}
      />
      <input type="submit" value="Update Rider" />
      <Button
        onClick={() => {
          dispatch(resetForm());
          dispatch(toggleEdit());
        }}
      >
        <span>Cancel</span>
      </Button>
    </form>
  );
};

export default EditRiderForm;