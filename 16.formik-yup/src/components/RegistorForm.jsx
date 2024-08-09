import React from "react";
import { useFormik } from "formik";
import { registorFromSchemas } from "../schemas/RegistorFormSchemas";


const submit = (values,action) => {
    setTimeout(()=>{
        action.resetForm();
    },2000)

}



function RegistorForm() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
    validationSchema : registorFromSchemas,
    onSubmit : submit
  });

  return (
    <div>
      <from onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email Giriniz"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Yaş</label>
          <input
            type="number"
            id="age"
            placeholder="Yaşınızı Giriniz"
            value={values.age}
            onChange={handleChange}
          />
           {errors.age && <p>{errors.age}</p>}
        </div>
        <div>
          <label>Şifre</label>
          <input
            type="password"
            id="password"
            placeholder="Lütfen Parolanızı Giriniz"
            value={values.password}
            onChange={handleChange}
          />
           {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label>Şifre Tekrarı</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Lütfen Parolanızı Tekrar Giriniz"
            value={values.confirmPassword}
            onChange={handleChange}
          />
           {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <label>Kullanıcı Sözleşmesini Kabul Ediyorum</label>
        <input
          type="checkbox"
          id="term"
          values={values.term}
          onChange={handleChange}
        />
         {errors.term && <p>{errors.term}</p>}
        <div>
          <button>Kaydet</button>
        </div>
      </from>
    </div>
  );
}

export default RegistorForm;
