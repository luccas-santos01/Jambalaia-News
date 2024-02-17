import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Trybe News</h1>
    </div>
  );
}

export default Header;
