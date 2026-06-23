'use client';

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import styles from "../subpages.module.css";

// All gallery items mapped to their categories
const galleryItems = [
  { src: "/images/hotel_exterior.png", title: "Hotel Exterior", aspect: "square", category: "accommodations" },
  { src: "/images/room_single.png", title: "Cozy Single Room", aspect: "video", category: "accommodations" },
  { src: "/images/room_double.png", title: "Spacious Double Room", aspect: "video", category: "accommodations" },
  { src: "/images/room_deluxe.png", title: "Elegant Deluxe Suite", aspect: "tall", category: "accommodations" },
  { src: "/images/room_presidential.png", title: "Opulent Presidential Suite", aspect: "tall", category: "accommodations" },
  { src: "/images/resort_hero.png", title: "Infinity Pool at Sunset", aspect: "tall", category: "accommodations" },
  { src: "/images/meeting_room.png", title: "Executive Boardroom Layout", aspect: "video", category: "conference" },
  { src: "/images/meeting_banquet.png", title: "Banqueting Hall dinner", aspect: "square", category: "conference" },
  { src: "/images/meeting_seminar.png", title: "Seminar Class Classroom", aspect: "tall", category: "conference" },
  { src: "/images/restaurant_cozy.png", title: "Cozy Main Restaurant", aspect: "square", category: "dining" },
  { src: "/images/food_suqaar.png", title: "Traditional Suqaar Dish", aspect: "square", category: "dining" },
  { src: "/images/food_fasuliyad.png", title: "Signature Somali Breakfast", aspect: "square", category: "dining" },
];

function GalleryContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  // Filter items based on active category. Default to all photos.
  const filteredItems = category 
    ? galleryItems.filter(item => item.category === category)
    : galleryItems;

  // Partition filtered items into 3 columns dynamically to support masonry look without layout gaps
  const columns = [
    { colId: 1, items: [] },
    { colId: 2, items: [] },
    { colId: 3, items: [] }
  ];

  filteredItems.forEach((item, index) => {
    columns[index % 3].items.push(item);
  });

  const getPageTitle = () => {
    if (category === "accommodations") return "Accommodations Photos";
    if (category === "conference") return "Conference Photos";
    return "Gallery";
  };

  const getPageSubtitle = () => {
    if (category === "accommodations") return "Explore our rooms, suites, and tranquil surroundings";
    if (category === "conference") return "Explore our state-of-the-art corporate event spaces";
    return "A glimpse of stillness and pure architecture";
  };

  return (
    <div className={styles.subpageContainer}>
      {/* Hero Section */}
      <section className={styles.subpageHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>Visual Showcase</p>
          <h1 className={styles.heroTitle}>{getPageTitle()}</h1>
        </div>
      </section>

      {/* Intro and Masonry Grid Section */}
      <section className={styles.section}>
        <div className={styles.diningIntro}>
          <h2 className={styles.roomTitle} style={{ textAlign: "center", fontSize: "32px" }}>
            {category === "accommodations" ? "Our Sanctuary Rooms" : category === "conference" ? "Our Event Spaces" : "A Glimpse of Stillness"}
          </h2>
          <p className={styles.diningDesc}>
            {getPageSubtitle()}. Every space is designed to balance luxury and functional clarity, aligning with our philosophy of quiet luxury.
          </p>
        </div>

        {/* Masonry Columns */}
        <div className={styles.galleryGrid}>
          {columns.map((col) => (
            <div key={col.colId} className={styles.galleryCol}>
              {col.items.map((item, idx) => {
                // Determine heights based on aspect
                let heightVal = 260;
                if (item.aspect === "tall") heightVal = 440;
                if (item.aspect === "square") heightVal = 300;

                return (
                  <div key={idx} className={styles.galleryItem} style={{ height: `${heightVal}px` }}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                      className={styles.restaurantImage}
                      priority={col.colId === 2 && idx === 0}
                    />
                    <div className={styles.galleryItemOverlay}>
                      <h3 className={styles.galleryItemTitle}>{item.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function Gallery() {
  return (
    <Suspense fallback={
      <div className={styles.subpageContainer} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <p style={{ color: "var(--color-gold)", fontFamily: "var(--font-serif)", fontSize: "20px" }}>Loading gallery sanctuary...</p>
      </div>
    }>
      <GalleryContent />
    </Suspense>
  );
}
