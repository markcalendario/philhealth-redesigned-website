import styles from "./DownloadCard.module.scss";

export default function DownloadCard({
  highlight,
  icon,
  title,
  description,
  downloadLink
}) {
  return (
    <div
      className={
        styles.downloadCard + (highlight ? ` ${styles.highlight}` : "")
      }>
      <div className={styles.iconWrapper}>
        <i className={`${icon} fa-fw`} />
      </div>
      <div className={styles.texts}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <a href={downloadLink} download>
          <i className="fas fa-download fa-fw" /> <span>Download</span>
        </a>
      </div>
    </div>
  );
}
