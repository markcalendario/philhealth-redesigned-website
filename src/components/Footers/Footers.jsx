import styles from "./Footers.module.scss";

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>PhilHealth</h1>
          <div className={styles.govtLogos}>
            <img
              src="/assets/images/govt-logos/corporate-governance.png"
              alt="Corporate Governance"
            />
            <img
              src="/assets/images/govt-logos/freedom-of-information.png"
              alt="Freedom of Infromation"
            />
            <img
              src="/assets/images/govt-logos/transparency-seal.png"
              alt="Transparency Seal"
            />
          </div>
          <div className={styles.links}>
            <a
              href="https://www.facebook.com/PhilHealthOfficial/"
              target="_blank">
              <i className="fab fa-facebook-square" />
            </a>
            <a href="https://twitter.com/teamphilhealth" target="_blank">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://www.youtube.com/@teamphilhealth" target="_blank">
              <i className="fab fa-youtube" />
            </a>
          </div>
          <p>
            © 2014 Philippine Health Insurance Corporation | Citystate Centre,
            709 Shaw Boulevard 1603 Pasig City | Action Center 8441-7442
          </p>
        </div>
      </div>
    </footer>
  );
}
