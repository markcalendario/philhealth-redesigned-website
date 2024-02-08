import styles from "./IconButtons.module.scss";

export default function IconButton({ fontAwesomeIcon, className, onClick }) {
  return (
    <button onClick={onClick} className={`${styles.iconButton} ${className}`}>
      <i className={`${fontAwesomeIcon} fa-fw`} />
    </button>
  );
}
