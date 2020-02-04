import React, { useState } from "react";
import axios from "axios";
// Context
import { addUser, resetForm, useUserContext } from "../Contexts/UserContext.js";

fetch('https://ride-for-life-bw.herokuapp.com/api/auth/register-user', {
  method: 'POST',
  body: JSON.stringify({
    name: 'Kevin',
    email: 'kevcarr@example.com',
    password: 'anunsafepassword',
  })
})
  .then(res => res.json())
  .then(data => {
    localStorage.setItem('token', JSON.stringify(data.token));

  })
  .catch(err => {
    alert("Add info please");
  });

// UI
import { Input } from "antd";

const AddRiderForm = () => {
  const { users, dispatch } = useUserContext();
  const [newUser, setNewUser] = useState(users.userForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!!newUser.name || !!newUser.email) {
      dispatch(addUser(newUser));
      dispatch(resetForm());
    } else {
      alert("Add info please");
    }
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label>Name</label>
      <Input
        type="text"
        name="name"
        value={newUser.name}
        onChange={handleChange}
      />
      <label>Email</label>
      <Input
        type="text"
        value={newUser.email}
        onChange={handleChange}
      />
<Input
        type="text"
        name="password"
        value={newUser.password}
        onChange={handleChange}
      />

      <input type="submit" value="Add New Rider" />
    </form>
  );
};

export default AddRiderForm;