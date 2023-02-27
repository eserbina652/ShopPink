import React, { useEffect } from "react";
import AuthApi from "../api/usersApi/usersApi";
import { Formik, FormikHelpers } from "formik";
import { signupSchema } from "../validation/validation";
import Error from "../error/Error";

import {
  Form,
  Inputs,
  LoginWrapper,
  RegistrationsButton,
} from "../screens/Registration/styles/loginStyles";
import { useDispatch } from "react-redux";
import { onLogin } from "../store/reducers/auth";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";
import { ILoginForm } from "../ entities/auth/interfase";
import { AllPagesWrapper } from "../appStyles";

export const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async (
    value: ILoginForm,
    helpers: FormikHelpers<ILoginForm>
  ) => {
    const user = await AuthApi.login({
      username: value.username,
      password: value.password,
    });
    if (user.token) {
      console.log("Info from login", user);
      dispatch(onLogin(user));
      navigate("/home");
      localStorage.setItem("userToken", JSON.stringify(user.token));
      localStorage.setItem("userId", JSON.stringify(user.id));
    } else {
      helpers.setErrors({ username: "ERRR", password: "ERRR" });
    }
  };
  useEffect(() => {
    const user = localStorage.getItem("userId");
    if (user) {
      navigate("/home");
    }
  }, []);
  return (
    <LoginWrapper>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={signupSchema}
        onSubmit={(values, formikHelpers) => {
          void login(values, formikHelpers);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <Inputs
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
                className="form-input"
                name="username"
                placeholder="Write your name"
              />
              {errors?.username && <Error error={errors.username} />}
            </div>
            <div>
              <Inputs
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                className="form-input"
                name="password"
                placeholder="Write your password"
              />
              {errors?.password && <Error error={errors.password} />}
            </div>
            <RegistrationsButton
              id="signIn"
              isRegistration={true}
              onSubmit={() => {
                handleSubmit();
              }}
              type="submit"
              disabled={!!errors.password || !!errors.username}
            >
              Sign In
            </RegistrationsButton>
          </Form>
        )}
      </Formik>
    </LoginWrapper>
  );
};
