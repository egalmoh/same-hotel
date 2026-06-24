'use client';

import { useState } from "react";
import Image from "next/image";
import styles from "../../subpages.module.css";

export default function MeetingsAndEvents() {
  const [formData, setFormData] = useState({
    name: "",
    venue: "Conference Hall A (150 Pax)",
    position: "",
    company: "",
    phone: "+252 ",
    date: "",
    attendees: "",
    description: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getWhatsAppLink = () => {
    const { name, venue, position, company, phone, date, attendees, description } = formData;
    const text = `Hello Same Hotel, I would like to book a meeting/event venue:\n\n👤 Full Name: ${name || "Not specified"}\n👔 Position: ${position || "Not specified"}\n🏢 Company Name: ${company || "Not specified"}\n📞 Contact Phone: ${phone || "Not specified"}\n🏛️ Venue Selected: ${venue}\n📅 Proposed Date: ${date || "Not specified"}\n👥 Number of Persons: ${attendees || "Not specified"}\n📝 Event Description: ${description || "None"}`;
    return `https://wa.me/252614617988?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(getWhatsAppLink(), "_blank", "noopener,noreferrer");
  };

  const packages = [
    {
      name: "Menu Option 1",
      price: "$25",
      span: "/ Person",
      features: [
        "Welcome tea & coffee upon arrival",
        "Morning tea break with fresh pastries",
        "Standard buffet lunch (Somali & Continental)",
        "Mineral water & soft drinks during sessions",
        "Flipcharts & whiteboard writing pads"
      ]
    },
    {
      name: "Menu Option 2",
      price: "$27",
      span: "/ Person",
      features: [
        "Premium coffee/tea selections & juices",
        "Morning break with sweet & savory snacks",
        "Premium international buffet lunch",
        "Unlimited soft drinks & premium water",
        "LCD projector, screen & sound system setup"
      ]
    },
    {
      name: "Menu Option 3",
      price: "$30",
      span: "/ Person",
      features: [
        "Executive arrival coffee, tea & pastries",
        "Mid-morning break with hot snacks & smoothies",
        "Executive deluxe buffet lunch by head chef",
        "Afternoon coffee/tea break with light bites",
        "Full high-end AV equipment & PA system"
      ]
    }
  ];

  const venues = [
    { name: "Conference Hall A", capacity: "150 Pax", price: "$200" },
    { name: "Conference Hall B", capacity: "80 Pax", price: "$150" },
    { name: "Executive Boardroom", capacity: "25 Pax", price: "$100" },
    { name: "VIP Lounge", capacity: "15 Pax", price: "$80" }
  ];

  return (
    <div className={styles.subpageContainer}>
      {/* Hero Section */}
      <section className={styles.subpageHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>Professional Hosting</p>
          <h1 className={styles.heroTitle}>Meetings & Events</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.section}>
        <div className={styles.meetingsIntro}>
          <h2 className={styles.roomTitle} style={{ fontSize: "32px" }}>Bespoke Business Gatherings</h2>
          <p className={styles.diningDesc}>
            Same Hotel provides fully integrated, modern, and quiet venues in a secure environment in Bosaso, Somalia. Our spaces are ideal for conferences, corporate workshops, training seminars, or VIP private board meetings.
          </p>
        </div>

        {/* Packages Grid */}
        <h3 className={styles.sectionSubtitle}>Catering Menu Packages</h3>
        <div className={styles.packagesGrid}>
          {packages.map((pkg, idx) => (
            <div key={idx} className={styles.packageCard}>
              <div className={styles.packageHeader}>
                <h4 className={styles.packageName}>{pkg.name}</h4>
                <div className={styles.packagePrice}>
                  {pkg.price}
                  <span className={styles.packagePriceSpan}>{pkg.span}</span>
                </div>
              </div>
              <ul className={styles.packageFeatures}>
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className={styles.packageFeature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Rates Table */}
        <div className={styles.tableSection}>
          <h3 className={styles.sectionSubtitle}>Conference Venue Packages</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.ratesTable}>
              <thead>
                <tr>
                  <th>Venue Name</th>
                  <th>Capacity</th>
                  <th>Venue Rent (Per Day)</th>
                </tr>
              </thead>
              <tbody>
                {venues.map((v, idx) => (
                  <tr key={idx}>
                    <td><strong>{v.name}</strong></td>
                    <td>{v.capacity}</td>
                    <td><span style={{ color: "var(--color-gold-dark)", fontWeight: "600" }}>{v.price}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Meeting Space Images */}
        <div className={styles.meetingGalleryGrid}>
          <div className={styles.meetingGalleryItem}>
            <Image
              src="/images/meeting_room.png"
              alt="Conference Room Setup"
              fill
              className={styles.restaurantImage}
            />
          </div>
          <div className={styles.meetingGalleryItem}>
            <Image
              src="/images/restaurant_cozy.png"
              alt="Catering Area Setup"
              fill
              className={styles.restaurantImage}
            />
          </div>
        </div>

        {/* Meeting Booking Form */}
        <div className={styles.contactFormCard} style={{ width: "100%", maxWidth: "800px" }}>
          <h3 className={styles.contactFormTitle} style={{ textAlign: "center" }}>Book your Meeting</h3>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              
              {/* Full Name */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="meeting-form-name">Your Full Name</label>
                <input
                  id="meeting-form-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Location/Room Type */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="meeting-form-venue">Selected Venue</label>
                <select
                  id="meeting-form-venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  style={{ appearance: "none", WebkitAppearance: "none", cursor: "pointer" }}
                >
                  <option value="Conference Hall A (150 Pax)">Conference Hall A (150 Pax)</option>
                  <option value="Conference Hall B (80 Pax)">Conference Hall B (80 Pax)</option>
                  <option value="Executive Boardroom (25 Pax)">Executive Boardroom (25 Pax)</option>
                  <option value="VIP Lounge (15 Pax)">VIP Lounge (15 Pax)</option>
                </select>
              </div>

              {/* Your Position */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="meeting-form-position">Your Position</label>
                <input
                  id="meeting-form-position"
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder="e.g. Workshop Coordinator"
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Company Name */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="meeting-form-company">Company Name</label>
                <input
                  id="meeting-form-company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company / NGO"
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Contact Phone */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="meeting-form-phone">Contact Phone</label>
                <input
                  id="meeting-form-phone"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+252 ..."
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Proposed Event Date */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="meeting-form-date">Proposed Event Date</label>
                <input
                  id="meeting-form-date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Number of Persons */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="meeting-form-attendees">Number of Persons</label>
                <input
                  id="meeting-form-attendees"
                  type="number"
                  name="attendees"
                  value={formData.attendees}
                  onChange={handleInputChange}
                  placeholder="e.g. 50"
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Description */}
              <div className={`${styles.formGroup} ${styles.formGridFull}`}>
                <label className={styles.formLabel} htmlFor="meeting-form-desc">Brief Description of Event Requirements</label>
                <textarea
                  id="meeting-form-desc"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="AV system, presentation stand, lunch options, tea/coffee breaks arrangement..."
                  className={styles.formInput}
                  rows={4}
                  style={{ resize: "vertical", minHeight: "100px" }}
                />
              </div>

              {/* Submit */}
              <div className={styles.formGridFull} style={{ marginTop: "12px" }}>
                <button type="submit" className={styles.whatsappBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.059-4.886c1.65.981 3.268 1.488 4.903 1.49 5.373 0 9.743-4.307 9.745-9.605.002-2.568-1.002-4.979-2.825-6.799C16.12 2.38 13.728 1.38 11.2 1.382c-5.38 0-9.75 4.31-9.753 9.612-.002 1.77.475 3.5 1.38 5.011L1.87 20.89l5.01-.818zM17.43 14.9c-.29-.145-1.72-.85-1.985-.947-.267-.097-.46-.145-.655.146-.193.29-.75.947-.919 1.14-.17.194-.338.22-.63.074-.29-.145-1.22-.45-2.325-1.434-.86-.767-1.44-1.716-1.61-2.006-.17-.29-.018-.446.127-.59.13-.13.29-.34.437-.508.145-.17.193-.29.29-.483.097-.193.048-.363-.024-.508-.073-.146-.655-1.579-.9-2.164-.24-.574-.48-.497-.657-.506-.17-.008-.364-.01-.56-.01-.193 0-.507.073-.77.363-.266.29-1.017.995-1.017 2.428 0 1.434 1.04 2.82 1.187 3.014.145.194 2.05 3.13 4.966 4.387.694.3 1.236.48 1.658.614.697.22 1.33.19 1.83.115.557-.08 1.72-.701 1.96-1.378.24-.678.24-1.258.17-1.379-.07-.12-.26-.19-.55-.337z" />
                  </svg>
                  <span>Send Request via WhatsApp</span>
                </button>
              </div>

            </div>
          </form>
        </div>

      </section>
    </div>
  );
}
