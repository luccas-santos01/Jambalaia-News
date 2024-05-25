import { useEffect, useState } from "react";
import styles from "./TransitionBar.module.css";

interface TransitionBarProps {
  activeButton: string;
}

const TransitionBar: React.FC<TransitionBarProps> = ({ activeButton }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    switch (activeButton) {
      case "Mais recentes":
        setText("Veja outras postagens recentes");
        break;
      case "Releases":
        setText("Confira nossos últimos lançamentos");
        break;
      case "Notícias":
        setText("Leia as últimas notícias");
        break;
      case "Favoritas":
        setText("Veja seus itens favoritos");
        break;
      default:
        setText("");
    }
  }, [activeButton]);

  return <h2 className={styles.h2Style}>{text}</h2>;
};

export default TransitionBar;
