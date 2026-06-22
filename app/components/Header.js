'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

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
            SH
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
            <li className={styles.navItem}>
              <Link 
                href="/rooms" 
                className={`${styles.navLink} ${isActive('/rooms') ? styles.active : ''}`} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Rooms
              </Link>
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
