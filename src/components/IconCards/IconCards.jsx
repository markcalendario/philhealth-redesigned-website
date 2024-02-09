import styles from "./IconCards.module.scss";

export default function IconCard({ icon, title, description }) {
  return (
    <div className={styles.iconCard}>
      <div className={styles.wrapper}>
        <i className={`${icon} fa-fw`} />
        <div className={styles.texts}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}