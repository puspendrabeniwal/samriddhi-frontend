export default function Contact(){
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
                                <img src="image/PhoneNumber.png" alt=""/>
                                <h4 className="mt-lg-3 KumbhSans-Bold">Phone Number</h4>
                                <h6 className="mt-2 KumbhSans-Light">+91 1234567890</h6>
                                <h6 className="mt-2 KumbhSans-Light">+91 1234567890</h6>
                            </div>
        
        
                            <div className="col-lg-4 text-center mb-4 mb-lg-0">
                                <img src="image/PhoneNumber.png" alt=""/>
                                <h4 className="mt-lg-3 KumbhSans-Bold">Address</h4>
                                <h6 className="mt-2 KumbhSans-Light">176 W street name, Area bane,
                                    State name 1001425</h6>
                            </div>
        
                            <div className="col-lg-4 text-center">
                                <img src="image/PhoneNumber.png" alt=""/>
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
                                className="googleMap" ></iframe>
                        </div>
                    </div>
        
                    <div className="col-lg-6 p-lg-5 py-5 contactUsSection">
                        <h6 className="KumbhSans-Regular mb-3">CONTACT US</h6>
                        <h1 className="">Have Questions? <br />
                            Get in Touch!</h1>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form-floating billingForm">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="Email address" />
                                    <label htmlFor="floatingInput">Fisrt name<span className="text-danger">*</span></label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-floating billingForm">
                                    <input type="text" className="form-control" id="floatingPassword" placeholder="Phone number"/>
                                    <label htmlFor="floatingPassword">Last name<span className="text-danger">*</span></label>
                                </div>
                            </div>
        
                            <div className="col-lg-6 col-md-6">
                                <div className="form-floating billingForm">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="Email address" />
                                    <label htmlFor="floatingInput">Phone number<span className="text-danger">*</span></label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-floating billingForm">
                                    <input type="text" className="form-control" id="floatingPassword" placeholder="Phone number" />
                                    <label htmlFor="floatingPassword">Email address<span className="text-danger">*</span></label>
                                </div>
                            </div>
        
                            <div className="col-lg-12">
                                <div className="form-floating billingForm">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                        ></textarea>
                                    <label htmlFor="floatingTextarea2">Messege<span className="text-danger">*</span></label>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-yellow px-5 mt-4">Send</button>
        
                    </div>
                </div>
            </section>
        
            <section className="makeAStrong">
                <div className="container">
                    <div className="col-lg-10 text-center mx-auto">
                        <h1>Lorem Ipsum is simply dummy text of the printing
                        </h1>
                    </div>
                </div>
            </section>
        </main>
    )
}


  
    
