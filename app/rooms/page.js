'use client';

import { useState } from "react";
import Image from "next/image";
import styles from "../subpages.module.css";

export default function Rooms() {
  const [bookingInfo, setBookingInfo] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
    guests: "1"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const getWhatsAppLink = (roomType, price) => {
    const { name, checkIn, checkOut, guests } = bookingInfo;
    const text = `Hello Same Hotel, I would like to book a stay:\n\n🏨 Room Category: ${roomType} ($${price}/night)\n👤 Name: ${name || "Not specified"}\n📅 Check-in: ${checkIn || "Not specified"}\n📅 Check-out: ${checkOut || "Not specified"}\n👥 Guests: ${guests}`;
    return `https://wa.me/252610000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className={styles.subpageContainer}>
      {/* Hero Section */}
      <section className={styles.subpageHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>Unmatched Comfort</p>
          <h1 className={styles.heroTitle}>Our Accommodations</h1>
        </div>
      </section>

      {/* Booking details form inside Rooms Page for better UX */}
      <section className={styles.section}>
        <div className={styles.diningIntro}>
          <h2 className={styles.roomTitle} style={{ textAlign: "center", fontSize: "32px" }}>Select Your Sanctuary</h2>
          <p className={styles.diningDesc}>
            Enter your booking details below, then click the "Book Stay" button on your preferred room option to finalize your reservation via WhatsApp.
          </p>
        </div>

        {/* Local booking input fields */}
        <div className={styles.contactFormCard} style={{ width: "100%", maxWidth: "800px", marginBottom: "50px" }}>
          <div className={styles.contactForm}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px" }}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="rooms-name">Full Name</label>
                <input
                  id="rooms-name"
                  type="text"
                  name="name"
                  value={bookingInfo.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="rooms-checkin">Check In</label>
                <input
                  id="rooms-checkin"
                  type="date"
                  name="checkIn"
                  value={bookingInfo.checkIn}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="rooms-checkout">Check Out</label>
                <input
                  id="rooms-checkout"
                  type="date"
                  name="checkOut"
                  value={bookingInfo.checkOut}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="rooms-guests">Guests</label>
                <select
                  id="rooms-guests"
                  name="guests"
                  value={bookingInfo.guests}
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
            </div>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className={styles.roomsGrid}>
          {/* Card 1: Single Room */}
          <div className={styles.roomCard}>
            <div className={styles.roomImageContainer}>
              <Image
                src="/images/room_single.png"
                alt="Same Hotel Single Room"
                fill
                priority
                className={styles.roomImage}
              />
              <span className={styles.roomPriceBadge}>$25 / Night</span>
            </div>
            <div className={styles.roomDetails}>
              <h3 className={styles.roomTitle}>Single Room</h3>
              <p className={styles.roomDesc}>
                Experience cozy refinement. Specifically tailored for business executives and solo travelers seeking a peaceful and productive sanctuary. Featuring premium bedding, workspace, and luxury amenities.
              </p>
              <div className={styles.roomTags}>
                <span className={styles.roomTag}>1 Premium Bed</span>
                <span className={styles.roomTag}>Air Conditioning</span>
                <span className={styles.roomTag}>Free High-Speed Wi-Fi</span>
                <span className={styles.roomTag}>Smart TV</span>
                <span className={styles.roomTag}>En-suite Bathroom</span>
              </div>
              <a
                href={getWhatsAppLink("Single Room", 25)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.roomBookBtn}
              >
                Book Single Room
              </a>
            </div>
          </div>

          {/* Card 2: Double Room */}
          <div className={styles.roomCard}>
            <div className={styles.roomImageContainer}>
              <Image
                src="/images/room_double.png"
                alt="Same Hotel Double Room"
                fill
                className={styles.roomImage}
              />
              <span className={styles.roomPriceBadge}>$30 / Night</span>
            </div>
            <div className={styles.roomDetails}>
              <h3 className={styles.roomTitle}>Double Room</h3>
              <p className={styles.roomDesc}>
                Unwind in absolute comfort. Specially designed for couples or colleagues looking for extra space. Indulge in refined architecture, double premium beds, elegant wardrobe space, and high-end room service.
              </p>
              <div className={styles.roomTags}>
                <span className={styles.roomTag}>1 Double / 2 Twin Beds</span>
                <span className={styles.roomTag}>Air Conditioning</span>
                <span className={styles.roomTag}>Free High-Speed Wi-Fi</span>
                <span className={styles.roomTag}>Private Safe</span>
                <span className={styles.roomTag}>Spacious Desk</span>
                <span className={styles.roomTag}>Flat Screen TV</span>
              </div>
              <a
                href={getWhatsAppLink("Double Room", 30)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.roomBookBtn}
              >
                Book Double Room
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
