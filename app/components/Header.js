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
  const isAccommodationsActive = () => pathname.startsWith('/rooms') && !pathname.includes('/meetings');
  const isMeetingsActive = () => pathname.includes('/meetings');

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
            
            {/* Accommodations Dropdown */}
            <li className={`${styles.navItem} ${styles.hasDropdown}`}>
              <Link 
                href="/rooms" 
                className={`${styles.navLink} ${isAccommodationsActive() ? styles.active : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accommodations
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
                  <path d="m1 1 4 4 4-4"/>
                </svg>
              </Link>
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link href="/rooms/single-room" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>
                    Single Room
                  </Link>
                </li>
                <li>
                  <Link href="/rooms/double-room" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>
                    Double Room
                  </Link>
                </li>
                <li>
                  <Link href="/rooms/deluxe-suite" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>
                    Deluxe Suite
                  </Link>
                </li>
                <li>
                  <Link href="/rooms/presidential-suite" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>
                    Presidential Suite
                  </Link>
                </li>
                <li>
                  <Link href="/rooms" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>
                    All Accommodations
                  </Link>
                </li>
              </ul>
            </li>

            {/* Functions & Events Dropdown */}
            <li className={`${styles.navItem} ${styles.hasDropdown}`}>
              <Link 
                href="/rooms/meetings" 
                className={`${styles.navLink} ${isMeetingsActive() ? styles.active : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Functions & Events
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
                  <path d="m1 1 4 4 4-4"/>
                </svg>
              </Link>
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link href="/rooms/meetings" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>
                    Events & Meetings
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

            {/* Gallery Dropdown */}
            <li className={`${styles.navItem} ${styles.hasDropdown}`}>
              <Link 
                href="/gallery" 
                className={`${styles.navLink} ${isActive('/gallery') ? styles.active : ''}`} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
                  <path d="m1 1 4 4 4-4"/>
                </svg>
              </Link>
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link href="/gallery?category=accommodations" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>
                    Accommodations Photos
                  </Link>
                </li>
                <li>
                  <Link href="/gallery?category=conference" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>
                    Conference Photos
                  </Link>
                </li>
              </ul>
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
