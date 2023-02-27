import * as Yup from "yup";

const nameRegexp = /^[A-Za-z0-9-`']*$/;
const passRegExp = /^[A-Za-z0-9-`']*$/;
export const signupSchema = Yup.object()
  .shape({
    username: Yup.string()
      .min(5, "Too Short, username must contain not less then 5 symbols!")
      .max(15, "Too Long, username must contain not more then 15 symbols!")
      .matches(nameRegexp, "username must contain only letters and numbers")
      .required("required"),
    password: Yup.string()
      .min(5, "Too Short, password must contain not less then 5 symbols!")
      .max(20, "Too Long, password must contain not more then 20 symbols!")
      .matches(passRegExp, "Password must includes only letters and numbers")
      .required("required"),
  })
  .required();
