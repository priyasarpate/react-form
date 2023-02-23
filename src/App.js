import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      select: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(25, "Must be 25 charecters or less")
        .required("Required"),
      email: Yup.string().max(20, "Invalid email address").required("Required"),
      phone: Yup.number().max(10, "Must be 10 digits").required("Required"),
      message: Yup.string()
        .max(200, "Must be 200 characters or less")
        .required("Required"),
        select: Yup.string()
        .max("Select One")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.errors);
  return (
    <div className="container_contact">
      <div className="heading_container">
        <p className="lets_talk">Lets talk</p>
        <p className="main_heading">Lets talk about your projects.</p>
        <p className="sub_heading">
          Do you have a project that you would like to discuss? Or just want to
          say hello? Drop us a line and we will get back to you as soon as we
          can!
        </p>
      </div>
      <div className="contact_form">
        <p className="contact_heading">Hello!</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="input_box">
            <label className="label">Full name*</label>
            <input
              id="name"
              name="name"
              type="text"
              className="input"
              placeholder="Dusti bun"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="errors">{formik.errors.name}</p>
            ) : null}
          </div>
          <div className="input_box">
            <label className="label">Email*</label>
            <input
              id="email"
              name="email"
              type="email"
              className="input"
              placeholder="test@gmail.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="errors">{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="input_box">
            <label className="label">Phone*</label>
            <input
              id="phone"
              name="phone"
              type="number"
              className="input"
              placeholder="+99 11111111"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <p className="errors">{formik.errors.phone}</p>
            ) : null}
          </div>

          <div className="input_box">
            <label className="label">Services*</label>
            <select
              name="select"
              id="select"
              className="input-select"
              placeholder="Select"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.select}
            >
              <option >Building a product</option>
              <option >Building a custom solution</option>
              <option >Technical support services</option>
              <option >Career oppertunity</option>
              <option >Anything else</option>
            </select>
            {formik.touched.select && formik.errors.select ? (
              <p className="errors">{formik.errors.select}</p>
            ) : null}
          </div>

          <div className="input_box">
            <label className="label">How may we help you?*</label>
            <textarea
              id="message"
              name="message"
              type="text"
              className="textarea"
              placeholder="Type your message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.messsage}
            />
            {formik.touched.message && formik.errors.message ? (
              <p className="errors">{formik.errors.message}</p>
            ) : null}
          </div>
          <div className="submit_container">
            <button type="submit" className="submit_button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
