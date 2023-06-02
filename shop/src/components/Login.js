import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = ({ page, setUser }) => {
  const Navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("User");
    setUser("");
  }, []);

  return (
    <div className="container container-2">
      <div className="magic-form">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string().email().required("Email boş bırakılamaz"),
            password: Yup.string().required("Şifre boş bırakılamaz"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            let Users =
              JSON.parse(localStorage.getItem("Users")) == undefined
                ? []
                : JSON.parse(localStorage.getItem("Users"));
            if (page == "login") {
              if (
                Users.find(
                  ({ email, password }) =>
                    email === values.email && password === values.password
                ) == undefined
              ) {
                toast.error("Kullanıcı Mevcut Değil !");
              } else {
                let search = Users.find(
                  ({ email, password }) =>
                    email === values.email && password === values.password
                );
                setUser({
                  ...values,

                  admin: search.admin,
                });
                Navigate("/");
                setTimeout(() => {
                  setSubmitting(false);
                  resetForm();
                }, 2000);
                localStorage.setItem(
                  "User",
                  JSON.stringify({
                    ...values,

                    admin: search.admin,
                  })
                );
              }
              console.log(Users);
            } else {
              if (
                Users.find(
                  ({ email, password }) =>
                    email === values.email && password === values.password
                ) == undefined
              ) {
                Users = [...Users, { ...values }];
                localStorage.setItem("Users", JSON.stringify(Users));
                setUser({ ...values, admin: "no" });
                Navigate("/");
                setTimeout(() => {
                  setSubmitting(false);
                  resetForm();
                }, 2000);
                localStorage.setItem(
                  "User",
                  JSON.stringify({ ...values, admin: "no" })
                );
              } else {
                toast.error("Kullanıcı Zaten Mevcut !");
              }
            }
          }}
        >
          {({ values, touched, errors, dirty, handleSubmit, handleChange }) => (
            <form className="magic-form" onSubmit={handleSubmit}>
              {page == "register" ? <h3>Kayıt ol</h3> : <h3>Giriş Yap</h3>}
              <br />
              <input
                id="email"
                type="text"
                placeholder="E-mail"
                className="input"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}

              <input
                id="password"
                type="password"
                placeholder="Şifre"
                className="input"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
              <br />
              <button type="submit" disabled={!dirty}>
                {page == "register" ? "Kayıt Ol" : "Giriş Yap"}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
