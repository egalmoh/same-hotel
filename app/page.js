'use client';

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [bookingInfo, setBookingInfo] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getWhatsAppLink = () => {
    const { name, checkIn, checkOut, guests } = bookingInfo;
    const text = `Hello Same Hotel, I would like to book a stay:\n\n👤 Name: ${name || "Not specified"}\n📅 Check-in: ${checkIn || "Not specified"}\n📅 Check-out: ${checkOut || "Not specified"}\n👥 Guests: ${guests}`;
    return `https://wa.me/252610000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className={styles.container}>

      {/* Hero Section */}
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <Image
              src="/images/resort_hero.png"
              alt="Luxury resort infinity pool at sunset"
              fill
              priority
              quality={100}
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay}></div>
          </div>
          
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              A Sanctuary<br />of Refined Elegance
            </h1>
          </div>
        </section>

        {/* Floating Booking Bar */}
        <section className={styles.bookingBarContainer}>
          <div className={styles.bookingBar}>
            
            {/* Input 1: Name */}
            <div className={styles.bookingGroup}>
              <label htmlFor="booking-name" className={styles.bookingLabel}>Full Name</label>
              <input
                id="booking-name"
                type="text"
                name="name"
                value={bookingInfo.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className={styles.bookingInput}
              />
            </div>

            <div className={styles.bookingDivider}></div>

            {/* Input 2: Check-in */}
            <div className={styles.bookingGroup}>
              <label htmlFor="booking-in" className={styles.bookingLabel}>Check In</label>
              <input
                id="booking-in"
                type="date"
                name="checkIn"
                value={bookingInfo.checkIn}
                onChange={handleInputChange}
                className={styles.bookingInput}
              />
            </div>

            <div className={styles.bookingDivider}></div>

            {/* Input 3: Check-out */}
            <div className={styles.bookingGroup}>
              <label htmlFor="booking-out" className={styles.bookingLabel}>Check Out</label>
              <input
                id="booking-out"
                type="date"
                name="checkOut"
                value={bookingInfo.checkOut}
                onChange={handleInputChange}
                className={styles.bookingInput}
              />
            </div>

            <div className={styles.bookingDivider}></div>

            {/* Input 4: Guests */}
            <div className={styles.bookingGroup}>
              <label htmlFor="booking-guests" className={styles.bookingLabel}>Guests</label>
              <select
                id="booking-guests"
                name="guests"
                value={bookingInfo.guests}
                onChange={handleInputChange}
                className={styles.bookingInput}
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5+">5+ Guests</option>
              </select>
            </div>

            <div className={styles.bookingDivider}></div>

            {/* Submit Button */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bookingSubmit}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 2-7 20-4-9-9-4Z"/>
                <path d="M22 2 11 13"/>
              </svg>
              <span>Book Stay</span>
            </a>

          </div>
        </section>

        {/* Services Showcase Section */}
        <section id="rooms" className={styles.services}>
          <div className={styles.servicesContainer}>
            
            {/* Column 1: Luxury Accommodation */}
            <div className={styles.serviceColumn}>
              <div className={styles.serviceIconOuter}>
                <svg className={styles.serviceIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 4v16"/>
                  <path d="M2 8h18a2 2 0 0 1 2 2v10"/>
                  <path d="M2 17h20"/>
                  <path d="M6 8v9"/>
                </svg>
              </div>
              <h3 className={styles.serviceColumnTitle}>Luxury Accommodation</h3>
              <p className={styles.serviceColumnDesc}>
                Our guests can experience utmost comfort in our luxurious, ultra-modern 75 spacious rooms and suites. Brilliantly designed and fitted with an en-suite bathroom with modern shower, TV with satellite stations, worktable and chair, a wardrobe, private safe, designer beds, and Free Wi-Fi available in all rooms and common areas.
              </p>
            </div>

            {/* Column 2: Conference & Workshop Facilities */}
            <div className={styles.serviceColumn}>
              <div className={styles.serviceIconOuter}>
                <svg className={styles.serviceIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
                  <path d="M9 22v-4h6v4"/>
                  <path d="M8 6h2"/>
                  <path d="M14 6h2"/>
                  <path d="M8 10h2"/>
                  <path d="M14 10h2"/>
                  <path d="M8 14h2"/>
                  <path d="M14 14h2"/>
                </svg>
              </div>
              <h3 className={styles.serviceColumnTitle}>Conference & Workshop Facilities</h3>
              <p className={styles.serviceColumnDesc}>
                Same Hotel offers contemporary, well-designed facilities in a quiet, calm, and secure business environment for conferences, workshops, and seminars. These include state-of-the-art Audio Visual Equipment, LCD Projectors, Screens, Flip Charts & White Boards, Notebooks, PA Systems, and Masking tapes, all perfectly suitable for meetings.
              </p>
            </div>

            {/* Column 3: Cafeteria and Restaurant */}
            <div className={styles.serviceColumn}>
              <div className={styles.serviceIconOuter}>
                <svg className={styles.serviceIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
                  <line x1="6" y1="2" x2="6" y2="4"/>
                  <line x1="10" y1="2" x2="10" y2="4"/>
                  <line x1="14" y1="2" x2="14" y2="4"/>
                </svg>
              </div>
              <h3 className={styles.serviceColumnTitle}>Cafeteria and Restaurant</h3>
              <p className={styles.serviceColumnDesc}>
                We feature a main restaurant, a cozy cafeteria, and a beautiful garden area. The Same Hotel Restaurant, terrace cafeteria, and lush gardens are all furnished with modern facilities that offer a wide variety of mouth-watering delicacies of local Somali and international Continental cuisines.
              </p>
            </div>

          </div>
        </section>

        {/* Features Section */}
        <section id="experiences" className={styles.features}>
          <div className={styles.featuresHeader}>
            <h2 className={styles.featuresTitle}>Our Features</h2>
            <p className={styles.featuresSubtitle}>Everything you need for a comfortable stay</p>
          </div>

          <div className={styles.featuresGrid}>
            {/* Card 1: Free WiFi */}
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h.01"/>
                  <path d="M8.5 16.5a5 5 0 0 1 7 0"/>
                  <path d="M5 13a10 10 0 0 1 14 0"/>
                  <path d="M1.5 9.5a15 15 0 0 1 21 0"/>
                </svg>
              </div>
              <h3 className={styles.featureCardTitle}>Free WiFi</h3>
              <p className={styles.featureCardDesc}>High-speed internet access throughout the hotel</p>
            </div>

            {/* Card 2: AC Rooms */}
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
                </svg>
              </div>
              <h3 className={styles.featureCardTitle}>AC Rooms</h3>
              <p className={styles.featureCardDesc}>Climate-controlled comfort in every room</p>
            </div>

            {/* Card 3: Restaurant */}
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                  <path d="M7 2v20"/>
                  <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
                </svg>
              </div>
              <h3 className={styles.featureCardTitle}>Restaurant</h3>
              <p className={styles.featureCardDesc}>Delicious Somali and international cuisine</p>
            </div>

            {/* Card 4: Parking */}
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
                  <circle cx="7" cy="17" r="2"/>
                  <path d="M9 17h6"/>
                  <circle cx="17" cy="17" r="2"/>
                </svg>
              </div>
              <h3 className={styles.featureCardTitle}>Parking</h3>
              <p className={styles.featureCardDesc}>Secure parking facilities for guests</p>
            </div>

            {/* Card 5: 24/7 Service */}
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3 className={styles.featureCardTitle}>24/7 Service</h3>
              <p className={styles.featureCardDesc}>Round-the-clock assistance and support</p>
            </div>

            {/* Card 6: Premium Comfort */}
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3 className={styles.featureCardTitle}>Premium Comfort</h3>
              <p className={styles.featureCardDesc}>Luxurious amenities and bespoke design</p>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className={styles.reviews}>
          <div className={styles.reviewsHeader}>
            <h2 className={styles.reviewsTitle}>What Our Guests Say</h2>
            <p className={styles.reviewsSubtitle}>Real experiences from our valued guests</p>
          </div>

          <div className={styles.reviewsGrid}>
            
            {/* Review 1: Amina Hassan */}
            <div className={styles.reviewCard}>
              <div className={styles.avatarWrapper}>
                <Image
                  src="/images/avatar_amina.png"
                  alt="Amina Hassan"
                  width={64}
                  height={64}
                  className={styles.avatar}
                />
              </div>
              <div className={styles.starRow}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={styles.starIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <blockquote className={styles.reviewQuote}>
                "Outstanding service and beautiful rooms. The staff went above and beyond to make our stay comfortable. Highly recommend Same Hotel."
              </blockquote>
              <cite className={styles.reviewAuthor}>Naima Guled</cite>
            </div>

            {/* Review 2: Mohamed Ali */}
            <div className={styles.reviewCard}>
              <div className={styles.avatarWrapper}>
                <Image
                  src="/images/avatar_mohamed.png"
                  alt="Mohamed Ali"
                  width={64}
                  height={64}
                  className={styles.avatar}
                />
              </div>
              <div className={styles.starRow}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={styles.starIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <blockquote className={styles.reviewQuote}>
                "The restaurant serves amazing food, and the rooms are spotless. Great value for money and a wonderful experience in Somalia."
              </blockquote>
              <cite className={styles.reviewAuthor}>Farah Mohamed</cite>
            </div>

            {/* Review 3: Ibrahim Yusuf */}
            <div className={styles.reviewCard}>
              <div className={styles.avatarWrapper}>
                <Image
                  src="/images/avatar_ibrahim.png"
                  alt="Ibrahim Yusuf"
                  width={64}
                  height={64}
                  className={styles.avatar}
                />
              </div>
              <div className={styles.starRow}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={styles.starIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <blockquote className={styles.reviewQuote}>
                "Perfect comfort and excellent facilities. VIP professional service. The air conditioning was perfect and the WiFi was fast. Great place for business travelers."
              </blockquote>
              <cite className={styles.reviewAuthor}>Yusuf Ali</cite>
            </div>

          </div>
        </section>
      </main>


    </div>
  );
}
