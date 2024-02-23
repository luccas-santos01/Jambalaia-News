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
        onClick={() => handleButtonClick("Release")}
        className={`${styles.botaoMenu} ${
          activeButton === "Release" ? styles.active : ""
        }`}
      >
        Release
      </button>
      <button
        onClick={() => handleButtonClick("Notícia")}
        className={`${styles.botaoMenu} ${
          activeButton === "Notícia" ? styles.active : ""
        }`}
      >
        Notícia
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
