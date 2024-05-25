import { useState } from "react";
import useFetchIBGENews from "../../hooks/useFetchIBGENews";
import useFavorites from "../../hooks/useFavorites";
import styles from "./NewsSection.module.css";
import NewsGrid from "../NewsGrid/index.module.tsx";
import useHandleFavoriteClick from "../../functions/handleFavoriteClick.ts";

function NewsSection() {
  const { data, loading } = useFetchIBGENews();
  const { isFavorite } = useFavorites();
  const handleFavoriteClick = useHandleFavoriteClick();
  const [visible, setVisible] = useState(12);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!data) {
    return <div>Não há dados disponíveis</div>;
  }

  const newsItems = data.items.slice(1, visible + 1);

  return (
    <div>
      <NewsGrid
        newsItems={newsItems}
        handleFavoriteClick={handleFavoriteClick}
        isFavorite={isFavorite}
      />
      {visible < data.items.length && (
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

export default NewsSection;
