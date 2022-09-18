import Validator from "validator";

export const loginErrors = ({...values}) => {
  let error = {};
  if (values?.username === "") error.username = "Please enter Username";
  if (!Validator.isStrongPassword(values?.password))
    error.password = "Password is Invalid";
    // if (!Validator?.isEmail(values?.username)) error.username = "Your email is Invalid";
  return error;
};
