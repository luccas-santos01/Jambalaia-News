import { useState } from "react";
import useFetchIBGENews from "../../hooks/useFetchIBGENews";
import useFavorites from "../../hooks/useFavorites";
import styles from "./NoticeSection.module.css";
import NewsGrid from "../NewsGrid/index.module.tsx";
import useHandleFavoriteClick from "../../functions/handleFavoriteClick.ts";

function NoticeSection() {
  const { data, loading } = useFetchIBGENews();
  const { isFavorite } = useFavorites();
  const handleFavoriteClick = useHandleFavoriteClick();
  const [visible, setVisible] = useState(12);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!data) {
    return <div>Nenhum dado encontrado</div>;
  }

  const newsItems = data.items.filter((item) => item.tipo === "Notícia");

  return (
    <div>
      <NewsGrid
        newsItems={newsItems.slice(0, visible)}
        handleFavoriteClick={handleFavoriteClick}
        isFavorite={isFavorite}
      />
      {visible < newsItems.length && (
        <button
          onClick={() => setVisible(visible + 12)}
          className={styles.showMoreButton}
        >
          Mostrar mais
        </button>
      )}
    </div>
  );
}

export default NoticeSection;
