"use client";
import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Formik, FormikHelpers, FormikValues } from "formik";


export default function Checkout({ params  }: { params : { id: string } }) {
  let productKeys = {
    "full_image_path" : "", 
    "product_name" : "", 
    "price":"",
    "discount_price":"",
    "discount_percentage":"",
    "description":""
  }
  const [productDetail, setProductDetail] = useState(productKeys);
  useEffect(() => {
    getProductDetail();
  }, []);



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
    } catch (error) {
      helper.setSubmitting(false);
      console.log(error);
    }
  }

  const getProductDetail = async () => {
    await axios
      .get("https://samriddhi-frame-z0nw.onrender.com/api/product/"+params.id)
      .then(
        (res) => {
          let productDeta = (res.data.result) ? res.data.result : {};
          setProductDetail(productDeta);
        },
        (err) => {
          console.log(err);
        }
      );
  };
  return (
    <main>
        <section className="py-md-5 py-3 bg-lightYellow">
            <div className="container">
                <div className="row">
                <Formik
                    initialValues={{
                        first_name: "",
                        // last_name: "",
                        // email: "",
                        // phone: "",
                        // address_line_1: "",
                        // address_line_2: "",
                        // state: "",
                        // city:"",
                        // pincode :""
                    }}
                    validate={(values) => {
                        console.log(values,"values")
                        const errors: any = {};
                        if (!values.first_name) errors.name = "Name cannot be blank";
                            
                        
                        // if (!values.city) {
                        // errors.city = "City cannot be blank";
                        // }
                        // if (!values.phone) {
                        // errors.phone = "Phone number cannot be blank";
                        // } else if (values.phone.length < 8) {
                        // errors.phone = "At least 8 digits are required";
                        // }

                        // if (!values.message) {
                        // errors.message = "Name cannot be blank";
                        // }

                        // if (!values.email) {
                        // errors.email = "Email cannot be blank";
                        // } else if (
                        // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        // ) {
                        // errors.email = "Invalid email address";
                        // }
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
                            <div className="col-lg-8">
                                <h1 className="billingHeading">Billing Details</h1>
                                
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-floating billingForm">
                                            <input 
                                                name="first_name" 
                                                type="text" 
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.first_name}
                                                className="form-control" 
                                                id="floatingInput"
                                            />
                                            <label htmlFor="floatingInput">Fisrt name<span className="text-danger">*</span></label>
                                        </div>
                                        <span style={{ color: "red", fontSize: "12px" }}>test
                                            {errors.first_name}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 ps-lg-5 mt-5 mt-lg-0">
                                {/* <div className="OrderSummary">
                                    <h5>Order Summary</h5>
                                    <hr />
                                    <ul className="list-unstyled">
                                        <li>Base Total <span>₹ {productDetail?.discount_price}</span></li>
                                        <li>Delivery Charge <span>₹ 50</span></li>
                                    </ul>
                                    <hr />
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="">Grand Total</h5>
                                        <h4>₹ {productDetail?.discount_price+50}</h4>
                                    </div>
                                </div> */}
                                <button 
                                    type="submit" 
                                    className="btn btn-yellow btn-lg w-100 mt-4"
                                    disabled={isSubmitting}
                                >Pay Now</button>
                            </div>
                        </form>
                    )}
                </Formik>
                </div>
            </div>
        </section>
    </main>
  );
}
