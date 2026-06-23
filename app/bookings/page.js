'use client';

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import styles from "../subpages.module.css";

function BookingFormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    phone: "+252 ",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    nationality: "",
    roomType: "Single Room",
    specialRequests: ""
  });

  // Pre-fill the room type if passed as a query param
  useEffect(() => {
    const roomParam = searchParams.get("room");
    if (roomParam) {
      const formattedRoom = roomParam
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      
      const validRooms = ["Single Room", "Double Room", "Deluxe Suite", "Presidential Suite"];
      if (validRooms.includes(formattedRoom)) {
        setFormData(prev => ({ ...prev, roomType: formattedRoom }));
      }
    }
  }, [searchParams]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getWhatsAppLink = () => {
    const { name, phone, email, checkIn, checkOut, guests, nationality, roomType, specialRequests } = formData;
    const text = `Hello Same Hotel, I would like to complete my reservation:\n\n👤 Full Name: ${name || "Not specified"}\n📞 Phone Number: ${phone || "Not specified"}\n✉️ Email Address: ${email || "Not specified"}\n📅 Check-in Date: ${checkIn || "Not specified"}\n📅 Check-out Date: ${checkOut || "Not specified"}\n👥 Number of Guests: ${guests}\n🌍 Nationality: ${nationality || "Not specified"}\n🏨 Room Category: ${roomType}\n📝 Special Requests: ${specialRequests || "None"}`;
    return `https://wa.me/2520907275534?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(getWhatsAppLink(), "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.subpageContainer}>
      {/* Hero Section */}
      <section className={styles.subpageHero} style={{ height: "45vh" }}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>Direct Booking</p>
          <h1 className={styles.heroTitle}>Reserve Your Stay</h1>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={styles.statsBar}>
        <div className={styles.statItem}>
          <span className={styles.statVal}>4</span>
          <span className={styles.statLabel}>Room Types</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statVal}>Free</span>
          <span className={styles.statLabel}>Wifi Included</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statVal}>24/7</span>
          <span className={styles.statLabel}>Support</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statVal}>100%</span>
          <span className={styles.statLabel}>Comfort Guaranteed</span>
        </div>
      </section>

      {/* Booking Form Card Section */}
      <section className={styles.section} style={{ paddingTop: "0" }}>
        <div className={styles.bookingFormCard}>
          <h2 className={styles.bookingFormTitle}>Complete Your Reservation</h2>
          <p className={styles.bookingFormSubtitle}>
            Fill in your details and your booking request will be sent directly to our team on WhatsApp for instant confirmation.
          </p>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              
              {/* Full Name */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="booking-form-name">Full Name</label>
                <input
                  id="booking-form-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Phone Number */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="booking-form-phone">Phone Number</label>
                <input
                  id="booking-form-phone"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+252 ..."
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Email Address */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="booking-form-email">Email Address <span style={{ textTransform: "lowercase", opacity: 0.6 }}>(optional)</span></label>
                <input
                  id="booking-form-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className={styles.formInput}
                />
              </div>

              {/* Nationality */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="booking-form-nationality">Nationality</label>
                <input
                  id="booking-form-nationality"
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  placeholder="e.g. Somali"
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Check-In Date */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="booking-form-checkin">Check-In Date</label>
                <input
                  id="booking-form-checkin"
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Check-Out Date */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="booking-form-checkout">Check-Out Date</label>
                <input
                  id="booking-form-checkout"
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Number of Guests */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="booking-form-guests">Number of Guests</label>
                <select
                  id="booking-form-guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  style={{ appearance: "none", WebkitAppearance: "none", cursor: "pointer" }}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
              </div>

              {/* Room Type */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="booking-form-roomtype">Room Type</label>
                <select
                  id="booking-form-roomtype"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  style={{ appearance: "none", WebkitAppearance: "none", cursor: "pointer" }}
                >
                  <option value="Single Room">Single Room ($25/night)</option>
                  <option value="Double Room">Double Room ($30/night)</option>
                  <option value="Deluxe Suite">Deluxe Suite ($50/night)</option>
                  <option value="Presidential Suite">Presidential Suite ($80/night)</option>
                </select>
              </div>

              {/* Special Requests */}
              <div className={`${styles.formGroup} ${styles.formGridFull}`}>
                <label className={styles.formLabel} htmlFor="booking-form-requests">Special Requests <span style={{ textTransform: "lowercase", opacity: 0.6 }}>(optional)</span></label>
                <textarea
                  id="booking-form-requests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Early check-in, extra pillows, dietary needs..."
                  className={styles.formInput}
                  rows={4}
                  style={{ resize: "vertical", minHeight: "100px" }}
                />
              </div>

              {/* Submit Button */}
              <div className={styles.formGridFull} style={{ marginTop: "12px" }}>
                <button type="submit" className={styles.whatsappBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.059-4.886c1.65.981 3.268 1.488 4.903 1.49 5.373 0 9.743-4.307 9.745-9.605.002-2.568-1.002-4.979-2.825-6.799C16.12 2.38 13.728 1.38 11.2 1.382c-5.38 0-9.75 4.31-9.753 9.612-.002 1.77.475 3.5 1.38 5.011L1.87 20.89l5.01-.818zM17.43 14.9c-.29-.145-1.72-.85-1.985-.947-.267-.097-.46-.145-.655.146-.193.29-.75.947-.919 1.14-.17.194-.338.22-.63.074-.29-.145-1.22-.45-2.325-1.434-.86-.767-1.44-1.716-1.61-2.006-.17-.29-.018-.446.127-.59.13-.13.29-.34.437-.508.145-.17.193-.29.29-.483.097-.193.048-.363-.024-.508-.073-.146-.655-1.579-.9-2.164-.24-.574-.48-.497-.657-.506-.17-.008-.364-.01-.56-.01-.193 0-.507.073-.77.363-.266.29-1.017.995-1.017 2.428 0 1.434 1.04 2.82 1.187 3.014.145.194 2.05 3.13 4.966 4.387.694.3 1.236.48 1.658.614.697.22 1.33.19 1.83.115.557-.08 1.72-.701 1.96-1.378.24-.678.24-1.258.17-1.379-.07-.12-.26-.19-.55-.337z" />
                  </svg>
                  <span>Send Booking via WhatsApp</span>
                </button>
                <p className={styles.bookingDisclaimer}>
                  ✔ Your booking details go straight to our WhatsApp — we confirm and block dates within minutes.
                </p>
              </div>

            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default function Bookings() {
  return (
    <Suspense fallback={
      <div className={styles.subpageContainer} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <p style={{ color: "var(--color-gold)", fontFamily: "var(--font-serif)", fontSize: "20px" }}>Loading booking sanctuary...</p>
      </div>
    }>
      <BookingFormContent />
    </Suspense>
  );
}
