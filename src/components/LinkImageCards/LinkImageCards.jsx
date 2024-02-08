import styles from "./LinkImageCards.module.scss";

export default function LinkImageCard({
  href,
  image,
  alt,
  title,
  description
}) {
  return (
    <a href={href} className={styles.imageCard}>
      <img src={image} alt={alt} />
      <div className={styles.texts}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  );
}
