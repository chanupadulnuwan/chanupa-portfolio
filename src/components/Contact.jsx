import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean form submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-desc">
            Have a project in mind, need a full stack web app, mobile app, or UI/UX design? Feel free to send a message!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Cards */}
          <div className="contact-info-column">
            <h3>Contact Details</h3>
            <p className="contact-intro">
              {personalDetails.contactInfo.availability}
            </p>

            <div className="contact-card-list">
              <div className="contact-card">
                <div className="contact-icon-box">
                  <Mail size={22} color="#FD6F00" />
                </div>
                <div>
                  <span className="contact-card-label">Email Me</span>
                  <a href={`mailto:${personalDetails.contactInfo.email}`} className="contact-card-val">
                    {personalDetails.contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-box">
                  <Phone size={22} color="#FD6F00" />
                </div>
                <div>
                  <span className="contact-card-label">Call / WhatsApp</span>
                  <span className="contact-card-val">{personalDetails.contactInfo.phone}</span>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-box">
                  <MapPin size={22} color="#FD6F00" />
                </div>
                <div>
                  <span className="contact-card-label">Location</span>
                  <span className="contact-card-val">{personalDetails.contactInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column">
            {submitted ? (
              <div className="form-success-message">
                <CheckCircle2 size={48} color="#FD6F00" />
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out, Chanupa will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project requirements..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn-primary submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
