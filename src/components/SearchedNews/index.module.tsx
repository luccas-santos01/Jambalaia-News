import { useState } from "react";
import useFetchIBGENews from "../../hooks/useFetchIBGENews";
import useHandleFavoriteClick from "../../functions/handleFavoriteClick";
import useFavorites from "../../hooks/useFavorites";
import NewsGrid from "../NewsGrid/index.module";
import styles from "./SearchedNews.module.css";

interface NewsComponentProps {
  searchValue: string;
}

const SearchedNews: React.FC<NewsComponentProps> = ({ searchValue }) => {
  const { data, loading } = useFetchIBGENews();
  const handleFavoriteClick = useHandleFavoriteClick();
  const { isFavorite } = useFavorites();
  const [visible, setVisible] = useState(12);

  if (loading || !data) return <div>Carregando...</div>;

  const newsItems = data.items.filter((news) =>
    news.titulo.toLowerCase().includes(searchValue.toLowerCase())
  );

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
};

export default SearchedNews;
