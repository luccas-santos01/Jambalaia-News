import styles from "./NavigationMenu.module.css";

interface NavigationMenuProps {
  activeButton: string;
  setActiveButton: (value: string) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  activeButton,
  setActiveButton,
}) => {
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className={styles.menuNavegacao}>
      <button
        onClick={() => handleButtonClick("Mais recentes")}
        className={`${styles.botaoMenu} ${
          activeButton === "Mais recentes" ? styles.active : ""
        }`}
      >
        Mais recentes
      </button>
      <button
        onClick={() => handleButtonClick("Releases")}
        className={`${styles.botaoMenu} ${
          activeButton === "Releases" ? styles.active : ""
        }`}
      >
        Releases
      </button>
      <button
        onClick={() => handleButtonClick("Notícias")}
        className={`${styles.botaoMenu} ${
          activeButton === "Notícia" ? styles.active : ""
        }`}
      >
        Notícias
      </button>
      <button
        onClick={() => handleButtonClick("Favoritas")}
        className={`${styles.botaoMenu} ${
          activeButton === "Favoritas" ? styles.active : ""
        }`}
      >
        Favoritas
      </button>
    </div>
  );
};

export default NavigationMenu;
