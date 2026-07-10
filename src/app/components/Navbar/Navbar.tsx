"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Transformations", href: "/transformations" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQS", href: "/faqs" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          Atomic Fitness
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
      </div>
    </header>
  );
}
