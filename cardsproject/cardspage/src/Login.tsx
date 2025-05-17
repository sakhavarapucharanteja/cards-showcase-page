import React, { useEffect } from "react";
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

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Login: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("userData") !== null;
    if(isLoggedIn){
      navigate("/imgmediacard");
    }
  },[])

  const handleLogin = (values: { email: string; password: string }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u: any) => u.email === values.email && u.password === values.password
    );

    if (user) {
      alert("Login successful!");
      localStorage.setItem("userData", 'loggedIn');
      navigate("/imgmediacard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "2rem auto", padding: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
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
                  variant="outlined"
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
                  variant="outlined"
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default Login;
