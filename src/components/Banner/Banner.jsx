import styles from "./Banner.module.scss";

export default function Banner({ img, title }) {
  return (
    <div id={styles.banner} style={{ backgroundImage: `url(${img})` }}>
      <div className={styles.wrapper}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}
