import React, { useState, useEffect } from "react";
import { Form, withFormik } from "formik";
import * as Yup from "yup";
// import { Button } from "reactstrap";
import styled from "styled-components";
import axios from "axios";

const Card = styled.div`
  width: 60vw;
  min-height: 55vh;
  max-width: 1024px;
  margin: 35px auto;
  background: #fff;
  padding: 15px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const AddReviewForm = ({ errors, touched, status }) => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    if (status) {
      setReview([...review, status]);
    }
  }, [review, status]);

  // const [data, setData] = useState({});

  return (
    <Card>
      <h1>Driver Rating </h1>
      <Form>
        <textarea type="text" name="id" placeholder="Driver ID" />
        {touched.id && errors.id(<p className="error">{errors.id}</p>)}
        <br />
        <textarea
          type="text"
          name="revtext"
          placeholder="Review Text"
          touched={touched.revtext}
          errors={errors.revtext}
        />
        <br />
        <textarea
          type="text"
          name="user"
          placeholder="User"
          touched={touched.user}
          errors={errors.user}
        />
        <br />
        <button color="primary">Submit</button>{''}
      </Form>
    </Card>
  );
};

const FormikAddReviewForm = withFormik({
  mapPropsToValues({ id, revtext, user }) {
    return {
      id: id || "",
      revtext: revtext || "",
      user: user || ""
    };
  },

  validationSchema: Yup.object().shape({
    revtext: Yup.string().required("Please input review"),
    id: Yup.number()
      .required("Please input rating")
      .typeError("Please use only digits"),
    user: Yup.string().required("Please enter username")
  }),
  handleSubmit(values, { setStatus }) {
    axios
      .post("/api/drivers/:id", values)
      .then(response => {
        console.log(response.data.reviews);

        setStatus(response.data.review);
      })
      .catch(error => console.log(error.response));
  }
})(AddReviewForm);

export default FormikAddReviewForm;
