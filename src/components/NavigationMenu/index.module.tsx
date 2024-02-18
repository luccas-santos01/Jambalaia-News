import styles from "./NavigationMenu.module.css";

const NavigationMenu = () => (
  <div className={styles.menuNavegacao}>
    <button className={styles.botaoMenu}>Mais recentes</button>
    <button className={styles.botaoMenu}>Release</button>
    <button className={styles.botaoMenu}>Notícia</button>
    <button className={styles.botaoMenu}>Favoritas</button>
  </div>
);

export default NavigationMenu;
