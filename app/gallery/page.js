'use client';

import Image from "next/image";
import styles from "../subpages.module.css";

export default function Gallery() {
  const columns = [
    {
      colId: 1,
      items: [
        { src: "/images/hotel_exterior.png", title: "Hotel Exterior", aspect: "square" },
        { src: "/images/room_single.png", title: "Cozy Single Room", aspect: "video" },
        { src: "/images/food_suqaar.png", title: "Traditional Suqaar", aspect: "square" },
      ]
    },
    {
      colId: 2,
      items: [
        { src: "/images/resort_hero.png", title: "Infinity Pool at Sunset", aspect: "tall" },
        { src: "/images/meeting_room.png", title: "Executive Conference Hall", aspect: "video" },
        { src: "/images/food_fasuliyad.png", title: "Signature Somali Breakfast", aspect: "square" },
      ]
    },
    {
      colId: 3,
      items: [
        { src: "/images/room_double.png", title: "Spacious Double Room", aspect: "video" },
        { src: "/images/restaurant_cozy.png", title: "Cozy Main Restaurant", aspect: "square" },
        { src: "/images/room_deluxe.png", title: "Elegant Deluxe Suite", aspect: "tall" },
      ]
    }
  ];

  return (
    <div className={styles.subpageContainer}>
      {/* Hero Section */}
      <section className={styles.subpageHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>Visual Showcase</p>
          <h1 className={styles.heroTitle}>Gallery</h1>
        </div>
      </section>

      {/* Intro and Masonry Grid Section */}
      <section className={styles.section}>
        <div className={styles.diningIntro}>
          <h2 className={styles.roomTitle} style={{ textAlign: "center", fontSize: "32px" }}>A Glimpse of Stillness</h2>
          <p className={styles.diningDesc}>
            Explore our curated selection of spaces and dining experiences, designed to offer our guests a sanctuary of architectural purity and comfort.
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
