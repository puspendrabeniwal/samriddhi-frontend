import Link from 'next/link';
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main>
      <section className="HometopBg pb-5" >
        <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-6 order-lg-last mb-4 mb-lg-0">
                <img className="w-100" src="image/demoImg1.png" alt="" />
              </div>
              <div className="col-lg-6">
                <div className="">
                    <h1> Welcome Prosperity into your life!</h1>
                    <p>
                    Place the pomegranate tree image in your home or office and it will attract prosperous environment into your life.
                    </p>
                </div>
                <div className="mt-4">
                    <Link href="/product" className="btn btn-yellow">
                      Buy Now
                    </Link>
                </div>
              </div>
          </div>
        </div>
      </section>
      <section className="PrayersTemple defaultPaddingTB">
        <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="">
                    <img className="w-100" src="image/2nd-Image.png" alt="" />
                    
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ps-xl-3">
                    <h1>Are you also facing slow business growth?</h1>
                    <p className="">
                        Are you fed up with seeing your business 
                        growth stuck at one point? Do you feel 
                        frustrated with the slow progress of 
                        your ventures? It's time to break free from this stagnant situation and inspire new life into your business!
                    </p>
                    <p className="">
                    Welcome the magical pomegranate tree Samriddhi 
                    Frame - a symbol of prosperity that opens your 
                    business's full potential. Watch your ventures 
                    flourish like never before with this attractive 
                    frame! Say goodbye to the usual routine and
                     welcome a thriving future with the enchanting 
                     allure of the pomegranate tree. 
                    Your journey to success begins now!
                    </p>

                </div>
              </div>
          </div>
        </div>
      </section>
      <section className="BenefitsSection">
      <div className="container">
         <div className="row align-items-center">
            <div className="col-lg-7 pe-xl-5 ">
               <div className="benefits_CardM">
                  <h1 className="px-3 px-lg-0">Experience Abundance<br />
                  with Samridhi Frames
                  </h1>
                  <div className="benefitsCard">
                     <div>
                        <h3>1. Prosperity Visualization
                        </h3>
                        <p className="">
                        The pomegranate tree image serves as a powerful visualization tool, manifesting prosperity and abundance into your business endeavors.
                        </p>
                     </div>
                  </div>
                  <div className="benefitsCard">
                     <div>
                        <h3>2. Magnetic Attraction</h3>
                        <p className="">
                        Attract clients and customers like never before, magnetized by the captivating aura of the pomegranate tree image.
                        </p>
                     </div>
                  </div>
                  <div className="benefitsCard">
                     <div>
                        <h3>3. Mindset Transformation
                        </h3>
                        <p className=''>
                        Experience a paradigm shift in your business mindset for achievement and prosperity.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-5 my-4 my-lg-0 ps-xl-3">
               <div className="swiper BenefitsSlider">
                  <div className="swiper-wrapper">
                     <div className="swiper-slide">
                        <img className="" src="image/c.png" alt=""/>
                     </div>
                     <div className="swiper-slide">
                        <img className="" src="image/c.png" alt=""/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </section>
      <section className="userAreSaying defaultPaddingTB">
          <div className="container">
            <div className="CustomersSayingText text-center">
                <h1>What Our Customers Saying
                </h1>
                <p>
                Discover the profound impact of spiritual frames and join the many satisfied customers who have found spiritual solace and inspiration through the <br />Samriddhi Frames.
                  
                </p>
            </div>


            <div className="swiper CustomersSaying mt-4 pt-1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                      <div className="">
                        <img className="customerUserProfile" src="image/demoImg1.png" alt=""/>
                      </div>

                      <p className="">It was the best tour ever! I got a lot of impressions of beautiful places and breathtaking
                        views.
                      </p>
                      <h3>Liam Gordon</h3>
                      <h6 className="">
                        Austin, TX
                      </h6>
                  </div>

                  <div className="swiper-slide">
                      <div className="">
                        <img className="customerUserProfile" src="image/demoImg1.png" alt="" />
                      </div>

                      <p className="">It was the best tour ever! I got a lot of impressions of beautiful places and breathtaking
                        views.
                      </p>
                      <h3>Liam Gordon</h3>
                      <h6 className="">
                        Austin, TX
                      </h6>
                  </div>


                  <div className="swiper-slide">
                      <div className="">
                        <img className="customerUserProfile" src="image/demoImg1.png" alt=""/>
                      </div>

                      <p className="">It was the best tour ever! I got a lot of impressions of beautiful places and breathtaking
                        views.
                      </p>
                      <h3>Liam Gordon</h3>
                      <h6 className="">
                        Austin, TX
                      </h6>
                  </div>

                  <div className="swiper-slide">
                      <div className="">
                        <img className="customerUserProfile" src="image/demoImg1.png" alt=""/>
                      </div>

                      <p className="">It was the best tour ever! I got a lot of impressions of beautiful places and breathtaking
                        views.
                      </p>
                      <h3>Liam Gordon</h3>
                      <h6 className="">
                        Austin, TX
                      </h6>
                  </div>

                </div>
            </div>
          </div>
      </section>
      <section className="marqueeNew">
          <Marquee scroll-amount="22">
            <ul className="">
                <li>Explore Our Smart Business Cards <img src="image/play-com.png" alt=""/></li>
                <li>Explore Our Smart Business Cards</li>
                <li>Explore Our Smart Business Cards</li>
            </ul>
          </Marquee>
      </section>

      <section className="OurProductSection defaultPaddingTB">
      <div className="container">
         <div className="CustomersSayingText text-center">
            <h1>Our Product in different sizes</h1>
            <p>
            Samridhi frames offer Quality frames, diverse styles, satisfaction guarantee, and wide range of sizes.
            </p>
         </div>

         <div className="col-xl-10 col-lg-11 mx-auto">
            <div className="swiper OurProduct_Slider mt-4 pt-1">
               <div className="swiper-wrapper">
                  <div className="swiper-slide Our_Product">

                     <div className="bg-white text-center p-3 productImg">
                        <img className=""
                           src="https://www.transparentpng.com/download/sri-ganesh/sri-ganesh-png-transparent-images-gold-11.png"
                           alt=""/>
                     </div>
                     <div className="mt-3">
                        <div className="ps-xl-3">
                           <h2>Ritual Figurine1
                           </h2>

                           <h3 className="KumbhSans-Bold mt-2"><span className="yellow-color">Rs. 3500.00</span> <del
                                 className="ms-3">Rs.
                                 1800.00</del></h3>
                           <div className="mt-2">
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                           </div>

                        </div>
                     </div>
                  </div>

                  <div className="swiper-slide Our_Product">

                     <div className="bg-white text-center p-3 productImg">
                        <img className=""
                           src="https://www.transparentpng.com/download/sri-ganesh/sri-ganesh-png-transparent-images-gold-11.png"
                           alt=""/>
                     </div>
                     <div className="mt-3">
                        <div className="ps-xl-3">
                           <h2>Ritual Figurine12
                           </h2>

                           <h3 className="KumbhSans-Bold mt-2"><span className="yellow-color">Rs. 3500.00</span> <del
                                 className="ms-3">Rs.
                                 1800.00</del></h3>
                           <div className="mt-2">
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                           </div>

                        </div>
                     </div>
                  </div>


                  <div className="swiper-slide Our_Product">

                     <div className="bg-white text-center p-3 productImg">
                        <img className=""
                           src="https://www.transparentpng.com/download/sri-ganesh/sri-ganesh-png-transparent-images-gold-11.png"
                           alt=""/>
                     </div>

                     <div className="mt-3">
                        <div className="ps-xl-3">
                           <h2>Ritual Figurine
                           </h2>

                           <h3 className="KumbhSans-Bold mt-2"><span className="yellow-color">Rs. 3500.00</span> <del
                                 className="ms-3">Rs.
                                 1800.00</del></h3>
                           <div className="mt-2">
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                           </div>

                        </div>
                     </div>
                  </div>


                  <div className="swiper-slide Our_Product">

                     <div className="bg-white text-center p-3 productImg">
                        <img className=""
                           src="https://www.transparentpng.com/download/sri-ganesh/sri-ganesh-png-transparent-images-gold-11.png"
                           alt=""/>
                     </div>

                     <div className="mt-3">
                        <div className="ps-xl-3">
                           <h2>Ritual Figurine
                           </h2>

                           <h3 className="KumbhSans-Bold mt-2"><span className="yellow-color">Rs. 3500.00</span> <del
                                 className="ms-3">Rs.
                                 1800.00</del></h3>
                           <div className="mt-1">
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                           </div>

                        </div>
                     </div>
                  </div>


                  <div className="swiper-slide Our_Product">

                     <div className="bg-white text-center p-3 productImg">
                        <img className=""
                           src="https://www.transparentpng.com/download/sri-ganesh/sri-ganesh-png-transparent-images-gold-11.png"
                           alt=""/>
                     </div>

                     <div className="mt-3">
                        <div className="ps-xl-3">
                           <h2>Ritual Figurine
                           </h2>

                           <h3 className="KumbhSans-Bold mt-2"><span className="yellow-color">Rs. 3500.00</span> <del
                                 className="ms-3">Rs.
                                 1800.00</del></h3>
                           <div className="mt-2">
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                              <a href=""><i className="fa fa-star ratingStar"></i></a>
                           </div>

                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>

      </div>
   </section>
   <section className="pb-5">
      <div className="container">
         <div className="row align-items-center whySamridhiFrames">
            <div className="col-lg-6 order-lg-last mb-4 mb-lg-0">
               <div className="whySamridhiFramesimgOveraly">
                  <img className="w-100" src="../image/s-m.png" alt="" />
               </div>
            </div>
            <div className="col-lg-6">
               <div className="">
                  <h1>Why Samridhi Frames
                     is the Best
                  </h1>
                  <p>
                  The pomegranate tree image consists of 108 powerful bhagwad geeta mantras, which further enhances its energy and impact.

                  </p>
                  <p>
                  Business mantras from the Bhagavad Gita can have a profound and positive effect on individuals engaged in business and entrepreneurship.

                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>

   <section className="frequeltyAsked defaultPaddingTB">
      <div className="container">
         <h1>Frequltly Asked Questions</h1>
         <div className="col-lg-10 mx-auto mt-md-4">
            <div className="accordion" id="accordionExample">
               <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                     <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <span className="frequltyNumber">1.</span>How can a pomegranate tree image benefit my business?
                     </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                     data-bs-parent="#accordionExample">
                     <div className="accordion-body">
                        <div className="row align-items-center">
                           <div className="col-lg-12">
                              <p className="mb-3">The pomegranate tree image symbolizes prosperity and abundance, creating a positive ambiance that can attract success, stimulate creativity, and enhance productivity in your business.
                              </p>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
               <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <span className="frequltyNumber">2.</span> Will this image increase my financial gains?
                     </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                     data-bs-parent="#accordionExample">
                     <div className="accordion-body">
                        <div className="row align-items-center">
                           <div className="col-lg-12">
                              <p className="mb-3">Yes, embracing the pomegranate
                               tree image can help amplify financial prosperity, attracting 
                              opportunities and clients to boost your business growth.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <span className="frequltyNumber">3.</span> Can the pomegranate tree image improve team collaboration?
                     </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                     data-bs-parent="#accordionExample">
                     <div className="accordion-body">
                        <div className="row align-items-center">
                           <div className="col-lg-12">
                              <p className="mb-3">Absolutely! The image's symbolism of unity and harmony can foster a sense of teamwork among your associates, encouraging collaboration and cooperation.
                              </p>

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <span className="frequltyNumber">3.</span> How will this image affect decision-making in my business?
                     </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                     data-bs-parent="#accordionExample">
                     <div className="accordion-body">
                        <div className="row align-items-center">
                           <div className="col-lg-12">
                              <p className="mb-3">
                              By embracing the pomegranate tree image, you can gain clarity and wisdom in your decision-making process, helping you make informed choices for your business strategies.
                              </p>

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="accordion-item">
   <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
         data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
         <span className="frequltyNumber">5.</span> Is there a specific place where I should display the image for maximum impact?
      </button>
   </h2>
   <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFour"
      data-bs-parent="#accordionExample">
      <div className="accordion-body">
         <div className="row align-items-center">
            <div className="col-lg-12">
               <p className="mb-3">
                  You can place the pomegranate tree image in a prominent location in your home or office, such as the main entrance, workspace, or any area where you seek inspiration and motivation.
               </p>

            </div>
         </div>
      </div>
   </div>
