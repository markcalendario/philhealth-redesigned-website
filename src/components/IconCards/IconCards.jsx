import styles from "./IconCards.module.scss";

export default function IconCard({ icon, title, description }) {
  return (
    <div className={styles.iconCard} data-aos="fade-up">
      <div className={styles.wrapper}>
        <div className={styles.iconWrapper}>
          <i className={`${icon} fa-fw`} />
        </div>
        <div className={styles.texts}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}
