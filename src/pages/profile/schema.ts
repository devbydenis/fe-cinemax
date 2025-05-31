import * as yup from "yup";

export const schemaEditProfile = yup.object().shape({
  firstName: yup.string().required("First name cannot be empty!"),
  lastName: yup.string().required("Last name cannot be empty!"),
  email: yup
    .string()
    .email("Email is invalid!")
    .required("Email cannot be empty!"),
  phoneNumber: yup.string().required("Phone number cannot be empty!"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters!")
    .required("Password cannot be empty!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords should be match!"),
});
