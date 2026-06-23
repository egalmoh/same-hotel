'use client';

import Link from "next/link";
import styles from "./Footer.module.css";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Footer Branding */}
        <div className={styles.footerBrand}>
          <div className={styles.footerLogoWrapper}>
            <Logo variant="gold" width={40} height={40} className={styles.footerLogoIcon} />
            <h2 className={styles.footerLogo}>Same Hotel</h2>
          </div>
          <p className={styles.footerTagline}>
            Redefining the standards of luxury through architectural purity and exceptional service.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIconLink} aria-label="Website">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </a>
            <a href="#" className={styles.socialIconLink} aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Nav Column */}
        <div className={styles.footerColumn}>
          <h4 className={styles.footerColTitle}>Navigation</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/" className={styles.footerLink}>Home</Link></li>
            <li><Link href="/rooms" className={styles.footerLink}>Rooms</Link></li>
            <li><Link href="/dining" className={styles.footerLink}>Dining</Link></li>
            <li><Link href="/bookings" className={styles.footerLink}>Bookings</Link></li>
            <li><Link href="/gallery" className={styles.footerLink}>Gallery</Link></li>
            <li><Link href="/about" className={styles.footerLink}>About</Link></li>
            <li><Link href="/contact" className={styles.footerLink}>Contact</Link></li>
          </ul>
        </div>

        {/* Footer Info Column */}
        <div className={styles.footerColumn}>
          <h4 className={styles.footerColTitle}>Information</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#" className={styles.footerLink}>Privacy Policy</a></li>
            <li><a href="#" className={styles.footerLink}>Terms of Service</a></li>
            <li><a href="#" className={styles.footerLink}>Press Kit</a></li>
            <li><a href="#" className={styles.footerLink}>Careers</a></li>
          </ul>
        </div>

        {/* Footer Inquiries & Newsletter Column */}
        <div className={styles.footerColumn}>
          <h4 className={styles.footerColTitle}>Inquiries</h4>
          <p className={styles.inquiryText}>stay@samehotel.com</p>
          <p className={styles.inquiryText}>+252 090 727 5534</p>
          
          <div className={styles.newsletter}>
            <h5 className={styles.newsletterTitle}>Join the Same Circle</h5>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className={styles.newsletterInput} 
                required
              />
              <button type="submit" className={styles.newsletterSubmit}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Footer Bottom Row */}
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>&copy; {new Date().getFullYear()} Same Hotel. All rights reserved.</p>
        <p className={styles.footerTheme}>DESIGNED FOR STILLNESS</p>
      </div>
    </footer>
  );
}
