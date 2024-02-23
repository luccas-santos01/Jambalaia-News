import styles from "./Header.module.css";
import logo from "../../images/jambalaia_logo.jpeg"
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
</style>;

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <h1 className={styles.title}>JAMBALAIA NEWS</h1>
    </div>
  );
}

export default Header;
