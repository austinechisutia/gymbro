import { Reveal } from "../Reveal/Reveal";
import styles from "./CtaCommunity.module.css";

const LINKS = ["Home", "Services", "About", "Contact"];

const SOCIALS = [
  {
    name: "Instagram",
    href: "#",
    path: "M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 1.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM16.5 4.5h-9A3 3 0 0 0 4.5 7.5v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3Zm1.5 12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 16.5v-9A1.5 1.5 0 0 1 7.5 6h9A1.5 1.5 0 0 1 18 7.5v9Zm-1.13-9.63a.88.88 0 1 1-1.75 0 .88.88 0 0 1 1.75 0Z",
  },
  {
    name: "Facebook",
    href: "#",
    path: "M13.5 9.5V8a1 1 0 0 1 1-1h1.5V4h-2A3.5 3.5 0 0 0 10.5 7.5v2H8.5v3h2V20h3v-7.5h2.1l.4-3h-2.5Z",
  },
  {
    name: "X",
    href: "#",
    path: "M13.6 10.9 19.3 4h-1.6l-4.9 5.9L8.9 4H4l6 8.6L4.3 20h1.6l5.2-6.3 4.1 6.3H20l-6.4-9.1Zm-1.8 2.2-.6-.9L6.4 5.2h2.1l3.9 5.6.6.9 5 7.2h-2.1l-4.1-6Z",
  },
  {
    name: "TikTok",
    href: "#",
    path: "M15.5 4h-2.3v10.4a2.3 2.3 0 1 1-1.6-2.2v-2.4a4.7 4.7 0 1 0 4.1 4.7V9.1a6 6 0 0 0 3.4 1.1V7.9a3.6 3.6 0 0 1-3.6-3.6V4Z",
  },
];

export function CtaCommunity() {
  return (
    <section className={styles.section} id="cta-community">
      <div className="container">
        <nav className={styles.navRow}>
          {LINKS.map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </nav>

        <div className={styles.stage}>
          <img
            className={styles.runnerImg}
            src="/figma/cta-community.png"
            alt="Runner sprinting"
          />
          <div className={styles.socials}>
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={styles.social}
                aria-label={social.name}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={social.path} fill="currentColor" />
                </svg>
              </a>
            ))}
          </div>
          <Reveal className={styles.heading}>
            <h2>Join Our Community</h2>
          </Reveal>
        </div>

        <div className={styles.divider} />
      </div>
    </section>
  );
}
