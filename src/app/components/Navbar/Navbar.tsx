"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Products", href: "/products" },
  { label: "Transformations", href: "/transformations" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQS", href: "/faqs" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          Fitness
        </Link>
        
        <nav className={styles.links}>
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? styles.active : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <a className={styles.cta} href="#">
          Login
        </a>

        <button
          className={`${styles.menuToggle} ${isOpen ? styles.open : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      <div className={`${styles.mobileOverlay} ${isOpen ? styles.overlayOpen : ""}`}>
        <nav className={styles.mobileLinks}>
          {LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? styles.active : undefined}
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <a
            className={styles.mobileCta}
            href="#"
            onClick={() => setIsOpen(false)}
            style={{ animationDelay: `${LINKS.length * 60}ms` }}
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}
