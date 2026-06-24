'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../subpages.module.css";

const roomsData = [
  {
    id: "single-room",
    title: "Single Room",
    price: 25,
    image: "/images/room_single.png",
    description: "Experience cozy refinement. Specifically tailored for business executives and solo travelers seeking a peaceful and productive sanctuary. Featuring premium bedding, workspace, and luxury amenities.",
    tags: ["1 Premium Bed", "Air Conditioning", "Free High-Speed Wi-Fi", "Smart TV", "En-suite Bathroom"]
  },
  {
    id: "double-room",
    title: "Double Room",
    price: 30,
    image: "/images/room_double.png",
    description: "Unwind in absolute comfort. Specially designed for couples or colleagues looking for extra space. Indulge in refined architecture, double premium beds, elegant wardrobe space, and high-end room service.",
    tags: ["1 Double / 2 Twin Beds", "Air Conditioning", "Free High-Speed Wi-Fi", "Private Safe", "Spacious Desk", "Flat Screen TV"]
  },
  {
    id: "deluxe-suite",
    title: "Deluxe Suite",
    price: 50,
    image: "/images/room_deluxe.png",
    description: "Immerse yourself in elevated luxury. Our Deluxe Suite is built for guests seeking premium architectural details, separate seating areas, gold accents, a plush king-size bed, and a spacious private bathroom.",
    tags: ["1 King Size Bed", "Seating Lounge", "Mini Bar", "Air Conditioning", "Free High-Speed Wi-Fi", "Espresso Machine"]
  },
  {
    id: "presidential-suite",
    title: "Presidential Suite",
    price: 80,
    image: "/images/room_presidential.png",
    description: "The peak of refined elegance and privacy. Spanning an expansive layout, the Presidential Suite features a private lounge, dining space, floor-to-ceiling views, and premium personalized services.",
    tags: ["Ultra King Bed", "Private Living Room", "Dining Area", "Panoramic View", "VIP Welcome Amenities", "Luxury Bathtub"]
  }
];

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
    return `https://wa.me/252614617988?text=${encodeURIComponent(text)}`;
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

      {/* Booking details form inside Rooms Page */}
      <section className={styles.section}>
        <div className={styles.diningIntro}>
          <h2 className={styles.roomTitle} style={{ textAlign: "center", fontSize: "32px" }}>Select Your Sanctuary</h2>
          <p className={styles.diningDesc}>
            Enter your booking details below, then click "Book Now" on your preferred room option to finalize your reservation via WhatsApp, or click "Explore Room" to see detailed specifications.
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
          {roomsData.map((room) => (
            <div key={room.id} className={styles.roomCard}>
              <div className={styles.roomImageContainer}>
                <Image
                  src={room.image}
                  alt={`Same Hotel ${room.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.roomImage}
                />
                <span className={styles.roomPriceBadge}>${room.price} / Night</span>
              </div>
              <div className={styles.roomDetails}>
                <h3 className={styles.roomTitle}>{room.title}</h3>
                <p className={styles.roomDesc}>{room.description}</p>
                
                <div className={styles.roomTags}>
                  {room.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.roomTag}>{tag}</span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "12px", marginTop: "auto" }}>
                  <Link 
                    href={`/rooms/${room.id}`}
                    className={styles.roomBookBtn}
                    style={{ backgroundColor: "var(--color-dark)", flex: 1, boxShadow: "none" }}
                  >
                    Explore Room
                  </Link>
                  <a
                    href={getWhatsAppLink(room.title, room.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.roomBookBtn}
                    style={{ flex: 1 }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
