import React from "react";
import { Formik, Form, Field, useField } from "formik";
import { TextField, InputAdornment } from "@material-ui/core";
import Input from "../common/input";
import { Done } from "@material-ui/icons";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    ></TextField>
  );
};
const AddForm = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ values }) => (
        <Form>
          <Input id="firstName" name="firstName"></Input>
          <Input id="lastName" name="lastName" />
          <Input id="email" name="email" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default AddForm;
