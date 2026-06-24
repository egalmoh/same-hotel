'use client';

import { useState } from "react";
import styles from "../subpages.module.css";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful form submit
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  return (
    <div className={styles.subpageContainer}>
      {/* Hero Section */}
      <section className={styles.subpageHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>Get In Touch</p>
          <h1 className={styles.heroTitle}>Contact Us</h1>
        </div>
      </section>

      {/* Main Grid: Info Cards & Form */}
      <section className={styles.section}>
        <div className={styles.contactGrid}>
          {/* Info Card Column */}
          <div className={styles.contactInfoCard}>
            <div className={styles.contactInfoGroup}>
              <h3 className={styles.contactInfoTitle}>Address & Location</h3>
              <p className={styles.contactInfoDetail}>
                Same Hotel Building, Business District<br />
                Mogadishu, Somalia
              </p>
            </div>

            <div className={styles.contactInfoGroup}>
              <h3 className={styles.contactInfoTitle}>Inquiries & Reservations</h3>
              <p className={styles.contactInfoDetail}>
                📞 Telephone: +252 61 461 7988<br />
                ✉️ Email: info@samehotel.so<br />
                ✉️ Bookings: bookings@samehotel.so
              </p>
            </div>

            <div className={styles.contactInfoGroup}>
              <h3 className={styles.contactInfoTitle}>Operation Hours</h3>
              <p className={styles.contactInfoDetail}>
                Front Desk & Reception: 24/7 Hours<br />
                Cafeteria & Lounge: 6:00 AM - 11:30 PM<br />
                Room Service: 24/7 Hours
              </p>
            </div>
          </div>

          {/* Form Card Column */}
          <div className={styles.contactFormCard}>
            <h3 className={styles.contactFormTitle}>Send Us a Message</h3>
            
            {submitted ? (
              <div style={{
                backgroundColor: "hsl(120, 39%, 95%)",
                border: "1px solid hsl(120, 39%, 80%)",
                borderRadius: "8px",
                padding: "24px",
                textAlign: "center",
                color: "hsl(120, 39%, 25%)",
                animation: "fadeIn 0.5s ease"
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginBottom: "12px" }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h4 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>Message Sent Successfully</h4>
                <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                  Thank you for reaching out to Same Hotel. Our reservation/inquiries team will review your message and get back to you shortly.
                </p>
              </div>
            ) : (
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="contact-name">Your Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    placeholder="Inquiry Topic"
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="contact-message">Your Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Describe how we can help you..."
                    required
                    rows="5"
                    className={styles.formInput}
                    style={{ resize: "none" }}
                  />
                </div>

                <button type="submit" className={styles.formSubmitBtn}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
