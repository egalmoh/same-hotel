'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../subpages.module.css";

const roomsData = {
  "single-room": {
    id: "single-room",
    title: "Single Room",
    price: 25,
    tagline: "A cozy sanctuary of modern productivity and quiet comfort.",
    image: "/images/room_single.png",
    description: "Designed with the modern executive and solo traveler in mind, our Single Room offers a perfect sanctuary of calm in Bosaso. Combining premium architectural details with highly functional spaces, it's ideal for wrapping up business tasks or resting in absolute quiet. Fully soundproofed and air-conditioned, this room offers everything needed for a seamless, comfortable stay.",
    specs: {
      size: "24 m²",
      view: "City / Garden",
      beds: "1 Premium Queen",
      occupancy: "1 Adult"
    },
    amenities: [
      "High-speed Wi-Fi", 
      "Air Conditioning", 
      "32\" Smart TV", 
      "Work Desk & Ergonomic Chair", 
      "In-room Digital Safe", 
      "Modern En-suite Bathroom", 
      "Luxury Toiletries", 
      "Daily Housekeeping", 
      "Ironing Facilities (On Request)", 
      "24/7 Room Service access"
    ]
  },
  "double-room": {
    id: "double-room",
    title: "Double Room",
    price: 30,
    tagline: "Generous space and refined comfort for shared stays.",
    image: "/images/room_double.png",
    description: "Crafted for colleagues or couples desiring extra breathing room, the Double Room balances spacious architectural design with exceptional service. Furnished with two premium double beds or a single king bed layout upon request, this room features high-quality linens, elegant wardrobe space, and a cozy seating nook. Enjoy standard high-speed Wi-Fi and direct access to room service options round the clock.",
    specs: {
      size: "32 m²",
      view: "City / Garden",
      beds: "2 Double Beds",
      occupancy: "2 Adults"
    },
    amenities: [
      "High-speed Wi-Fi", 
      "Air Conditioning", 
      "43\" Smart TV", 
      "Sitting Lounge Chairs", 
      "In-room Digital Safe", 
      "Spacious Wardrobe", 
      "En-suite Bathroom with Rain Shower", 
      "Luxury Toiletries", 
      "Complimentary Water", 
      "In-room Tea & Coffee Facilities"
    ]
  },
  "deluxe-suite": {
    id: "deluxe-suite",
    title: "Deluxe Suite",
    price: 50,
    tagline: "An elevated sanctuary of luxury, design, and stillness.",
    image: "/images/room_deluxe.png",
    description: "Step into a spacious retreat of elevated interior design and comfort. The Deluxe Suite features elegant gold accents, a dedicated living room seating area, and a plush king-size bed that guarantees deep rest. Every detail, from the rich textiles to the curated lighting layout, is selected to inspire stillness and ease. The luxurious en-suite bathroom features a modern walk-in rain shower and premium spa products.",
    specs: {
      size: "45 m²",
      view: "Panoramic City View",
      beds: "1 Ultra King Bed",
      occupancy: "2 Adults (1 Child)"
    },
    amenities: [
      "High-speed Wi-Fi", 
      "Air Conditioning", 
      "50\" Smart TV", 
      "Dedicated Living Lounge Area", 
      "In-room Digital Safe", 
      "Fully Stocked Mini Bar", 
      "Espresso Coffee Machine", 
      "Plush Bathrobes & Slippers", 
      "Walk-in Rain Shower", 
      "Executive Work Station"
    ]
  },
  "presidential-suite": {
    id: "presidential-suite",
    title: "Presidential Suite",
    price: 80,
    tagline: "The peak of refined elegance and customized butler service.",
    image: "/images/room_presidential.png",
    description: "The crown jewel of Same Hotel, the Presidential Suite is designed for VIPs, diplomats, and guests who expect the finest living experiences. The suite includes an expansive private master bedroom, a separate luxury living room with plush sofas, a dedicated dining area, and floor-to-ceiling windows showing breathtaking panoramic views. Guests enjoy personalized, round-the-clock butler services, airport pickup options, and customized dining arrangements.",
    specs: {
      size: "80 m²",
      view: "Full Panoramic Skyline",
      beds: "1 Royal King Bed",
      occupancy: "3 Adults max"
    },
    amenities: [
      "High-speed Wi-Fi", 
      "Climate Control (AC)", 
      "65\" OLED Smart TV", 
      "Private Living & Reception Room", 
      "Private Dining Table (4 Seats)", 
      "VIP Airport Pick-up & Fast Track", 
      "Personal Butler Service (24/7)", 
      "Deep Soaking Luxury Bathtub", 
      "Complimentary Premium Mini Bar", 
      "Nespresso Machine & Curated Teas"
    ]
  }
};

