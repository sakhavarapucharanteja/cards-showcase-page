import React from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = (values: { email: string; password: string }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = users.some((u: any) => u.email === values.email);
    if (userExists) {
      alert("User with this email already exists!");
      return;
    }

    const updatedUsers = [...users, values];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Sign up successful! You can now log in.");
    navigate("/login");
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "2rem auto", padding: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignUpSchema}
          onSubmit={handleSignUp}
        >
          {({ handleChange, handleBlur, values }) => (
            <Form>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => (
                    <Typography color="error" variant="caption">
                      {msg}
                    </Typography>
                  )}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="password"
                  render={(msg) => (
                    <Typography color="error" variant="caption">
                      {msg}
                    </Typography>
                  )}
                />
              </Box>
              <Button type="submit" variant="contained" fullWidth>
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default SignUp;
