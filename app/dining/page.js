'use client';

import Image from "next/image";
import styles from "../subpages.module.css";

export default function Dining() {
  const getWhatsAppOrderLink = (itemName, price) => {
    const text = `Hello Same Hotel, I would like to order the dining item:\n\n🍽️ Item: ${itemName}\n💰 Price: $${price.toFixed(2)}`;
    return `https://wa.me/2520907275534?text=${encodeURIComponent(text)}`;
  };

  const breakfastMenu = [
    {
      id: "suqaar",
      name: "Somali Suqaar",
      price: 5.00,
      type: "Somali Style",
      desc: "Tender sautéed beef cubes cooked with fresh bell peppers, onions, and traditional spices. Served hot.",
      image: "/images/food_suqaar.png"
    },
    {
      id: "liver",
      name: "Spiced Liver",
      price: 4.50,
      type: "Local Specialty",
      desc: "Pan-fried lamb liver tossed with garlic, green chilies, and coriander. A traditional breakfast favorite.",
      image: "/images/food_liver.png"
    },
    {
      id: "english",
      name: "English Breakfast",
      price: 10.00,
      type: "Continental",
      desc: "Classic breakfast featuring fried eggs, chicken sausages, baked beans, grilled tomatoes, and toasted bread.",
      image: "/images/food_english.png"
    },
    {
      id: "fasuliyad",
      name: "Fasuliyad (Beans)",
      price: 3.00,
      type: "Vegetarian",
      desc: "Slow-simmered white beans cooked in a rich tomato, garlic, and cumin sauce. Served with fresh bread.",
      image: "/images/food_fasuliyad.png"
    }
  ];

  const meatMenu = [
    {
      id: "lamb",
      name: "Somali Slow-Cooked Lamb (Haniid)",
      price: 12.00,
      type: "Somali Classic",
      desc: "Delicate mutton slow-cooked for hours under low pressure until it falls off the bone. Served over spiced basmati rice.",
      image: "/images/restaurant_cozy.png" // Reusing cozy restaurant/food interior background gracefully
    },
    {
      id: "chicken",
      name: "Grilled Charcoal Chicken",
      price: 9.50,
      type: "Charcoal Special",
      desc: "Half chicken marinated in garlic, lemon, and local spices, charcoal grilled to perfection. Served with salad and flatbread.",
      image: "/images/restaurant_cozy.png"
    },
    {
      id: "fish",
      name: "Pan-Seared Red Snapper",
      price: 14.00,
      type: "Seafood Special",
      desc: "Freshly caught local red snapper fillet seared with herbs and garlic butter sauce, served with sautéed vegetables.",
      image: "/images/restaurant_cozy.png"
    },
    {
      id: "bastoolo",
      name: "Somali Camel Meat (Bariis & Hilib)",
      price: 13.00,
      type: "Traditional VIP",
      desc: "Exquisite local camel meat sautéed with bell peppers and onions, served with fragrant Somali bariis (rice) and banana.",
      image: "/images/restaurant_cozy.png"
    }
  ];

  return (
    <div className={styles.subpageContainer}>
      {/* Hero Section */}
      <section className={styles.subpageHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>Culinary Excellence</p>
          <h1 className={styles.heroTitle}>Dining & Restaurant</h1>
        </div>
      </section>

      {/* Intro & Cozy Restaurant Image */}
      <section className={styles.section}>
        <div className={styles.diningIntro}>
          <p className={styles.diningDesc}>
            Indulge in a premium dining experience at Same Hotel. Our culinary team serves a curated selection of traditional local Somali delicacies and popular international Continental dishes. Enjoy your meals in our modern indoor dining area, cozy cafeteria, or lush tropical gardens.
          </p>
        </div>

        <div className={styles.cozyRestaurantContainer}>
          <Image
            src="/images/restaurant_cozy.png"
            alt="Same Hotel Cozy Dining Area"
            fill
            className={styles.restaurantImage}
            priority
          />
        </div>

        {/* Section 1: Morning Starters (Breakfast) */}
        <div className={styles.menuSection}>
          <div className={styles.menuHeader}>
            <div className={styles.menuIconCircle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div className={styles.menuHeaderDetails}>
              <span className={styles.menuSubtitle}>Served 6:30 AM - 11:00 AM</span>
              <h2 className={styles.menuTitle}>Morning Starters</h2>
            </div>
          </div>

          <div className={styles.menuGrid}>
            {breakfastMenu.map((item) => (
              <div key={item.id} className={styles.menuItemCard}>
                <div className={styles.menuItemImageContainer}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className={styles.menuItemImage}
                  />
                </div>
                <div className={styles.menuItemDetails}>
                  <div className={styles.menuItemMeta}>
                    <h3 className={styles.menuItemName}>{item.name}</h3>
                    <span className={styles.menuItemPrice}>${item.price.toFixed(2)}</span>
                  </div>
                  <span className={styles.menuItemType}>{item.type}</span>
                  <p className={styles.roomDesc} style={{ fontSize: "13px", marginBottom: "16px" }}>
                    {item.desc}
                  </p>
                  <a
                    href={getWhatsAppOrderLink(item.name, item.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.menuItemOrderBtn}
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Grilled & Slow-Cooked (Lunch & Dinner) */}
        <div className={styles.menuSection} style={{ marginTop: "40px" }}>
          <div className={styles.menuHeader}>
            <div className={styles.menuIconCircle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                <path d="M7 2v20" />
                <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
              </svg>
            </div>
            <div className={styles.menuHeaderDetails}>
              <span className={styles.menuSubtitle}>Served 12:00 PM - 10:30 PM</span>
              <h2 className={styles.menuTitle}>Somali Specialties & Meats</h2>
            </div>
          </div>

          <div className={styles.menuGrid}>
            {meatMenu.map((item) => (
              <div key={item.id} className={styles.menuItemCard}>
                <div className={styles.menuItemImageContainer}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className={styles.menuItemImage}
                  />
                </div>
                <div className={styles.menuItemDetails}>
                  <div className={styles.menuItemMeta}>
                    <h3 className={styles.menuItemName}>{item.name}</h3>
                    <span className={styles.menuItemPrice}>${item.price.toFixed(2)}</span>
                  </div>
                  <span className={styles.menuItemType}>{item.type}</span>
                  <p className={styles.roomDesc} style={{ fontSize: "13px", marginBottom: "16px" }}>
                    {item.desc}
                  </p>
                  <a
                    href={getWhatsAppOrderLink(item.name, item.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.menuItemOrderBtn}
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
