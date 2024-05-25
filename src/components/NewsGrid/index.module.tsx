import styles from "./NewsGrid.module.css";
import NewsCard from "../NewsCard/index.module.tsx";

interface NewsGridProps {
  newsItems: any[];
  handleFavoriteClick: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const NewsGrid: React.FC<NewsGridProps> = ({
  newsItems,
  handleFavoriteClick,
  isFavorite,
}) => {
  return (
    <div className={styles.newsGrid}>
      {newsItems &&
        newsItems.map((news, index) => (
          <NewsCard
            key={index}
            news={news}
            handleFavoriteClick={handleFavoriteClick}
            isFavorite={isFavorite}
          />
        ))}
    </div>
  );
};

export default NewsGrid;