export default function RoomDetail({ params }) {
  const { id } = React.use(params);
  const room = roomsData[id];

  if (!room) {
    return (
      <div className={styles.subpageContainer} style={{ textAlign: "center", padding: "120px 20px" }}>
        <div className={styles.diningIntro}>
          <h1 className={styles.roomTitle} style={{ fontSize: "36px" }}>Sanctuary Not Found</h1>
          <p className={styles.diningDesc}>The room category you requested does not exist or has been relocated.</p>
          <Link href="/rooms" className={styles.roomBookBtn} style={{ maxWidth: "240px", margin: "30px auto 0" }}>
            Return to Rooms
          </Link>
        </div>
      </div>
    );
  }

  const getWhatsAppLink = () => {
    const text = `Hello Same Hotel, I would like to book a stay in your ${room.title} ($${room.price}/night). Please let me know availability!`;
    return `https://wa.me/2520907275534?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className={styles.subpageContainer} style={{ paddingValues: "0" }}>
      
      {/* Dynamic Header Image with Details Overlay */}
      <section className={styles.roomDetailHero}>
        <Image
          src={room.image}
          alt={room.title}
          fill
          priority
          quality={100}
          style={{ objectFit: "cover" }}
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.roomDetailHeroContent}>
          <p className={styles.heroSubtitle}>Exclusive Accommodations</p>
          <h1 className={styles.roomDetailTitle}>{room.title}</h1>
          <p className={styles.roomDetailPrice}>
            ${room.price} <span className={styles.roomDetailPriceSpan}>/ Night</span>
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className={styles.section}>
        <div className={styles.roomDetailBodyGrid}>
          
          {/* Left Column: Specs, Desc, Amenities, Policies */}
          <div>
            <h2 className={styles.roomTitle} style={{ fontSize: "28px" }}>About the Room</h2>
            <p className={styles.roomDescriptionText}>{room.description}</p>

            {/* Room Specs Block */}
            <div className={styles.roomSpecsGrid}>
              <div className={styles.roomSpecItem}>
                <span className={styles.roomSpecLabel}>Room Size</span>
                <span className={styles.roomSpecVal}>{room.specs.size}</span>
              </div>
              <div className={styles.roomSpecItem}>
                <span className={styles.roomSpecLabel}>View</span>
                <span className={styles.roomSpecVal}>{room.specs.view}</span>
              </div>
              <div className={styles.roomSpecItem}>
                <span className={styles.roomSpecLabel}>Beds</span>
                <span className={styles.roomSpecVal}>{room.specs.beds}</span>
              </div>
              <div className={styles.roomSpecItem}>
                <span className={styles.roomSpecLabel}>Occupancy</span>
                <span className={styles.roomSpecVal}>{room.specs.occupancy}</span>
              </div>
            </div>

            {/* Amenities Grid */}
            <div className={styles.amenitiesChecklist}>
              <h3 className={styles.checklistTitle}>Premium Amenities Included</h3>
              {room.amenities.map((item, idx) => (
                <div key={idx} className={styles.checklistItem}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Policies Block */}
            <div className={styles.policyBlock}>
              <h3 className={styles.policyTitle}>Sanctuary Policies</h3>
              <ul className={styles.policyList}>
                <li className={styles.policyItem}>Check-in starts from 2:00 PM</li>
                <li className={styles.policyItem}>Check-out is before 12:00 PM</li>
                <li className={styles.policyItem}>Strict no-smoking policy inside rooms</li>
                <li className={styles.policyItem}>Complimentary high-speed Wi-Fi throughout guest stay</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Sticky Sidebar Card */}
          <div className={styles.roomSidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarCardTitle}>Reservation Summary</h3>
              
              <div className={styles.sidebarInfoRow}>
                <span>Room Type</span>
                <span className={styles.sidebarInfoVal}>{room.title}</span>
              </div>
              <div className={styles.sidebarInfoRow}>
                <span>Base Rate</span>
                <span className={styles.sidebarInfoVal}>${room.price} / Night</span>
              </div>
              <div className={styles.sidebarInfoRow}>
                <span>Service Fee</span>
                <span className={styles.sidebarInfoVal}>$0 (Direct booking)</span>
              </div>
              <div className={styles.sidebarInfoRow}>
                <span>WiFi & Parking</span>
                <span className={styles.sidebarInfoVal} style={{ color: "#25d366" }}>Free</span>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "24px" }}>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                  style={{ width: "100%", padding: "14px" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.059-4.886c1.65.981 3.268 1.488 4.903 1.49 5.373 0 9.743-4.307 9.745-9.605.002-2.568-1.002-4.979-2.825-6.799C16.12 2.38 13.728 1.38 11.2 1.382c-5.38 0-9.75 4.31-9.753 9.612-.002 1.77.475 3.5 1.38 5.011L1.87 20.89l5.01-.818zM17.43 14.9c-.29-.145-1.72-.85-1.985-.947-.267-.097-.46-.145-.655.146-.193.29-.75.947-.919 1.14-.17.194-.338.22-.63.074-.29-.145-1.22-.45-2.325-1.434-.86-.767-1.44-1.716-1.61-2.006-.17-.29-.018-.446.127-.59.13-.13.29-.34.437-.508.145-.17.193-.29.29-.483.097-.193.048-.363-.024-.508-.073-.146-.655-1.579-.9-2.164-.24-.574-.48-.497-.657-.506-.17-.008-.364-.01-.56-.01-.193 0-.507.073-.77.363-.266.29-1.017.995-1.017 2.428 0 1.434 1.04 2.82 1.187 3.014.145.194 2.05 3.13 4.966 4.387.694.3 1.236.48 1.658.614.697.22 1.33.19 1.83.115.557-.08 1.72-.701 1.96-1.378.24-.678.24-1.258.17-1.379-.07-.12-.26-.19-.55-.337z" />
                  </svg>
                  <span>Direct Book via WhatsApp</span>
                </a>
                <Link
                  href={`/bookings?room=${room.id}`}
                  className={styles.roomBookBtn}
                  style={{ width: "100%", textAlign: "center", backgroundColor: "var(--color-dark)", boxShadow: "none" }}
                >
                  Custom Request Form
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
