import React, { useState } from 'react';

function Contact() {
  // State to track empty fields
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  // Handle onBlur event to check for empty input
  const handleBlur = (e) => {
    const { id, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: value.trim() === '', // Set true if field is empty
    }));
  };

  return (
    <section className="bg-dark text-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="p-4 border-top border-info rounded shadow-sm bg-secondary">
              <h2 className="text-center text-info mb-4">Get in Touch</h2>
              <form>
                {/* Name Field */}
                <div className="form-group mb-3">
                  <label htmlFor="name" className="text-dark">Name</label>
                  <input
                    type="text"
                    className={`form-control border-info ${errors.name ? 'border-danger' : ''}`}
                    id="name"
                    placeholder="Enter your name"
                    onBlur={handleBlur} // Add onBlur event
                  />
                  {errors.name && (
                    <small className="text-danger">Please enter your name</small>
                  )}
                </div>

                {/* Email Field */}
                <div className="form-group mb-3">
                  <label htmlFor="email" className="text-dark">Email</label>
                  <input
                    type="email"
                    className={`form-control border-info ${errors.email ? 'border-danger' : ''}`}
                    id="email"
                    placeholder="Enter your email"
                    onBlur={handleBlur} // Add onBlur event
                  />
                  {errors.email && (
                    <small className="text-danger">Please enter a valid email</small>
                  )}
                </div>

                {/* Message Field */}
                <div className="form-group mb-3">
                  <label htmlFor="message" className="text-dark">Message</label>
                  <textarea
                    className={`form-control border-info ${errors.message ? 'border-danger' : ''}`}
                    id="message"
                    rows="4"
                    placeholder="Enter your message"
                    onBlur={handleBlur}
                  ></textarea>
                  {errors.message && (
                    <small className="text-danger">Please enter a message</small>
                  )}
                </div>


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