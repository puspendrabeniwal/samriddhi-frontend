"use client";

import { useEffect, useState } from "react";
import axios from "axios";
export default function Product() {
  const [productsItems, setproductsItems] = useState([]);
  useEffect(() => {
    getProductList();
  }, []);
  //==== Product list by api =======
  const getProductList = async () => {
    await axios
      .get("https://samriddhi-frame-z0nw.onrender.com/api/products")
      .then(
        (res) => {
          const dt = res.data.result;
          setproductsItems(dt);
          console.log("response", dt);
        },
        (err) => {
          console.log(err);
        }
      );
  };
  return (
    <main>
      <section className="defaultPaddingTB bg-lightYellow">
        <div className="container">
          <div className="col-xl-10 col-lg-11 mx-auto">
            <h2 className="KumbhSans-Bold">Our Product</h2>

            <div className="row">
              <div className="col-lg-4 Our_Product mt-3">
                <div className="bg-white text-center p-3 productImg">
                  <iframe
                    src="https://www.transparentpng.com/download/sri-ganesh/sri-ganesh-png-transparent-images-gold-11.png"
                    className=""
                  ></iframe>
                </div>
                <div className="mt-3">
                  {/* {productsItems !== undefined &&
                 productsItems?.map((item)=>( */}
                  <div className="ps-xl-3">
                    <h2> Ritual Figurine</h2>

                    <h3 className="KumbhSans-Bold mt-2">
                      <span className="yellow-color">Rs. 3500.00</span>{" "}
                      <del className="ms-3">Rs. 1800.00</del>
                    </h3>
                    <div className="mt-2">
                      <a href="">
                        <i className="fa fa-star ratingStar"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star ratingStar"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star ratingStar"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star ratingStar"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star ratingStar"></i>
                      </a>
                    </div>
                  </div>
                  {/* )):"Data not found"} */}
                </div>
              </div>

              <div className="col-lg-4 Our_Product mt-3">
                <div className="bg-white text-center p-3 productImg">
                  <iframe
                    src="https://www.transparentpng.com/download/sri-ganesh/sri-ganesh-png-transparent-images-gold-11.png"
                    className=""
                  ></iframe>
                </div>

                <div className="mt-3">
                  <div className="ps-xl-3">
                    <h2>Ritual Figurine</h2>

                    <h3 className="KumbhSans-Bold mt-2">
                      <span className="yellow-color">Rs. 3500.00</span>{" "}
                      <del className="ms-3">Rs. 1800.00</del>
                    </h3>
                    <div className="mt-2">
                      <a href="">
                        <i className="fa fa-star ratingStar"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star ratingStar"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star ratingStar"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star ratingStar"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star ratingStar"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 Our_Product mt-3">
                <div className="bg-white text-center p-3 productImg">
                  <iframe
                    src="https://www.transparentpng.com/download/sri-ganesh/sri-ganesh-png-transparent-images-gold-11.png"
                    className=""
                  ></iframe>
                </div>

                <div className="mt-3">
                  <div className="ps-xl-3">
                    <h2>Ritual Figurine</h2>

                    <h3 className="KumbhSans-Bold mt-2">
                      <span className="yellow-color">Rs. 3500.00</span>{" "}
                      <del className="ms-3">Rs. 1800.00</del>
                    </h3>
                    <div className="mt-2">
                      <a href="">
                        <i className="fa fa-star ratingStar"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star ratingStar"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star ratingStar"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star ratingStar"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star ratingStar"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
