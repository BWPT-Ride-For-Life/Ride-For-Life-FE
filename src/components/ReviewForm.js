import React from "react";
import { Form, withFormik} from "formik";
import * as Yup from "yup";
import { Button, ButtonToolbar } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

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
  
  const sentData = { data: " " };
 const  handleChange = e => {
    this.setState({
      rating: {
        ...this.state.rating,
        [e.target.name]: e.target.value
      },
      revtext: {
        ...this.state.revtext,
        [e.target.name]: e.target.value
      }
    });
  };

 
  postReview = e => {
    e.preventDefault();
    this.props.postReview(this.state.revtext);
  };
  postRating = e => {
    e.preventDefault();
    this.props.postRating(this.state.rating);
  };

  axios
    .post("https://ride-for-life-bw.herokuapp.com/api/drivers/:id", sentData)
    .then(res => {
      console.log(res.data); // Data was created 
    })
    .catch(err => {
      console.log(err); // There was an error 
    });

  return (
    <Card>
      <Form>
        <textarea
          type="select"
          name="rating"
          placeholder="Rating"
          touched={touched.rating}
         // onChange={this.handleChange}
          errors={errors.rating}
        />
        <br />
        <textarea
          type="text"
          name="revtext"
          placeholder="Review Text"
          touched={touched.revtext}
          //onChange={this.handleChange}
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