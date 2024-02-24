import styles from "./Header.module.css";
import logo from "../../images/jambalaia_logo.jpeg";

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <h1 className={styles.title}>JAMBALAIA NEWS</h1>
    </div>
  );
}

export default Header;
