import * as Yup from "yup";

const EMAIL_SCHEMA = Yup.string()
  .trim()
  .email("Invalid email address")
  .required();
const PASSWORD_SCHEMA = Yup.string()
  .trim()
  .min(6, "Too Short!")
  .max(20, "Too Long!")
  .required();

export const LOGIN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA
});

export const SIGNUP_SCHEMA = Yup.object({
  firstName: Yup.string().trim().required(),
  lastName: Yup.string().trim().required(),
  displayName: Yup.string().trim().required(),
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  role: Yup.string().oneOf(["buyer", "seller"]).required()
});
