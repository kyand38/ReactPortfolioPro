

import React from 'react';

function Contact() {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="p-4 border-top border-info rounded shadow-sm bg-light">
              <h2 className="text-center text-info mb-4">Get in Touch</h2>
              <form>
                {/* Name Field */}
                <div className="form-group mb-3">
                  <label htmlFor="name" className="text-dark">Name</label>
                  <input
                    type="text"
                    className="form-control border-info"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Field */}
                <div className="form-group mb-3">
                  <label htmlFor="email" className="text-dark">Email</label>
                  <input
                    type="email"
                    className="form-control border-info"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Message Field */}
                <div className="form-group mb-3">
                  <label htmlFor="message" className="text-dark">Message</label>
                  <textarea
                    className="form-control border-info"
                    id="message"
                    rows="4"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button type="submit" className="btn btn-info px-5">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;