'use client';

import { useState } from "react";
import Image from "next/image";
import styles from "../../subpages.module.css";

export default function ConferenceHalls() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "+252 ",
    email: "",
    company: "",
    description: "",
    date: "",
    participants: "",
    budget: "",
    details: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getWhatsAppLink = () => {
    const { name, mobile, email, company, description, date, participants, budget, details } = formData;
    const text = `Hello Same Hotel, I would like to get a quote for booking a conference hall / event venue:\n\n👤 Full Name: ${name || "Not specified"}\n📞 Mobile Number: ${mobile || "Not specified"}\n✉️ Email Address: ${email || "Not specified"}\n🏢 Company Name: ${company || "Not specified"}\n🏛️ Function Description: ${description || "Not specified"}\n📅 Function Date: ${date || "Not specified"}\n👥 Number of Participants: ${participants || "Not specified"}\n💰 Budget Per Head: $${budget || "Not specified"}\n📝 Event Details: ${details || "None"}`;
    return `https://wa.me/252614617988?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(getWhatsAppLink(), "_blank", "noopener,noreferrer");
  };

  const imagesList = [
    { src: "/images/meeting_room.png", title: "Boardroom Meeting" },
    { src: "/images/meeting_banquet.png", title: "Banquet Banquet Setup" },
    { src: "/images/meeting_seminar.png", title: "Classroom Seminar Setup" },
    { src: "/images/meeting_garden.png", title: "Outdoor Garden Evening Setup" }
  ];

  return (
    <div className={styles.subpageContainer}>
      
      {/* Hero Section */}
      <section className={styles.subpageHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>Professional Hosting</p>
          <h1 className={styles.heroTitle}>Workshops & Conference Facilities</h1>
        </div>
      </section>

      {/* Intro section: Events Management */}
      <section className={styles.section}>
        <div className={styles.aboutSection}>
          
          {/* Left Text */}
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle} style={{ color: "var(--color-gold-dark)", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
              Same Events Management
            </h2>
            <h3 className={styles.roomTitle} style={{ fontSize: "28px", marginBottom: "20px" }}>
              We are a team of highly experienced Events management team
            </h3>
            
            <p className={styles.aboutParagraph}>
              Same Hotel offers contemporary, well-designed facilities in a quiet, calm, and secure business environment in Bosaso for conferences, workshops, and seminars. These include state-of-the-art Audio Visual Equipment, LCD Projectors, Screens, Flip Charts & White Boards, PA Systems, and dedicated tech support.
            </p>

            <ul className={styles.policyList} style={{ marginTop: "20px" }}>
              <li className={styles.policyItem} style={{ fontSize: "14.5px" }}>
                <strong>Main Conference Hall</strong> — Has a capacity of 300 pax comfortably seated.
              </li>
              <li className={styles.policyItem} style={{ fontSize: "14.5px" }}>
                <strong>VIP Boardroom</strong> — Can host a maximum of 15 pax comfortably seated.
              </li>
              <li className={styles.policyItem} style={{ fontSize: "14.5px" }}>
                <strong>Mini Meeting Halls</strong> — Approximately 50 persons can hold a meeting comfortably.
              </li>
              <li className={styles.policyItem} style={{ fontSize: "14.5px" }}>
                <strong>Tranquil Event Garden</strong> — Perfect for outdoor evening dining and banquets of up to 120 pax.
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className={styles.aboutImageWrapper}>
            <Image
              src="/images/meeting_banquet.png"
              alt="Main banquet setup"
              fill
              className={styles.aboutImage}
            />
          </div>

        </div>
      </section>

      {/* Booking quote section */}
      <section className={styles.section} style={{ backgroundColor: "rgba(197, 168, 128, 0.04)" }}>
        <div className={styles.diningIntro}>
          <h2 className={styles.roomTitle} style={{ textAlign: "center", fontSize: "32px" }}>Events Booking</h2>
          <p className={styles.diningDesc}>
            Provide us with your Events Details below for a fair custom quote.
          </p>
        </div>

        <div className={styles.aboutSection} style={{ alignItems: "stretch", marginTop: "20px" }}>
          
          {/* Left Form Card */}
          <div className={styles.contactFormCard} style={{ flex: 1.2, boxShadow: "none" }}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                
                {/* Your Name */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="conf-form-name">Your Name</label>
                  <input
                    id="conf-form-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name (required)"
                    className={styles.formInput}
                    required
                  />
                </div>

                {/* Mobile Number */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="conf-form-mobile">Mobile Number</label>
                  <input
                    id="conf-form-mobile"
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="+252 ... (required)"
                    className={styles.formInput}
                    required
                  />
                </div>

                {/* Your Email */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="conf-form-email">Your Email</label>
                  <input
                    id="conf-form-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com (required)"
                    className={styles.formInput}
                    required
                  />
                </div>

                {/* Company Name */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="conf-form-company">Company Name</label>
                  <input
                    id="conf-form-company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company / NGO"
                    className={styles.formInput}
                  />
                </div>

                {/* Function Description */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="conf-form-desc">Function Type</label>
                  <input
                    id="conf-form-desc"
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="e.g. Workshop, Seminar (required)"
                    className={styles.formInput}
                    required
                  />
                </div>

                {/* Function Date */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="conf-form-date">Function Date</label>
                  <input
                    id="conf-form-date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                </div>

                {/* Number of Participants */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="conf-form-part">Number of Participants</label>
                  <input
                    id="conf-form-part"
                    type="number"
                    name="participants"
                    value={formData.participants}
                    onChange={handleInputChange}
                    placeholder="e.g. 100 (required)"
                    className={styles.formInput}
                    required
                  />
                </div>

                {/* Your Budget Per Head */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="conf-form-budget">Your Budget Per Head ($)</label>
                  <input
                    id="conf-form-budget"
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="Budget per person"
                    className={styles.formInput}
                  />
                </div>

                {/* Describe Your Event */}
                <div className={`${styles.formGroup} ${styles.formGridFull}`}>
                  <label className={styles.formLabel} htmlFor="conf-form-details">Describe Your Event</label>
                  <textarea
                    id="conf-form-details"
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    placeholder="Detailed requirements (catering, sound system layout, tables config...)"
                    className={styles.formInput}
                    rows={4}
                    style={{ resize: "vertical", minHeight: "100px" }}
                  />
                </div>

                {/* Submit button */}
                <div className={styles.formGridFull} style={{ marginTop: "12px" }}>
                  <button type="submit" className={styles.whatsappBtn}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.059-4.886c1.65.981 3.268 1.488 4.903 1.49 5.373 0 9.743-4.307 9.745-9.605.002-2.568-1.002-4.979-2.825-6.799C16.12 2.38 13.728 1.38 11.2 1.382c-5.38 0-9.75 4.31-9.753 9.612-.002 1.77.475 3.5 1.38 5.011L1.87 20.89l5.01-.818zM17.43 14.9c-.29-.145-1.72-.85-1.985-.947-.267-.097-.46-.145-.655.146-.193.29-.75.947-.919 1.14-.17.194-.338.22-.63.074-.29-.145-1.22-.45-2.325-1.434-.86-.767-1.44-1.716-1.61-2.006-.17-.29-.018-.446.127-.59.13-.13.29-.34.437-.508.145-.17.193-.29.29-.483.097-.193.048-.363-.024-.508-.073-.146-.655-1.579-.9-2.164-.24-.574-.48-.497-.657-.506-.17-.008-.364-.01-.56-.01-.193 0-.507.073-.77.363-.266.29-1.017.995-1.017 2.428 0 1.434 1.04 2.82 1.187 3.014.145.194 2.05 3.13 4.966 4.387.694.3 1.236.48 1.658.614.697.22 1.33.19 1.83.115.557-.08 1.72-.701 1.96-1.378.24-.678.24-1.258.17-1.379-.07-.12-.26-.19-.55-.337z" />
                    </svg>
                    <span>Send details via WhatsApp</span>
                  </button>
                </div>

              </div>
            </form>
          </div>

          {/* Right Images (Stacked) */}
          <div style={{ flex: 0.8, display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className={styles.meetingGalleryItem} style={{ flex: 1, height: "auto", minHeight: "220px" }}>
              <Image
                src="/images/meeting_garden.png"
                alt="Garden Evening Dinner Event"
                fill
                className={styles.restaurantImage}
              />
            </div>
            <div className={styles.meetingGalleryItem} style={{ flex: 1, height: "auto", minHeight: "220px" }}>
              <Image
                src="/images/meeting_room.png"
                alt="Executive Boardroom Setup"
                fill
                className={styles.restaurantImage}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Grid of Images Gallery */}
      <section className={styles.section}>
        <h3 className={styles.sectionSubtitle}>Halls & Event Setups</h3>
        <div className={styles.meetingGalleryGrid} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          {imagesList.map((img, idx) => (
            <div key={idx} className={styles.galleryItem} style={{ height: "240px" }}>
              <Image
                src={img.src}
                alt={img.title}
                fill
                className={styles.restaurantImage}
              />
              <div className={styles.galleryItemOverlay}>
                <h3 className={styles.galleryItemTitle}>{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
