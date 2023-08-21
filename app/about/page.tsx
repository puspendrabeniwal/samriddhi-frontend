"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AppConstants } from "../constants/constants";
import axiosInstance from "../apiData/page";
export default function About() {
  const [aboutData, setAboutData] = useState({});
  const [loaderData, setLoaderData] = useState(true);
  useEffect(() => {
    getAboutBlock();
  }, []);
  //==== about page list by api =======
  const getAboutBlock = async () => {
    try {
      const response = await axiosInstance.get("/block/about-us");
      const data = response.data.result;

      setAboutData(data);
      setLoaderData(false);
    } catch (error) {
      // Handle the error
    }
  };

  return (
    <main>
      <div className="aboutusBanner">
        <div className="text-center position-relative">
          <h1>About US</h1>
          <p>
            Welcome to Samriddhi Frames, your destination for harnessing the{" "}
            <br /> power of the Pomegranate Tree image for prosperity and
            growth.
          </p>
        </div>
      </div>
      {loaderData ? (
        <div>Loading Data</div>
      ) : (
        <div>
          <section className="defaultPaddingTB">
            <div className="container">
              <div className="row OurStory">
                <div className="col-lg-6 col-md-6 position-relative text-lg-start text-center">
                  <img
                    className="ourStroyEfter"
                    src="image/img/OurMissionEfter.png"
                    alt=""
                  />
                  <img
                    className="position-relative"
                    src="image/img/Our-Story.png"
                    alt=""
                  />
                </div>
                {/*-------------------------- Our Story Section-------------- */}
                <div className="col-lg-6 col-md-6 OurStorySection">
                  <h1>{aboutData["64d1ea9a2918961c14d405f1"].title}</h1>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: aboutData["64d1ea9a2918961c14d405f1"].body,
                    }}
                  ></p>
                </div>
                {/* ----------------------------OUr Mission---------------------- */}
                <div className="col-lg-6 col-md-6 ourMissionImg order-md-last">
                  <img src="image/img/OurMission.png" alt="" />
                </div>
                <div className="col-lg-6 col-md-6 ourMission">
                  <h1>{aboutData["64d36125be51504684a26737"].title}</h1>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: aboutData["64d36125be51504684a26737"].body,
                    }}
                  ></p>
                </div>
              </div>
            </div>
          </section>
          {/*---------------------------------------------------------- Why Choose Us---------------------------------------------- */}
          <section className="defaultPaddingTB WhyChooseUs">
            <div className="container ">
              <div className="text-center WhyChooseUsSection">
                <img src="image/img/whyusLogo.png" alt="" />
                <h1 className="mt-2">
                  {aboutData["64ddc1873fea667a7c571ccd"].title}{" "}
                </h1>
              </div>
              <div className="row ">
                {/* ------------------Authenticity--------------- */}
                <div className="col-lg-3 col-md-6 mt-4 d-flex">
                  <div className="WhyChooseUsCard">
                    <img src="image/img/Authenticity.png" alt="" />
                    <h3> {aboutData["64ddd2023fea667a7c571ccf"].title}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: aboutData["64ddd2023fea667a7c571ccf"].body,
                      }}
                    ></p>
                  </div>
                </div>
                {/* ------------------Quality--------------- */}
                <div className="col-lg-3 col-md-6 mt-4 d-flex">
                  <div className="WhyChooseUsCard">
                    <img src="image/img/Quality.png" alt="" />
                    <h3> {aboutData["64ddd2523fea667a7c571cd0"].title}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: aboutData["64ddd2523fea667a7c571cd0"].body,
                      }}
                    ></p>
                  </div>
                </div>
                {/* ------------------Positive Impact--------------- */}
                <div className="col-lg-3 col-md-6 mt-4 d-flex">
                  <div className="WhyChooseUsCard">
                    <img src="image/img/PositiveImpact.png" alt="" />
                    <h3> {aboutData["64ddd26c3fea667a7c571cd1"].title}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: aboutData["64ddd26c3fea667a7c571cd1"].body,
                      }}
                    ></p>
                  </div>
                </div>
                {/* ------------Customer-Centric Approach----------- */}
                <div className="col-lg-3 col-md-6 mt-4 d-flex">
                  <div className="WhyChooseUsCard">
                    <img src="image/img/CustomerCentricApproach.png" alt="" />
                    <h3> {aboutData["64ddd2a43fea667a7c571cd2"].title}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: aboutData["64ddd2a43fea667a7c571cd2"].body,
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="defaultPaddingTB">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 OurPromise position-relative mb-4 mb-lg-0">
                  <img src="image/img/OurMission.png" alt="" />
                  <div className="Our_PromiseOverlay">
                    <h1>Welcome Prosperity into your life!</h1>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 OurStory">
                  {/* ------------------Our Promise ------------------------*/}
                  <div className="mb-5">
                    <h1>{aboutData["64ddc1873fea667a7c571ccd"].title}</h1>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: aboutData["64ddc1873fea667a7c571ccd"].body,
                      }}
                    ></p>
                  </div>
                  {/*---------------- Join Us in this Journey ------------------*/}
                  <div>
                    <h1>{aboutData["64ddc1c83fea667a7c571cce"].title}</h1>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: aboutData["64ddc1c83fea667a7c571cce"].body,
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*---------------- Contact Us ------------------*/}
          <section className="contactUsBottom">
            <div className="container">
              <div className="col-lg-10 text-center mx-auto position-relative">
                <h1>Contact Us</h1>
                <p>
                  For any inquiries or assistance, feel free to reach out to our
                  dedicated customer <br /> support team at
                  support@samriddhiframes.com.
                </p>

                <h5>
                  Thank you for choosing Samriddhi Frames. <br /> Let's prosper
                  together!
                </h5>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