</div>
<div className="accordion-item">
   <h2 className="accordion-header" id="headingSix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
         data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
         <span className="frequltyNumber">6.</span>Can the pomegranate tree image help me cope with business challenges?
      </button>
   </h2>
   <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
      data-bs-parent="#accordionExample">
      <div className="accordion-body">
         <div className="row align-items-center">
            <div className="col-lg-12">
               <p className="mb-3">
                  Yes, the image's representation of resilience can inspire you to overcome obstacles and remain strong in the face of challenges, guiding you towards success.
               </p>

            </div>
         </div>
      </div>
   </div>
</div>
<div className="accordion-item">
   <h2 className="accordion-header" id="headingSeven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
         data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
         <span className="frequltyNumber">7.</span> How can this image attract more clients and customers?
      </button>
   </h2>
   <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven"
      data-bs-parent="#accordionExample">
      <div className="accordion-body">
         <div className="row align-items-center">
            <div className="col-lg-12">
               <p className="mb-3">
                  The pomegranate tree image's captivating aura can draw attention and positive energy, attracting potential clients and customers to your business.
               </p>
            </div>
         </div>
      </div>
   </div>
</div>
<div className="accordion-item">
   <h2 className="accordion-header" id="headingEight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
         data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
         <span className="frequltyNumber">8.</span> Will this image help in enhancing creativity?
      </button>
   </h2>
   <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight"
      data-bs-parent="#accordionExample">
      <div className="accordion-body">
         <div className="row align-items-center">
            <div className="col-lg-12">
               <p className="mb-3">
                  Indeed! The enchanting imagery of the pomegranate tree can spark your creativity and inspire innovative ideas for your business ventures.
                  </p>
            </div>
         </div>
      </div>
   </div>
