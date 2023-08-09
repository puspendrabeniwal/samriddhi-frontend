"use client";

import { Formik } from "formik";

export default function Contact() {
  return (
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
                firstName: "",
                lastName: "",
                phoneNumber: "",
                email: "",
                message: "",
              }}
              validate={(values) => {
                const errors: any = {};
                if (!values.firstName) {
                  errors.firstName = "Required";
                }
                if (!values.lastName) {
                  errors.lastName = "Required";
                }
                if (!values.phoneNumber) {
                  errors.phoneNumber = "Required";
                } else if (values.phoneNumber.length < 8) {
                  errors.phoneNumber = "At least 8 digits are required";
                }

                if (!values.message) {
                  errors.message = "Required";
                }

                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
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
                          name="firstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                          className="form-control"
                          id="floatingfirstName"
                          placeholder="First Name"
                        />
                        <label htmlFor="floatingfirstName">
                          Fisrt name<span className="text-danger">*</span>
                        </label>
                      </div>
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors.firstName &&
                          touched.firstName &&
                          errors.firstName}
                      </span>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-floating billingForm">
                        <input
                          type="text"
                          name="lastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                          className="form-control"
                          placeholder="Last Name"
                          id="floatingLastName"
                        />
                        <label htmlFor="floatingLastName">
                          Last name<span className="text-danger">*</span>
                        </label>
                      </div>
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors.lastName && touched.lastName && errors.lastName}
                      </span>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-floating billingForm">
                        <input
                          type="text"
                          name="phoneNumber"
                          maxLength={12}
                          onChange={(e) => {
                            const regex = /^[0-9\b]+$/;
                            if (
                              e.currentTarget.value === "" ||
                              regex.test(e.currentTarget.value)
                            ) {
                              setFieldValue(
                                "phoneNumber",
                                e.currentTarget.value
                              );
                            }
                          }}
                          onBlur={handleBlur}
                          value={values.phoneNumber}
                          className="form-control"
                          placeholder="Phone Number"
                          id="floatingNumber"
                        />
                        <label htmlFor="floatingNumber">
                          Phone number<span className="text-danger">*</span>
                        </label>
                      </div>
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors.phoneNumber &&
                          touched.phoneNumber &&
                          errors.phoneNumber}
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
  );
}
