import React, { useState, useEffect } from "react";
import {Field, Form, withFormik } from "formik";
import * as Yup from "yup";
import { Button } from "reactstrap";
import styled from "styled-components";
import {axiosWithAuth} from "../utils/AxiosWithAuth";

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
    console.log(review, 'review state')
  useEffect(() => {
      status && setReview(review => [...review, status]);
  }, [status]);

  return (
    <Card>
      <h1>Driver Rating </h1>
      <Form>
        <Field
            type="text"
            name="driver_id"
            placeholder="Driver ID" />
        {touched.driver_id && errors.driver_id && (<p className="error">{errors.driver_id}</p>)}
        {/*<br />*/}
        <Field
          type="text"
          name="review"
          placeholder="Review Text"
        />
        {touched.review && errors.review && (<p className='error'>{errors.review}</p>)}
        {/*<br />*/}
        <Field
          type="text"
          name="user"
          placeholder="User"
        />
        {touched.user && errors.user && (<p className='error'>{errors.user}</p>)}
        <br />
        <Button type='submit' color="primary">Submit</Button>{''}
      </Form>
      {/*{review.map(review => (*/}
      {/*    <ul key={review.id}>*/}
      {/*      <li>Driver ID: {review.driver_id}</li>*/}
      {/*      <li>Review: {review.review}</li>*/}
      {/*      <li>User: {review.user}</li>*/}
      {/*    </ul>*/}
      {/*))}*/}
    </Card>
  );

};

const FormikAddReviewForm = withFormik({
  mapPropsToValues({driver_id, review, user}) {
    return {
      driver_id: driver_id || "",
      review: review || "",
      user: user || ""
    };
  },

  validationSchema: Yup.object().shape({
    review: Yup
        .string()
        .required("Please input review"),
    driver_id: Yup
        .number()
        .required("Please input driver id")
        .typeError("Please use only digits"),
    user: Yup
        .string()
        .required("Please enter username")
  }),

  handleSubmit(values, { setStatus }) {
    let driver_id = (values.driver_id)
    let post = {
      review: values.review
    }
    axiosWithAuth()
      .post(`/api/drivers/${driver_id}/reviews`, post)
      .then(response => {
        console.log(response.data);
        console.log(response)
        setStatus(response.data);
        console.log(values, 'values')
        console.log(post, 'post')
      })
      .catch(error => console.log(error.response));
  }
})(AddReviewForm);

export default FormikAddReviewForm;
