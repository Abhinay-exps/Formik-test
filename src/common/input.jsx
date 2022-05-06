import React from "react";
import { Formik, Form, Field, useField } from "formik";
import { TextField, InputAdornment } from "@material-ui/core";
import { Done } from "@material-ui/icons";
import PropTypes from "prop-types";

//import "./Input.scss";

// Material-ui overides
// https://v4-5-2.material-ui.com/api/input/

const Input = ({ ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      {...field}
      aria-describedby={`This is the ${field.name} input field`}
      variant="outlined"
      error={!!errorText}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {!!errorText && <Done color="secondary" />}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Input;
