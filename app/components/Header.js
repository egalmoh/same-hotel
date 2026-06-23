'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => pathname === path;

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink} onClick={() => setIsMobileMenuOpen(false)}>
            <Logo variant="currentColor" width={32} height={32} className={styles.logoIcon} />
            <span className={styles.logoText}>SAME HOTEL</span>
          </Link>
        </div>

        {/* Navigation links */}
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link 
                href="/" 
                className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            
            {/* Rooms Dropdown */}
            <li className={`${styles.navItem} ${styles.hasDropdown}`}>
              <Link 
                href="/rooms" 
                className={`${styles.navLink} ${isActive('/rooms') ? styles.active : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Rooms
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
                  <path d="m1 1 4 4 4-4"/>
                </svg>
              </Link>
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link href="/rooms" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>
                    All Rooms
                  </Link>
                </li>
                <li>
                  <Link href="/rooms/meetings" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>
                    Meetings & Events
                  </Link>
                </li>
              </ul>
            </li>

            <li className={styles.navItem}>
              <Link 
                href="/dining" 
                className={`${styles.navLink} ${isActive('/dining') ? styles.active : ''}`} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dining
              </Link>
            </li>
            
            <li className={styles.navItem}>
              <Link 
                href="/bookings" 
                className={`${styles.navLink} ${isActive('/bookings') ? styles.active : ''}`} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Bookings
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link 
                href="/gallery" 
                className={`${styles.navLink} ${isActive('/gallery') ? styles.active : ''}`} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link 
                href="/about" 
                className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                href="/contact" 
                className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                href="/#reviews" 
                className={styles.navLink} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href="/#booking" className={styles.ctaButton} onClick={() => setIsMobileMenuOpen(false)}>
            Check Availability
          </Link>
          
          {/* Hamburger Button */}
          <button 
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerActive : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span className={styles.hamburgerBar}></span>
            <span className={styles.hamburgerBar}></span>
            <span className={styles.hamburgerBar}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
