import { useState, useEffect } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [mailingEmail, setMailingEmail] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleMailingSignup = (e) => {
    e.preventDefault();
    console.log('Mailing list signup:', mailingEmail);
  };

  return (
    <div className="about-page">
      <div className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
        <h1 className="hero-title">CONTACT US</h1>
        <div className="hero-underline"></div>
      </div>

      <div className={`contact-content ${isVisible ? 'fade-in' : ''}`}>
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="contact-heading">Get in touch with us</h2>

            <div className="info-section">
              <h3 className="info-label">Email:</h3>
              <a href="mailto:philip@shamacycles.com" className="info-link">
                philip@shamacycles.com
              </a>
            </div>

            <div className="info-section">
              <h3 className="info-label">Phone:</h3>
              <a href="tel:713-812-7633" className="info-link">
                713-812-7633
              </a>
            </div>

            <div className="info-section">
              <h3 className="info-label">Address:</h3>
              <p className="info-text">
                123 Edwards St
                Houston, TX 77007
              </p>
              <p className="parking-notice">
                <strong>⚠️ Parking Notice:</strong> Please park on Edwards St. Do not use the back lot.
              </p>
            </div>

            <div className="info-section">
              <h3 className="info-label">Hours:</h3>
              <div className="hours-list">
                <div className="hours-row">
                  <span>Monday - Friday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-row">
                  <span>Saturday</span>
                  <span>10:00 AM - 5:00 PM</span>
                </div>
                <div className="hours-row">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3 className="info-label">Join our mailing list:</h3>
              <form onSubmit={handleMailingSignup} className="mailing-form">
                <input
                  type="email"
                  value={mailingEmail}
                  onChange={(e) => setMailingEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="mailing-input"
                  required
                />
                <button type="submit" className="mailing-button">
                  Sign Up
                </button>
              </form>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    First Name<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleFormChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Last Name<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleFormChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Email Address<span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Subject<span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Message<span className="required">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  className="form-textarea"
                  rows="6"
                  required
                />
              </div>

              <div className="form-submit">
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="location-section">
          <div className="location-grid">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.2359019103146!2d-95.38166162414944!3d29.77081957506253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c6c0b5b27d1f%3A0x984c9e7d965e1658!2sShama%20Cycles!5e0!3m2!1sen!2sus!4v1762096828613!5m2!1sen!2sus" 
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                title="Shama Cycles Location"
              ></iframe>
            </div>
            
            <div className="storefront-container">
              <img
                src="shama_storefront.jpg"
                alt="Shama Cycles Storefront on Edwards St"
                className="storefront-image"
              />
              <p className="image-caption">
                Our shop on Edwards St - Park on the street out front!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;