import { useState } from "react";
import useFetchIBGENews from "../../hooks/useFetchIBGENews";
import useFavorites from "../../hooks/useFavorites";
import moment from "moment";
import { IoMdHeart, IoIosHeartEmpty } from "react-icons/io";
import styles from "./SearchedNews.module.css";

interface NewsComponentProps {
  searchValue: string;
}

const SearchedNews: React.FC<NewsComponentProps> = ({ searchValue }) => {
  const { data, loading } = useFetchIBGENews();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const [visible, setVisible] = useState(12);

  const handleFavoriteClick = (id: number) => {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  if (loading || !data) return <div>Carregando...</div>;

  const newsItems = data.items.filter((news) =>
    news.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <div className={styles.newsGrid}>
        {newsItems.slice(0, visible).map((news, index) => {
          const publicationDate = moment(
            news.published_date,
            "DD/MM/YYYY HH:mm:ss"
          );
          const timeSincePublication = moment().diff(publicationDate, "days");

          return (
            <div key={index} className={styles.newsCard}>
              <h2>{news.title}</h2>
              <p>Publicado há {timeSincePublication} dias</p>
              <p>{news.introduction}</p>
              <div className={styles.buttonWrapper}>
                <button
                  onClick={() => window.open(news.link, "_blank")}
                  className={styles.readNewsButton}
                >
                  Ler Notícia
                </button>
                <button
                  onClick={() => handleFavoriteClick(news.id)}
                  className={styles.favoriteButton}
                >
                  {isFavorite(news.id) ? (
                    <IoMdHeart size={24} />
                  ) : (
                    <IoIosHeartEmpty size={24} />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
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
