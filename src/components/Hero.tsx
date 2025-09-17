import styles from "./hero.module.css";

export default function Hero({
  photoUrl = "../../public/20250505_144248.jpg" // mets ton image dans /public/images
}) {
  return (
    <div className={styles["page-root"]}>
      {/* Navbar */}
      <nav className={styles.nav}>
        <div className={styles["nav-inner"]}>
          <div className={styles.brand}>
            <span className={styles.dot} /> Edouard{" "}
            <span className={styles.role}>/ dev</span>
          </div>
          <ul className={styles.links}>
            <li><a href="#presentation">Présentation</a></li>
            <li><a href="#projets">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a className={styles.btn} href="#cv">CV</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles["desktop-1"]}>
        {/* Nom */}
        <div className={styles["mouret-edouard"]} style={{ fontWeight: 700 }}>
          <p className={styles.mouret}>MOURET</p>
          <p className={styles.mouret}>Edouard</p>
        </div>

        {/* Rôle */}
        <div
          className={styles["dveloppeur-web-container"]}
          style={{ fontWeight: 700 }}
        >
          <p className={styles.mouret}>DÉVELOPPEUR WEB</p>
          <p className={styles.mouret}>&lt;/&gt; FULLSTACK</p>
        </div>

        {/* Ligne + Carte + Photo */}
        <div className={styles["desktop-1-child"]} />
        <div className={styles["desktop-1-item"]} />
        <img
          className={styles.portrait}
          src={photoUrl}
          alt="Portrait d'Edouard"
        />

        {/* Chevron bas */}
        <svg className={styles.chevron} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </section>
    </div>
  );
}
