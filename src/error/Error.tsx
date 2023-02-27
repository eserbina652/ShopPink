import React from "react";
import { ErrorText } from "../screens/Registration/styles/loginStyles";

interface IError {
  error: string;
}
const Error = ({ error }: IError) => {
  return (
    <div>
      <ErrorText>{error}</ErrorText>
    </div>
  );
};

export default Error;