</div>
<div className="accordion-item">
   <h2 className="accordion-header" id="headingNine">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
         data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
         <span className="frequltyNumber">9.</span> Can I experience a change in my business mindset with this image?
      </button>
   </h2>
   <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine"
      data-bs-parent="#accordionExample">
      <div className="accordion-body">
         <div className="row align-items-center">
            <div className="col-lg-12">
               <p className="mb-3">
                  Embracing the pomegranate tree image can lead to a positive mindset shift, motivating you to think more optimistically about your business growth and success.
               </p>

            </div>
         </div>
      </div>
   </div>
</div>
<div className="accordion-item">
   <h2 className="accordion-header" id="headingTen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
         data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
         <span className="frequltyNumber">10.</span> How soon can I expect to see results after placing the pomegranate tree image?
      </button>
   </h2>
   <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen"
      data-bs-parent="#accordionExample">
      <div className="accordion-body">
         <div className="row align-items-center">
            <div className="col-lg-12">
               <p className="mb-3">
                  The impact may vary from person to person, but many customers have reported experiencing positive changes in their business endeavors shortly after incorporating the image into their environment.
               </p>

            </div>
         </div>
      </div>
   </div>
</div>               
            </div>
         </div>
      </div>
   </section>
   <section className="makeAStrong">
      <div className="container">
         <div className="col-lg-10 text-center mx-auto">
            <h1>Transform Your Business Success with Samriddhi Frames.
            </h1>
         </div>
         <center>
            <Link href="/products" className="btn btn-white">
                  Buy Now
              </Link>
         </center>
      </div>
   </section>
    </main>
  )
}
