import { useState, useEffect } from "react";
import useFetchIBGENews, { News } from "../../hooks/useFetchIBGENews";
import styles from "./FavoriteSection.module.css";
import moment from "moment";

interface NewsItem {
  id: number;
  image_url: string;
  title: string;
  description: string;
  url: string;
  published_at: string;
}

function FavoriteSection() {
  const { data, loading } = useFetchIBGENews();
  const [visible, setVisible] = useState(12);
  const [favoriteNews, setFavoriteNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    if (data) {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      const favoriteNewsData = data.items
        .filter((news: News) => favorites.includes(news.id))
        .map((news: News) => ({
          id: news.id,
          image_url: news.imagens,
          title: news.titulo,
          description: news.introducao,
          url: news.link,
          published_at: news.data_publicacao,
        }));
      setFavoriteNews(favoriteNewsData);
    }
  }, [data]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!favoriteNews) {
    return <div>Não há dados disponíveis</div>;
  }

  const newsItems = favoriteNews.slice(0, visible);

  return (
    <div>
      <div className={styles.newsGrid}>
        {newsItems.map((news, index) => {
          const publicationDate = moment(
            news.published_at,
            "DD/MM/YYYY HH:mm:ss"
          );
          const timeSincePublication = moment().diff(publicationDate, "days");

          return (
            <div key={index} className={styles.newsCard}>
              <h2>{news.title}</h2>
              <p>Publicado há {timeSincePublication} dias</p>
              <p>{news.description}</p>
              <button
                onClick={() => window.open(news.url, "_blank")}
                className={styles.readNewsButton}
              >
                Ler Notícia
              </button>
            </div>
          );
        })}
      </div>
      {data && data.items && visible < data.items.length && (
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

export default FavoriteSection;
