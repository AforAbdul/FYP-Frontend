import React from "react";
import Banner from "./layout/Banner";

const Contact = () => {
  return (
    <>
      <Banner
        src="https://www.valueresearchonline.com/content-assets/images/51595_emi-02__w660__.jpg"
        search="false"
        text="Contact Us"
      />
      <section class="contact-section pt-100 pb-100">
        <div class="container">
          <div class="row justify-content-center mb-40">
            <div class="col-md-6 text-center">
              <h5 class="title-25 text-uppercase">
                Get in touch! <br />
                will contact you soon
              </h5>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="contact-form-area">
                <div class="form-wrap box--shadow">
                  <h4 class="title-25 contact-form-title mb-8">Get In Touch</h4>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <form
                    class="contact-form-title"
                    action="https://formsubmit.co/arhere.ar@gmail.com"
                    method="post"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-inner">
                          <label>Your Name</label>
                          <input
                            type="text"
                            name="fname"
                            placeholder="Your name"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-inner">
                          <label>Email</label>
                          <input
                            type="text"
                            name="fname"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div class="col-12 mb-40">
                        <div class="form-inner">
                          <textarea
                            name="message"
                            placeholder="Your message"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-12 pb-3">
                        <a href="#" class="primary--btn contact-btn">
                          <button
                            type="submit"
                            style={{
                              border: "none",
                              background: "none",
                              color: "white",
                            }}
                          >
                            Send Message
                          </button>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="row contact-info-area g-4 justify-content-center pt-100">
            <div class="col-lg-4 col-md-6">
              <div class="branch-info-item">
                <div class="branch-info-header">
                  <h4>Branch No 01</h4>
                </div>
                <div class="branch-info-body box--shadow">
                  <ul class="text-center">
                    <li>
                      Address: House No. 15, Lane 27, Wah Model Town Phase II,
                      Wah Cantt, Pakistan
                    </li>
                    <li>Email: arhere.ar@gmail.com</li>
                    <li>Phone: +92 348 5070071</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="branch-info-item">
                <div class="branch-info-header">
                  <h4>Branch No 02</h4>
                </div>
                <div class="branch-info-body box--shadow">
                  <ul class="text-center">
                    <li>
                      Address: House No: CB 121/6C, Galli 18/1, Madina Colony
                      Misrial Road, Rawalpindi, Pakistan
                    </li>
                    <li>Email: abhere.ar@gmail.com</li>
                    <li>Phone: +92 304 5450992</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
