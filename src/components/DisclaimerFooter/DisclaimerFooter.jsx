import styles from "./DisclaimerFooter.module.scss";

export default function DisclaimerFooter() {
  return (
    <div className={styles.disclaimer}>
      <div className={styles.container}>
        <p>
          All files, including images, documents, and text content, featured on
          this website belong to their respective owners and are used solely for
          educational purposes. If you believe that your work has been used on
          this site without proper permission or attribution, please contact us
          immediately so we can address the issue promptly.
        </p>
        <div className={styles.developers}>
          <p>Alamag</p>
          <p>Calendario</p>
          <p>Lalis</p>
          <p>Marcellana</p>
          <p>Ramos</p>
          <p>Villegas</p>
        </div>
      </div>
    </div>
  );
}
