import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import image from "../../asset/images/enter.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  passport: yup.number().required("Passport number is required"),
  state: yup.string().required("State is required"),
  phone: yup.number().required("Phone number is required"),
  sex: yup.string().required("Sex is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
  age: yup.number().required("Age is required").positive().integer(),
});

function FormExample({ handleUserInfo }) {
  const [UserData, setUserData] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    handleUserInfo(data);
    setUserData(data);
    const { firstName, lastName, passport, age, email, phone, sex } = data;
    if (
      !firstName ||
      !lastName ||
      !passport ||
      !phone ||
      !email ||
      !sex ||
      isNaN(age) ||
      age <= 0
    ) {
      toast.error("Please fill out all the fields correctly.");
    } else {
      toast.success("Form submitted successfully!");
      navigate("/userList");
    }
  };

  return (
    <Form className="form-input" noValidate onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form-header">Welcome to our website</h1>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label className="input-title">First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First name"
            {...register("firstName")}
          />
          {errors.firstName && (
            <span className="error">{errors.firstName.message}</span>
          )}
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last name"
            {...register("lastName")}
          />
          {errors.lastName && (
            <span className="error">{errors.lastName.message}</span>
          )}
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom07">
          <Form.Label>State</Form.Label>
          <Form.Select
            placeholder="Select your state"
            as="select"
            {...register("state")}
            aria-label="Default select example"
          >
            <option value="">*Select your state*</option>
            <option value="Tehran">Tehran</option>
            <option value="Mazandaran">Mazandaran</option>
            <option value="Khorasan">Khorasan</option>
            <option value="Fars">Fars</option>
            <option value="Sistan">Sistan</option>
            <option value="Khozestan">Khozestan</option>
          </Form.Select>
          {errors.state && (
            <span className="error">{errors.state.message}</span>
          )}
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Passport number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Passport number"
            {...register("passport")}
          />
          {errors.passport && (
            <span className="error">{errors.passport.message}</span>
          )}
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom06">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email")}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Age" {...register("age")} />
          {errors.age && <span className="error">{errors.age.message}</span>}
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom06">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone number"
            {...register("phone")}
          />
          {errors.phone && (
            <span className="error">{errors.phone.message}</span>
          )}
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Sex</Form.Label>
          <div>
            <Form.Check
              type="radio"
              label="Male"
              name="sex"
              value="male"
              {...register("sex")}
            />
            <Form.Check
              type="radio"
              label="Female"
              name="sex"
              value="female"
              {...register("sex")}
            />
          </div>
          {errors.sex && <span className="error">{errors.sex.message}</span>}
        </Form.Group>
      </Row>

      <button type="submit" className="button">
        <img src={image} alt="Submit" />
      </button>
      <ToastContainer />
    </Form>
  );
}

export default FormExample;
