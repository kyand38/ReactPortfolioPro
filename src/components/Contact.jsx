import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [isSent, setIsSent] = useState(false);
  const navigate = useNavigate();

  const handleBlur = (e) => {
    const { id, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: value.trim() === '',
    }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    const newErrors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '',
      message: formData.message.trim() === '',
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((hasError) => hasError)) return;

    // Prepare data to match EmailJS template fields
    const emailData = {
      to_name: 'Kyle', // Receiver's name in the EmailJS template
      from_name: formData.name, // Maps to "from_name" in EmailJS template
      user_email: formData.email, // Sender's email for reference
      message: formData.message, // Maps to "message" in EmailJS template
    };

    // EmailJS configuration
    emailjs.send('service_ijq06aw', 'template_z50orpi', emailData, 'tSaq7COCltqEYR-7C')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thanks for your message! I look forward to reading it.'); // Show success alert
        setIsSent(true);
        navigate('/Portfolio'); // Redirect to the portfolio page
      })
      .catch((err) => console.error('FAILED...', err));
  };

  return (
    <section className="bg-dark text-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="p-4 border-top border-info rounded shadow-sm bg-secondary">
              <h2 className="text-center text-info mb-4">Get in Touch</h2>
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="form-group mb-3">
                  <label htmlFor="name" className="text-dark">Name</label>
                  <input
                    type="text"
                    className={`form-control border-info ${errors.name ? 'border-danger' : ''}`}
                    id="name"
                    placeholder="Enter your name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={formData.name}
                  />
                  {errors.name && <small className="text-danger">Please enter your name</small>}
                </div>

                {/* Email Field */}
                <div className="form-group mb-3">
                  <label htmlFor="email" className="text-dark">Email</label>
                  <input
                    type="email"
                    className={`form-control border-info ${errors.email ? 'border-danger' : ''}`}
                    id="email"
                    placeholder="Enter your email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={formData.email}
                  />
                  {errors.email && <small className="text-danger">Please enter a valid email</small>}
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
                    onChange={handleChange}
                    value={formData.message}
                  ></textarea>
                  {errors.message && <small className="text-danger">Please enter a message</small>}
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-info px-5">Send Message</button>
                  {isSent && <p className="text-success mt-3">Message sent successfully!</p>}
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