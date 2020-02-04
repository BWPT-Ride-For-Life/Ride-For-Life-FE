import React, {useState, useEffect} from "react";
import axios from "axios";
import * as Yup from "yup";
import {withFormik, Form, Field} from "formik";
import styled from "styled-components";

const StyleEntry = styled.div`
padding: 0;
display: block;
margin: 10px 0 0 0;`;


const NewReview = ({values, errors, touched, status}) => {
  const [review,setReview] = useState([]);

  useEffect(() => {
      if (status) {
          setReview([...review, status]);
      }
  },[status]);

  return(
      <div>
          <Form className="FormMASTER">
              <h1>Driver Review</h1>
                  <StyleEntry>
                  Rating
                  <Field type="text" name="rating" placeholder="rating" />
                  {touched.rating && errors.rating && (
                      <p className="error">{errors.rating}</p>
                  )}
                  </StyleEntry>
                  <StyleEntry>
                  Write Review
                  <Field type="text" name="revtxt" placeholder="Review Text" />
                  {touched.revtxt && errors.revtxt && (
                      <p className="error">{errors.revtxt}</p>
                  )}
                  </StyleEntry>
                  <StyleEntry>
                  <button>Submit</button>
              </StyleEntry>
              
          </Form>

      </div>
  );
};

const FormikNewDriver = withFormik({
  mapPropsToValues({rating, revtxt}) {
      return {
          rating: rating || "",
          revtxt: revtxt || "",
      };
  },

  validationSchema: Yup.object().shape({
      rating: Yup.number()
      .required("Required field"),
      revtxt: Yup.string()
      .required("Required field"),
  }),
  handleSubmit(values, { setStatus}) {
      axios
      .post("/api/reviews/", values)
      .then(response => {
          console.log(response);
          setStatus(response.data);
      })
      .catch(error => console.log(error.response));
  }
})(NewReview);

export default FormikNewDriver;