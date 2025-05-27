import * as yup from "yup";


export const schemaRegister = yup.object().shape({
    email: yup.string().email("Email is invalid!").required("Email cannot be empty!"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters!")
      .required("Password cannot be empty!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Passwords should be match!"),
  })

export const schemaLogin = yup.object().shape({
  email:yup.string().email("Email is invalid!").required("Email cannot be empty!"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters!")
    .required("Password cannot be empty!"),
})

