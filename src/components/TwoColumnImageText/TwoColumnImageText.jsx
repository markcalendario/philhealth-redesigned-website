import styles from "./TwoColumnImageText.module.scss";

export default function TwoColumnImageText({ children, img, alt, reversed }) {
  return (
    <div id={styles.section} className={reversed && styles.reverse}>
      <div className={styles.container}>
        <div className={styles.wrapper + " " + styles.reverse}>
          <div className={styles.left}>{children}</div>
          <div className={styles.right}>
            <img
              data-aos={`fade-${reversed ? "right" : "left"}`}
              src={img}
              alt={alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
