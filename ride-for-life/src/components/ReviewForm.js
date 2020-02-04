import React from "react";
import { Form, withFormik} from "formik";
import * as Yup from "yup";
import { Button, ButtonToolbar } from "react-bootstrap";
import styled from "styled-components";

const Card = styled.div`
  width: 35%;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px black;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`;

const AddReviewForm = props => {
  const { errors, touched } = props;

  // const [data, setData] = useState({});

  return (
    <Card>
      <Form>
        <textarea
          type="select"
          name="rating"
          placeholder="Rating"
          touched={touched.rating}
          errors={errors.rating}
        />
        <br />
        <textarea
          type="text"
          name="revtext"
          placeholder="Review Text"
          touched={touched.revtext}
          errors={errors.revtext}
        />
        <br />
        <ButtonToolbar>
          <Button variant="primary">Submit</Button>
        </ButtonToolbar>
      </Form>
    </Card>
  );
};

const FormikAddReviewForm = withFormik({
  mapPropsToValues({ rating, revtext }) {
    return {
      rating: rating || "",
      revtext: revtext || ""
    };
  },

  validationSchema: Yup.object().shape({
    revtext: Yup.string().required("Please input review"),
    rating: Yup.number()
      .required("Please input rating")
      .typeError("Please use only digits")
  })
})(AddReviewForm);

export default FormikAddReviewForm;
