import Image from "next/image";
import styles from "../subpages.module.css";

export default function About() {
  return (
    <div className={styles.subpageContainer}>
      {/* Hero Section */}
      <section className={styles.subpageHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>Our Story</p>
          <h1 className={styles.heroTitle}>About Same Hotel</h1>
        </div>
      </section>

      {/* Brand & Story Section */}
      <section className={styles.section}>
        <div className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>A Heritage of Exceptional Hospitality</h2>
            <p className={styles.aboutParagraph}>
              Welcome to Same Hotel, where contemporary luxury meets the warm embrace of traditional Somali hospitality. Located in a secure and peaceful business district, our hotel offers an oasis of calm, productivity, and world-class service.
            </p>
            <p className={styles.aboutParagraph}>
              Since our founding, we have committed ourselves to raising the standard of accommodation in Somalia. Whether you are visiting for an important international summit, a corporate workshop, or a relaxing weekend getaway, our team ensures your stay is nothing short of flawless.
            </p>
            <p className={styles.aboutParagraph}>
              Our design blends sleek, modern structural lines with elegant interior furnishings. With 75 spacious rooms and suites, fully-equipped conference halls, and lush garden terraces, we cater to the diverse needs of global travelers and local professionals alike.
            </p>
          </div>
          <div className={styles.aboutImageWrapper}>
            <Image
              src="/images/hotel_exterior.png"
              alt="Same Hotel Exterior and Architectural Design"
              fill
              className={styles.aboutImage}
              priority
            />
          </div>
        </div>

        {/* Core Values / Details Grid */}
        <div className={styles.diningIntro} style={{ marginTop: "60px", marginBottom: "40px" }}>
          <h2 className={styles.roomTitle} style={{ fontSize: "28px" }}>Why Guests Choose Us</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          width: "100%",
          maxWidth: "1100px",
          marginTop: "20px"
        }}>
          <div style={{
            backgroundColor: "var(--color-white)",
            padding: "32px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)"
          }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "var(--color-gold)", marginBottom: "12px" }}>
              Secure Sanctuary
            </h3>
            <p style={{ fontSize: "14px", lineHeight: "1.7", color: "var(--color-dark-muted)" }}>
              Your safety is our top priority. We feature state-of-the-art security installations, controlled gates, and 24/7 on-site personnel.
            </p>
          </div>
          <div style={{
            backgroundColor: "var(--color-white)",
            padding: "32px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)"
          }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "var(--color-gold)", marginBottom: "12px" }}>
              Business Ready
            </h3>
            <p style={{ fontSize: "14px", lineHeight: "1.7", color: "var(--color-dark-muted)" }}>
              Enjoy high-speed fiber-optic Wi-Fi, fully automated conference rooms, and a professional workspace in every room.
            </p>
          </div>
          <div style={{
            backgroundColor: "var(--color-white)",
            padding: "32px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)"
          }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "var(--color-gold)", marginBottom: "12px" }}>
              Fine Somali Cuisine
            </h3>
            <p style={{ fontSize: "14px", lineHeight: "1.7", color: "var(--color-dark-muted)" }}>
              Our master chefs combine fresh ingredients and spices to bring you authentic tastes alongside premium continental dining options.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
