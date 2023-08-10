"use client";
import React, { useRef } from "react";
import axios from "axios";
import { Formik, FormikHelpers, FormikValues, useFormik } from "formik";
import { Toast } from "primereact/toast";

export default function Contact() {
  const toast = useRef(null);
  async function handleSubmit(
    values: FormikValues,
    helper: FormikHelpers<FormikValues>
  ) {
    helper.setSubmitting(true);
    try {
      const response = await axios.post(
        "https://samriddhi-frame-z0nw.onrender.com/api/contact_us",
        values
      );
      helper.setSubmitting(false);
      helper.resetForm();
      showSuccess();
    } catch (error) {
      helper.setSubmitting(false);
      console.log(error);
    }
  }
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Detail has been successfully update",
      life: 3000,
    });
  };

  return (
    <>
      <Toast ref={toast} />
      <main>
        <div className="productBannerTop">
          <h1>Contact Us</h1>
        </div>

        <section className="defaultPaddingTB">
          <div className="container">
            <div className="col-xl-10 col-lg-11 mx-auto">
              <div className="row">
                <div className="col-lg-4 text-center mb-4 mb-lg-0">
                  <img src="image/PhoneNumber.png" alt="" />
                  <h4 className="mt-lg-3 KumbhSans-Bold">Phone Number</h4>
                  <h6 className="mt-2 KumbhSans-Light">+91 1234567890</h6>
                  <h6 className="mt-2 KumbhSans-Light">+91 1234567890</h6>
                </div>

                <div className="col-lg-4 text-center mb-4 mb-lg-0">
                  <img src="image/PhoneNumber.png" alt="" />
                  <h4 className="mt-lg-3 KumbhSans-Bold">Address</h4>
                  <h6 className="mt-2 KumbhSans-Light">
                    176 W street name, Area bane, State name 1001425
                  </h6>
                </div>

                <div className="col-lg-4 text-center">
                  <img src="image/PhoneNumber.png" alt="" />
                  <h4 className="mt-lg-3 KumbhSans-Bold">Email Address</h4>
                  <h6 className="mt-2 KumbhSans-Light">contact@frames.com</h6>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-3 p-lg-0">
          <div className="row mx-lg-0">
            <div className="col-lg-6 px-0 px-lg-0 mb-lg-0">
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                  className="googleMap"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-6 p-lg-5 py-5 contactUsSection">
              <h6 className="KumbhSans-Regular mb-3">CONTACT US</h6>
              <h1 className="">
                Have Questions? <br />
                Get in Touch!
              </h1>
              <Formik
                initialValues={{
                  name: "",
                  city: "",
                  phone: "",
                  email: "",
                  message: "",
                }}
                validate={(values) => {
                  const errors: any = {};
                  if (!values.name) {
                    errors.name = "Name cannot be blank";
                  }
                  if (!values.city) {
                    errors.city = "City cannot be blank";
                  }
                  if (!values.phone) {
                    errors.phone = "Phone number cannot be blank";
                  } else if (values.phone.length < 8) {
                    errors.phone = "At least 8 digits are required";
                  }

                  if (!values.message) {
                    errors.message = "Name cannot be blank";
                  }

                  if (!values.email) {
                    errors.email = "Email cannot be blank";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={(values, helper) => {
                  handleSubmit(values, helper);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  setFieldValue,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-floating billingForm">
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            className="form-control"
                            id="floatingname"
                            placeholder="First Name"
                          />
                          <label htmlFor="floatingname">
                            Name<span className="text-danger">*</span>
                          </label>
                        </div>
                        <span style={{ color: "red", fontSize: "12px" }}>
                          {errors.name && touched.name && errors.name}
                        </span>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-floating billingForm">
                          <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            className="form-control"
                            placeholder="Email"
                            id="floatingemail"
                          />
                          <label htmlFor="floatingemail">
                            Email address<span className="text-danger">*</span>
                          </label>
                        </div>
                        <span style={{ color: "red", fontSize: "12px" }}>
                          {errors.email && touched.email && errors.email}
                        </span>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-floating billingForm">
                          <input
                            type="text"
                            name="phone"
                            maxLength={12}
                            onChange={(e) => {
                              const regex = /^[0-9\b]+$/;
                              if (
                                e.currentTarget.value === "" ||
                                regex.test(e.currentTarget.value)
                              ) {
                                setFieldValue("phone", e.currentTarget.value);
                              }
                            }}
                            onBlur={handleBlur}
                            value={values.phone}
                            className="form-control"
                            placeholder="Phone Number"
                            id="floatingNumber"
                          />
                          <label htmlFor="floatingNumber">
                            Phone number<span className="text-danger">*</span>
                          </label>
                        </div>
                        <span style={{ color: "red", fontSize: "12px" }}>
                          {errors.phone && touched.phone && errors.phone}
                        </span>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-floating billingForm">
                          <input
                            type="text"
                            name="city"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.city}
                            className="form-control"
                            placeholder="Last Name"
                            id="floatingcity"
                          />
                          <label htmlFor="floatingcity">
                            City<span className="text-danger">*</span>
                          </label>
                        </div>
                        <span style={{ color: "red", fontSize: "12px" }}>
                          {errors.city && touched.city && errors.city}
                        </span>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-floating billingForm">
                          <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea2"
                            name="message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                          ></textarea>
                          <label htmlFor="floatingTextarea2">
                            Messege<span className="text-danger">*</span>
                          </label>
                        </div>
                        <span style={{ color: "red", fontSize: "12px" }}>
                          {errors.message && touched.message && errors.message}
                        </span>
                      </div>
                    </div>

                    <button
                      className="btn btn-yellow px-5 mt-4"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Send
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </section>

        <section className="makeAStrong">
          <div className="container">
            <div className="col-lg-10 text-center mx-auto">
              <h1>Lorem Ipsum is simply dummy text of the printing</h1>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
