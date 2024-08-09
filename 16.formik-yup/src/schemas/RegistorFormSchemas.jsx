import * as yup from "yup";

export const registorFromSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli email adresi giriniz.")
    .required("email adresi zorunludur"),

  age: yup
    .number("pozitif bir değer giriniz")
    .integer("Tam sayı giriniz")
    .required("yaş alanı zorunludur"),

  password: yup
    .string()
    .required("şifre alanı zorunludur"),

  confirmPassword: yup
    .string()
    .required("şifre alanı zorunludur.")
    .oneOf([yup.ref("password", yup.password)], "şifre eşleşmiyr"),

  term: yup.boolean().required("lütfen kutucuğu onaylayınız."),
});
