import * as yup from "yup";


export const schemaRegister = yup.object().shape({
    email: yup.string().email("Email is invalid!").required("Email cannot be empty!"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters!")
      .required("Password cannot be empty!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Passwords should be match!"),
  })

