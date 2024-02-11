import styles from "./IconCardLinear.module.scss";

export default function IconCardLinear({ title, description }) {
  return (
    <div className={styles.iconCardLinear}>
      <div className={styles.wrapper}>
        <i className="fas fa-check-circle" />
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}
